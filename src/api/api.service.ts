import {IResponseUsersData} from "../models/IResponseUsersData.ts";

const baseUrl= new URL(import.meta.env.VITE_API_BASE_URL);

export const APIService = {
    getUsersPerPage: async (userPerPage: number, page: number): Promise<IResponseUsersData> => {
        const endpoint = new URL('users', baseUrl);
        const skip: number = (page - 1) * userPerPage;
        endpoint.searchParams.set('limit', userPerPage.toString());
        endpoint.searchParams.set('skip', skip.toString());

        return await fetch(endpoint).then(res => res.json());
    }
}