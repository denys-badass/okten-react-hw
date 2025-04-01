import {IAddressDummy} from "./IAddressDummy.ts";

export interface ICompany {
    department: string;
    name: string;
    title: string;
    address: IAddressDummy;
}
