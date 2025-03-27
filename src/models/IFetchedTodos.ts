import {ITodoModel} from "./ITodoModel.ts";

export interface IFetchedTodos {
    todos: ITodoModel[];
    total: number;
    skip: number;
    limit: number;
}