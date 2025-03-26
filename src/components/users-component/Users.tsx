import {useEffect, useState} from "react";
import {IUser} from "../../models/IUser.ts";
import {getUsers} from "../../services/api.service.ts";
import User from "../user-components/User.tsx";

const Users = () => {
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        getUsers().then(data => setUsers(data));
    }, []);

    return (
        <div>
            {
                users.map(user => <User key={user.id} user={user}/>)
            }
        </div>
    );
};

export default Users;