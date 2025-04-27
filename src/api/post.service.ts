import {axiosInstance} from "./api.sevices.ts";
import {IPost} from "../models/IPost.ts";

export const postService = {
    getAllPosts: async (): Promise<IPost[]> => {
        const response = await axiosInstance.get<IPost[]>('/posts');
        return response.data;
    },
    getPostsByUserId: async (userId: number): Promise<IPost[]> => {
        const response = await axiosInstance.get<IPost[]>('/posts?userId=' + userId);
        return response.data;
    }
}