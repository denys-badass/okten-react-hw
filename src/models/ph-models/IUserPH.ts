import {IAddressPH} from "./IAddressPH.ts";

export interface IUserPH {
    id: number;
    name: string;
    username: string;
    email: string;
    address: IAddressPH;
}