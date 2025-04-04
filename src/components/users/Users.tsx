import {useEffect, useState} from "react";
import {IUser} from "../../models/IUser.ts";
import {APIService} from "../../api/api.service.ts";
import User from "../user/User.tsx";

const Users = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        APIService.getUsers().then(data => {
            setUsers(data);
        })
    }, []);

    return (
        <ul className='flex flex-col gap-3'>
            {
                users.map(user => <User key={user.id} user={user}/>)
            }
        </ul>
    );
};

export default Users;