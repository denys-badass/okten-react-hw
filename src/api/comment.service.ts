import {IComment} from "../models/IComment.ts";
import {axiosInstance} from "./api.sevices.ts";

export const commentService = {
    getAllComments: async (): Promise<IComment[]> => {
        const response = await axiosInstance.get<IComment[]>('/comments');
        return response.data;
    }
}