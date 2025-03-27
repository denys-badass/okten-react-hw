import {IFetchedUsers} from "../models/IFetchedUsers.ts";
import {IFetchedTodos} from "../models/IFetchedTodos.ts";

const todosEndpointByUser: string = import.meta.env.VITE_API_BASE_URL + '/todos?userId=';
const usersEndpoint: string = import.meta.env.VITE_API_BASE_URL + '/users';

export const getTodosByUser = async (userId: number): Promise<IFetchedTodos> => {
    return await fetch(todosEndpointByUser + userId).then(response => response.json());
}

export const getUsers = async (): Promise<IFetchedUsers> => {
    return await fetch(usersEndpoint).then(response => response.json());
}
