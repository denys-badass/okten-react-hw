import {ITodoModel} from "../models/ITodoModel.ts";
import {IUserModel} from "../models/IUserModel.ts";

export const getTodosByUser = async (userId: number): Promise<ITodoModel[]> => {
    return await fetch('https://jsonplaceholder.typicode.com/todos?userId=' + userId).then(response => response.json());
}

export const getUsers = async (): Promise<IUserModel[]> => {
    return await fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json());
}

export const getUser = async (id: number): Promise<IUserModel> => {
    return await fetch('https://jsonplaceholder.typicode.com/users' + '/' + `${id}`).then(response => response.json());
}