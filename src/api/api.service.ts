import {IFetchedUsers} from "../models/IFetchedUsers.ts";
import {IUser} from "../models/IUser.ts";

const baseUrl: string = import.meta.env.VITE_API_BASE_URL;

export const APIService = {
    getUsers: async (): Promise<IUser[]> => {
            const endpoint = new URL('users', baseUrl);
            const fetchedData: IFetchedUsers = await fetch(endpoint).then(res => res.json());
            return fetchedData.users;
    }
}
