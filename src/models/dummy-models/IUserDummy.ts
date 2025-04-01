import {IAddressDummy} from "./IAddressDummy.ts";
import {IHair} from "./IHair.ts";
import {IBank} from "./IBank.ts";
import {ICompany} from "./ICompany.ts";
import {ICrypto} from "./ICrypto.ts";

export interface IUserDummy {
    id: number;
    firstName: string;
    lastName: string;
    maidenName: string;
    age: number;
    gender: string;
    email: string;
    phone: string;
    username: string;
    password: string;
    birthDate: string;
    image: string;
    bloodGroup: string;
    height: number;
    weight: number;
    eyeColor: string;
    hair: IHair;
    ip: string;
    address: IAddressDummy;
    macAddress: string;
    university: string;
    bank: IBank;
    company: ICompany;
    ein: string;
    ssn: string;
    userAgent: string;
    crypto: ICrypto;
    role: string;
}