import {IGeo} from "../IGeo.ts";

export interface IAddressPH {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: IGeo;
}