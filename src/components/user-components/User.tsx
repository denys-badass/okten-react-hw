import {FC} from 'react';
import {IUser} from "../../models/IUser.ts";

type UserPropType = {
    user: IUser;
}

const User:FC<UserPropType> = ({user: {name}}) => {
    return (
        <div>
            <button>
                <span>{name} posts</span>
                <i className='bx bx-plus'></i>
            </button>
        </div>
    );
};

export default User;