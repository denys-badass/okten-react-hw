import {IUser} from "../models/IUser.ts";
import {IPost} from "../models/IPost.ts";

const usersUrl: string = import.meta.env.VITE_API_BASE_URL + '/users';
const postsUrl: string = import.meta.env.VITE_API_BASE_URL + '/posts'

export const getUsers = async (): Promise<IUser[]> => {
    return await fetch(usersUrl).then(response => response.json());
}

export const getPostsByUserId = async (userId: number): Promise<IPost[]> => {
    return await fetch(postsUrl + `?userId=${userId}`).then(response => response.json());
}