import {IProduct} from "./IProduct.ts";

interface IFetched {
    total: number;
    skip: number;
    limit: number;
 }

 export interface IFetchedProducts extends IFetched {
    products: IProduct[];
 }