import {FC} from 'react';
import {ITodoModel} from "../../models/ITodoModel.ts";

type TodoPropType = {
    todo: ITodoModel,
}

const TodoComponent: FC<TodoPropType> = ({todo}) => {
    return (
        <div>
            <p>{todo.userId}</p>
            <p>{todo.id}</p>
            <p>{todo.title}</p>
            <p>{todo.completed}</p>
        </div>
    );
};

export default TodoComponent;