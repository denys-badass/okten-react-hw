import {IFetchedComments, IFetchedPosts, IFetchedUsers} from "../models/IFetched.ts";

const baseUrl = new URL(import.meta.env.VITE_API_BASE_URL)

export const getUsers = async (): Promise<IFetchedUsers> => {
    const endpoint = new URL('/users', baseUrl);
    return await fetch(endpoint).then(response => response.json());
}

export const getPostsByUserId = async (userId: number): Promise<IFetchedPosts> => {
    const endpoint = new URL(`/users/${userId}/posts`, baseUrl);
    return await fetch(endpoint).then(response => response.json());
}

export const getCommentsByPostId = async (postId: number): Promise<IFetchedComments> => {
    const endpoint = new URL(`/comments/post/${postId}`, baseUrl);
    return await fetch(endpoint).then(response => response.json());
}