import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000";

let accessToken: string | null = null;
let isRefreshing = false;
let refreshSubscribers: ((token: string) => void)[] = [];

const subscribeTokenRefresh = (cb: (token: string) => void) => {
	refreshSubscribers.push(cb);
};

const onRefreshed = (newToken: string) => {
	refreshSubscribers.forEach((cb) => cb(newToken));
	refreshSubscribers = [];
};

const api = axios.create({
	baseURL: API_BASE_URL,
	timeout: Number(process.env.NEXT_PUBLIC_API_TIMEOUT) || 10000,
	withCredentials: false,
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
	}
});

api.interceptors.request.use(
	async (config) => {
		const token = localStorage.getItem("access_token");
		
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}

		return config;
	},
	(error) => Promise.reject(error)
);

api.interceptors.response.use(
	(response) => response,
	async (error) => {
		const originalRequest = error.config;

		if (error.response?.status === 401 && !originalRequest._retry) {
			originalRequest._retry = true;

			if (isRefreshing) {
				return new Promise((resolve) => {
					subscribeTokenRefresh((newToken) => {
						if (newToken) {
							originalRequest.headers.Authorization = `Bearer ${newToken}`;
						}
						resolve(api(originalRequest));
					});
				});
			}

			isRefreshing = true;

			try {
				const res = await axios.post(`${API_BASE_URL}/auth/refresh`, {}, { withCredentials: true });
				const newAccessToken = res.data?.access_token;

				if (newAccessToken) {
					localStorage.setItem("access_token", newAccessToken);
					accessToken = newAccessToken;
					onRefreshed(newAccessToken);
				}

				isRefreshing = false;

				originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

				return api(originalRequest);
			} catch (refreshErr) {
				isRefreshing = false;
				accessToken = null;
				localStorage.removeItem("access_token");

				console.warn("Token refresh failed, redirecting to login...");

				return Promise.reject(refreshErr);
			}
		}

		return Promise.reject(error);
	}
);

export const setAccessToken = (token: string) => {
	accessToken = token;
	localStorage.setItem("access_token", token);
};

export const clearAccessToken = () => {
	accessToken = null;
	localStorage.removeItem("access_token");
};

export default api;
