import {IUser} from "../models/IUser.ts";
import {axiosInstance} from "./api.sevices.ts";

export const userServices = {
    getAllUsers: async (): Promise<IUser[]> => {
        const response = await axiosInstance.get<IUser[]>('users');
        return response.data;
    }
}