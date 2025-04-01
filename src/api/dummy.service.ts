import {endpoints} from "../constants/endpoints.ts";
import {IUserDummy} from "../models/dummy-models/IUserDummy.ts";
import {IFetchedUsers} from "../models/dummy-models/fetched-models/IFetchedUsers.ts";

const baseUrl = endpoints.dummy;

export const DummyService = {
    getUsers: async (): Promise<IUserDummy[]> => {
        const endpoint = baseUrl + '/users'
        const fetchData: IFetchedUsers = await fetch(endpoint).then(res => res.json());
        return fetchData.users;
    }
}