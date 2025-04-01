import {IGeo} from "../IGeo.ts";

export interface IAddressDummy {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
    coordinates: IGeo;
    country: string;
}