import {IUserPH} from "../models/ph-models/IUserPH.ts";

export const UserService =  {
    getUsers: async (baseUrl: string): Promise<IUserPH[]> => {
        return await fetch(baseUrl + '/users').then(response => response.json())
    }
}