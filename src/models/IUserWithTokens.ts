// Models for User response after authentication with tokens
export interface IUserWithTokens {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    image: string;
    accessToken: string;
    refreshToken: string;
}