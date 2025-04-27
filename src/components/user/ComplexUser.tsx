import {FC, useState} from "react";
import {IUser} from "../../models/IUser.ts";
import {BiCaretDown} from "react-icons/bi";
import {ComplexPosts} from "../posts/ComplexPosts.tsx";

type UserProp = {
    user: IUser;
}

export const ComplexUser: FC<UserProp> = ({user}) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const {name, username, id} = user;

    const expandedHandle = () => {
        setIsExpanded(!isExpanded);
    }

    return (
        <div className='border-slate-500/60 border-1 rounded-lg shadow-2xl p-2'>
            <h3 className='text-xl'>{name} <span className='italic'>"{username}"</span></h3>
            <div>
                <div className='flex items-center gap-2.5'>
                    <button onClick={expandedHandle}>Posts</button>
                    <BiCaretDown/>
                </div>
                <div>{isExpanded && <div><ComplexPosts userId={id}/></div>}</div>
            </div>
        </div>
    );
};