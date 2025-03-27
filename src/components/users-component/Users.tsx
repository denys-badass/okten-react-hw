import {useEffect, useState} from "react";
import {IUser} from "../../models/IUser.ts";
import {getUsers} from "../../services/api.service.ts";
import User from "../user-components/User.tsx";

const Users = () => {
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        getUsers().then(data => setUsers(data.users));
    }, []);

    return (
        <div className='w-3/5 mx-auto py-6 grid grid-cols-[1fr] gap-2 text-gray-800'>
            {
                users.map(user => <User key={user.id} user={user}/>)
            }
        </div>
    );
};

export default Users;