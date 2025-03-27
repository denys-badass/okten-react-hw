import {IUserModel} from "./IUserModel.ts";

export interface IFetchedUsers {
    users: IUserModel[];
    total: number;
    skip: number;
    limit: number;
}