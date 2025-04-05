import {IFetchedUsers} from "../models/IFetchedUsers.ts";
import {IUser} from "../models/IUser.ts";
import {ICart} from "../models/ICart.ts";
import {IFetchedCarts} from "../models/IFetchedCarts.ts";

const baseUrl: string = import.meta.env.VITE_API_BASE_URL;

export const APIService = {
    getUsers: async (): Promise<IUser[]> => {
            const endpoint = new URL('users', baseUrl);
            const fetchedData: IFetchedUsers = await fetch(endpoint).then(res => res.json());
            return fetchedData.users;
    },
    getCartsByUserId: async (userId: number): Promise<ICart[]> => {
        const endpoint = new URL(`carts/user/${userId}`, baseUrl);
        const fetchedData: IFetchedCarts = await fetch(endpoint).then(res => res.json());
        return fetchedData.carts;
    }
}
