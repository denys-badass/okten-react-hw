import {FC} from "react";
import {IUser} from "../../models/IUser.ts";

type UserProp = {
    user: IUser;
    isComplex?: boolean;
}

export const User: FC<UserProp> = ({user}) => {
    const {name, username, email, phone, website} = user

    return (
        <div className='border-slate-500/60 border-1 rounded-lg shadow-2xl p-2'>
            <h3 className='text-xl'>{name}</h3>
            <p className='italic'>"{username}"</p>
            <ul className='mt-2.5 text-sm'>
                <li>{email}</li>
                <li>{phone}</li>
                <li>{website}</li>
            </ul>
        </div>
    );
};