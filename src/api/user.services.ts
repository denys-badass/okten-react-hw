import {IUser} from "../models/IUser.ts";
import {axiosInstance} from "./api.sevices.ts";
import {IPost} from "../models/IPost.ts";

export const userServices = {
    getAllUsers: async (): Promise<IUser[]> => {
        const response = await axiosInstance.get<IUser[]>('/users');
        return response.data;
    },
    getUserPosts: async (id: number): Promise<IPost[]> => {
        const response = await axiosInstance.get<IPost[]>(`/users/${id}/posts`);
        return response.data;
    }
}