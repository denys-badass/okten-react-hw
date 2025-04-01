import {IUserPlaceholder} from "../models/placeholder-models/IUserPlaceholder.ts";
import {IPostPlaceholder} from "../models/placeholder-models/IPostPlaceholder.ts";
import {ICommentPlaceholder} from "../models/placeholder-models/ICommentPlaceholder.ts";

const baseUrl = import.meta.env.VITE_PLACEHOLDER_API_BASE_URL

export const PlaceholderService = {
    getUsers: async (): Promise<IUserPlaceholder[]> => {
        const endpoint = baseUrl + '/users';
        return await fetch(endpoint).then(res => res.json());
    },
    getPosts: async (): Promise<IPostPlaceholder[]> => {
        const endpoint = baseUrl + '/posts';
        return await fetch(endpoint).then(res => res.json());
    },
    getComments: async (): Promise<ICommentPlaceholder[]> => {
        const endpoint = baseUrl + '/comments';
        return await fetch(endpoint).then(res => res.json());
    }
}