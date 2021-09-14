export interface Credentials {
    username: string;
    passwd: string;
    encrypt?: "md5" | "bcrypt";
}

export interface LoginResponse {
    token: string;
    userId: number;
    redirect: string;
}
