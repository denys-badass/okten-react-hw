import {IResponseData} from "./IResponseData.ts";
import {IUser} from "./IUser.ts";

export interface IResponseUsersData extends IResponseData {
    users: IUser[];
}