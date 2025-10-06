export interface LoginRequest {
    username: string;
    password: string;
    remember?: boolean;
}

export interface LoginData {
    email: string;
    is_mfa: boolean;
    mfa_is_email: boolean;
    mfa_is_sms: boolean;
    mfa_is_totp: boolean;
    mfa_method: string;
    token: string;
};

export interface LoginResponse {
    data: LoginData;
    message: string;
}

export interface VerifyRequest {
    username: string;
    code: string;
    token: string;
}

export interface VerifyData {
    access_token: string;
    refresh_token: string;
}

export interface VerifyResponse {
    data: VerifyData;
    message: string;
}

export interface ChangeMfaMethodRequest { }

export interface ChangeMfaMethodResponse { }

export interface RefreshRequest { }

export interface RefreshResponse { }

export interface LogoutResponse { }