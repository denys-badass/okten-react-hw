import {IUserModel} from "./IUserModel.ts";
import {IFetched} from "./IFetched.ts";

export interface IFetchedUsers extends IFetched {
    users: IUserModel[];
}