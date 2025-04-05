import {IFetched} from "./IFetched.ts";
import {ICart} from "./ICart.ts";

export interface IFetchedCarts extends IFetched {
    carts: ICart[];
}