import {ITodoModel} from "./ITodoModel.ts";
import {IFetched} from "./IFetched.ts";

export interface IFetchedTodos extends IFetched {
    todos: ITodoModel[];
}