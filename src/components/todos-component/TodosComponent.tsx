import {useEffect, useState} from 'react';
import {ITodoModel} from "../../models/ITodoModel.ts";
import TodoComponent from "../todo-component/TodoComponent.tsx";
import {getTodos} from "../../services/api.service.ts";

const TodosComponent = () => {
    const [todos, setTodos] = useState<ITodoModel[]>([])
    useEffect(() => {
        const fetchTodos = async (): Promise<void> => {
            const todos = await getTodos();
            setTodos(todos);
        }

        fetchTodos();
    }, [])
    return (
        <div>
            {
                todos.map((item: ITodoModel, index: number) => <TodoComponent key={index} todo={item}/>)
            }
        </div>
    );
};

export default TodosComponent;