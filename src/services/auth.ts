import { LoginData, LoginRequest, LoginResponse, VerifyData, VerifyRequest, VerifyResponse } from "@/interfaces/auth";
import api from "@/lib/axios";

export const login = async (username: string, password: string): Promise<LoginData> => {
    try {
        const response = await api.post("/auth/login", { username, password } as LoginRequest);
        const { data } = <LoginResponse>response.data;
        
        return data;
    } catch (error) {
        console.error("Login failed:", error);
        throw error;
    }
}

export const verify = async (username: string, code: string, token: string): Promise<VerifyData> => {
    try {
        const response = await api.post("/auth/verify", { username, code, token } as VerifyRequest);
        const { data } = <VerifyResponse>response.data;

        return data;
    } catch (error) {
        console.error("Verify failed:", error);
        throw error;
    }
}

export const logout = async () => {}