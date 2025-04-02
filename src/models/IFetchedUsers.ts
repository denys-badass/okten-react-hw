import {IFetched} from "./IFetched.ts";
import {IUser} from "./IUser.ts";

export interface IFetchedUsers extends IFetched {
    users: IUser[];
}