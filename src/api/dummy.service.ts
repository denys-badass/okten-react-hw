import {IUserDummy} from "../models/dummy-models/IUserDummy.ts";
import {IFetchedUsers} from "../models/dummy-models/fetched-models/IFetchedUsers.ts";
import {IPostDummy} from "../models/dummy-models/IPostDummy.ts";
import {IFetchedPosts} from "../models/dummy-models/fetched-models/IFetchedPosts.ts";
import {ICommentDummy} from "../models/dummy-models/ICommentsDummy.ts";
import {IFetchedComments} from "../models/dummy-models/fetched-models/IFetchedComments.ts";

const baseUrl = new URL(import.meta.env.VITE_DUMMY_API_BASE_URL);

export const DummyService = {
    getUsers: async (): Promise<IUserDummy[]> => {
        const endpoint = new URL('users', baseUrl);
        endpoint.searchParams.set('limit', '0');
        const fetchData: IFetchedUsers = await fetch(endpoint).then(res => res.json());
        return fetchData.users;
    },
    getUserById: async (userId: number): Promise<IUserDummy> => {
        const endpoint = new URL(`users/${userId}`, baseUrl);
        return await fetch(endpoint).then(res => res.json());
    },
    getPosts: async (): Promise<IPostDummy[]> => {
        const endpoint = new URL('posts', baseUrl);
        endpoint.searchParams.set('limit', '0');
        const fetchData: IFetchedPosts = await fetch(endpoint).then(res => res.json());
        return fetchData.posts;
    },
    getComments: async (): Promise<ICommentDummy[]> => {
        const endpoint = new URL('comments', baseUrl);
        endpoint.searchParams.set('limit', '0');
        const fetchData: IFetchedComments = await fetch(endpoint).then(res => res.json());
        return fetchData.comments;
    }
}