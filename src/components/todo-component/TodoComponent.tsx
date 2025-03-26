import {FC} from 'react';
import {ITodoModel} from "../../models/ITodoModel.ts";

type TodoPropType = {
    todo: ITodoModel,
}

const TodoComponent: FC<TodoPropType> = ({todo}) => {
    return (
        <div className='border-2 rounded-lg h-1/1 flex flex-col gap-2.5 p-3'>
            <p className='self-start'>#{todo.id}</p>
            <p className='-mt-2.5'>{todo.title}</p>
            <p className='mt-auto flex'>Completed: <i className={`bx bx-sm ${todo.completed ? 'bx-check text-emerald-500' : 'bx-x text-red-500'}`}></i></p>


        </div>
    );
};

export default TodoComponent;