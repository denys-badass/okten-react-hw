import {FC, useState} from 'react';
import {IUser} from "../../models/IUser.ts";

type UserPropType = {
    user: IUser;
}

const User: FC<UserPropType> = ({user: {name}}) => {
    const [collapsed, setCollapsed] = useState<boolean>(true)

    return (
        <div className={`w-full px-6 py-4 rounded-2xl transition duration-500 ${
            collapsed ? 'bg-yellow-50/60' : 'bg-yellow-50/90'
        }`}>
            <button className={`w-full flex justify-between`}
                    onClick={() => setCollapsed(!collapsed)}>
                <span>{name} posts</span>
                <i className={`bx bx-sm  ${
                    collapsed ? 'bx-plus' : 'bx-minus'
                }`}></i>
            </button>
            <div className={`w-full grid ${
                collapsed ? 'grid-rows-[0] opacity-0' : 'grid-rows-[1fr] opacity-100'
            }`}>
                {/*<Posts />*/}
            </div>
        </div>
    );
};

export default User;