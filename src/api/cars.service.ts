import {axiosInstance} from "./api.service.ts";
import {ICar} from "../models/ICar.ts";

export const carsService = {
    getAllCars: async (): Promise<ICar[]> => {
        const {data} = await axiosInstance.get<ICar[]>('/carsAPI/v1/cars');
        return data;
    }
}