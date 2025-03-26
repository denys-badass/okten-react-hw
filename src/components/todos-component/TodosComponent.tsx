import {FC, useEffect, useState} from 'react';
import {ITodoModel} from "../../models/ITodoModel.ts";
import TodoComponent from "../todo-component/TodoComponent.tsx";
import {getTodosByUser} from "../../services/api.service.ts";

type UrlPropType = {
    userId: number
}

const TodosComponent: FC<UrlPropType> = ({userId}) => {
    const [todos, setTodos] = useState<ITodoModel[]>([])

    useEffect(() => {
        getTodosByUser(userId).then(todos => setTodos(todos));
    }, [userId])

    return (
        <div className='grid grid-cols-4 gap-3 auto-rows-fr overflow-hidden p-3'>
            {
                todos.map((item: ITodoModel, index: number) => <TodoComponent key={index} todo={item}/>)
            }
        </div>
    );
};

export default TodosComponent;