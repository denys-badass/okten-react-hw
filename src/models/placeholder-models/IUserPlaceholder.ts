import {IAddressPlaceholder} from "./IAddressPlaceholder.ts";

export interface IUserPlaceholder {
    id: number;
    name: string;
    username: string;
    email: string;
    address: IAddressPlaceholder;
}