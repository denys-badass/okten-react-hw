import {ITodoModel} from "../models/ITodoModel.ts";

export const getTodos = async (): Promise<ITodoModel[]> => {
    return await fetch('https://jsonplaceholder.typicode.com/todos').then(response => response.json());
}