import {IFetched} from "./IFetched.ts";
import {IUserDummy} from "../IUserDummy.ts";

export interface IFetchedUsers extends IFetched {
    users: IUserDummy[];
}