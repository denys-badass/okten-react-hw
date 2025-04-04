import {FC} from "react";
import {IUser} from "../../models/IUser.ts";
import Avatar from "../avatar/Avatar.tsx";
import {Link} from "react-router-dom";

type UserProp = {
    user: IUser;
}

const User: FC<UserProp> = ({user}) => {
    const {firstName, lastName, id} = user;
    return (
        <div className='flex items-center gap-3'>
            <Avatar firstName={firstName} lastName={lastName}/>
            <Link to={'cart/'+ id} className='text-xl'>{firstName} {lastName}</Link>

        </div>
    );
};

export default User;