import axios from "axios";
import {IUserWithTokens} from "../models/IUserWithTokens.ts";
import {IProduct} from "../models/IProduct.ts";
import {IProductResponse} from "../models/IProductResponse.ts";
import {retriveLocalStorage} from "./helpers.ts";

type LoginData = {
    username: string;
    password: string;
    expiresInMins: number;
}

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/auth',
    headers: {'Content-Type': 'application/json'}
});

export const login = async ({username, password, expiresInMins}: LoginData): Promise<void> => {
    const {data} = await axiosInstance.post<IUserWithTokens>('/login', {username, password, expiresInMins});
    console.log(data);
    localStorage.setItem('user', JSON.stringify(data));
}

export const loadAuthProducts = async (): Promise<IProduct[]> => {
    const {data} = await axiosInstance.get<IProductResponse>('/products');
    console.log(data.products);
    return data.products;
}

export const refresh = async () => {
    const userWithTokens = retriveLocalStorage<IUserWithTokens>('user');
    const {data: {accessToken, refreshToken}} = await axiosInstance.post('/refresh', {
        refreshToken: userWithTokens.refreshToken, expiresInMins: 1
    });

    userWithTokens.accessToken = accessToken;
    userWithTokens.refreshToken = refreshToken;
    localStorage.setItem('user', JSON.stringify(userWithTokens));
}

axiosInstance.interceptors.request.use((request) => {
    if (request.method?.toUpperCase() === 'GET') {
        request.headers.Authorization = 'Bearer ' + retriveLocalStorage<IUserWithTokens>('user').accessToken
    }
    return request;
});