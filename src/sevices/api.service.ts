import {IProduct} from "../models/IProduct.ts";
import {IFetchedProducts} from "../models/IFetched.ts";

const productsEndpoint = new URL('/products', import.meta.env.VITE_API_BASE_URL);
productsEndpoint.searchParams.set('limit', '0');

export const getProducts = async (): Promise<IProduct[]> => {
    const data: IFetchedProducts = await fetch(productsEndpoint).then(response => response.json());
    return data.products;
}