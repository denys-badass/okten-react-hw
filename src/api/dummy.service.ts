import {IUserDummy} from "../models/dummy-models/IUserDummy.ts";
import {IFetchedUsers} from "../models/dummy-models/fetched-models/IFetchedUsers.ts";

const baseUrl = import.meta.env.VITE_DUMMY_API_BASE_URL;

export const DummyService = {
    getUsers: async (): Promise<IUserDummy[]> => {
        const endpoint = baseUrl + '/users'
        const fetchData: IFetchedUsers = await fetch(endpoint).then(res => res.json());
        return fetchData.users;
    }
}