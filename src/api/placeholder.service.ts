import {endpoints} from "../constants/endpoints.ts";
import {IUserPlaceholder} from "../models/placeholder-models/IUserPlaceholder.ts";

const baseUrl = endpoints.placeholder

export const PlaceholderService = {
    getUsers: async (): Promise<IUserPlaceholder[]> => {
        const endpoint = baseUrl + '/users';
        return await fetch(endpoint).then(res => res.json());
    }
}