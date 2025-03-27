import {FC, useState} from 'react';
import TodosComponent from "../todos-component/TodosComponent.tsx";
import {IUserModel} from "../../models/IUserModel.ts";

type UserPropType = {
    user: IUserModel,
}

const UserComponent: FC<UserPropType> = ({user}) => {
    const [collapsed, setCollapsed] = useState<boolean>(true);

    return (
        <div className={`w-1/1 rounded-lg text-slate-800 transition duration-300 scroll ${
            collapsed ? 'bg-gray-400' : 'bg-gray-300'
        }`}>
            <button className='p-3 text-2xl flex justify-between w-full' onClick={() => setCollapsed(!collapsed)}>
                <span>{`${user.firstName} ${user.lastName}`} - ToDo`s</span>
                <i className={`bx bxs-chevron-down bx-xl transition transform duration-300 ${
                    !collapsed ? 'bx-rotate-180' : ''
                }`}></i>
            </button>
            <div className={`grid transition-all duration-300 ease-in-out overflow-hidden ${
                collapsed ? 'opacity-0 grid-rows-[0]' : 'opacity-100 grid-rows-[1fr]'
            }`}>
                <TodosComponent userId={user.id}/>
            </div>
        </div>

    );
};

export default UserComponent;