import {IGeo} from "../IGeo.ts";

export interface IAddressPlaceholder {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: IGeo;
}