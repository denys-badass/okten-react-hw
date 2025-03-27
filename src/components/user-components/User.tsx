import {FC, useState} from 'react';
import {IUser} from "../../models/IUser.ts";
import Posts from "../posts-component/Posts.tsx";

type UserPropType = {
    user: IUser;
}

const User: FC<UserPropType> = ({user: {firstName, lastName, id}}) => {
    const [collapsed, setCollapsed] = useState<boolean>(true)

    return (
        <div className={`w-full px-6 py-4 rounded-2xl transition duration-500 ${
            collapsed ? 'bg-yellow-50/60' : 'bg-yellow-50/90'
        }`}>
            <button className={`w-full flex justify-between`}
                    onClick={() => setCollapsed(!collapsed)}>
                <span>{`${firstName} ${lastName}`} posts</span>
                <i className={`bx bx-sm  ${
                    collapsed ? 'bx-plus' : 'bx-minus'
                }`}></i>
            </button>
            <div className={`w-full grid overflow-hidden ${
                collapsed ? 'grid-rows-[0] opacity-0' : 'grid-rows-[1fr] opacity-100'
            }`}>
                <Posts userId={id}/>
            </div>
        </div>
    );
};

export default User;