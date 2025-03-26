import {useEffect, useState} from 'react';
import {IUserModel} from "../../models/IUserModel.ts";
import {getUsers} from "../../services/api.service.ts";
import UserComponent from "../username-component/UserComponent.tsx";



const UsersComponent = () => {
    const [users, setUsers] = useState<IUserModel[]>([]);

    useEffect(() => {
        getUsers().then(data => setUsers(data))
    }, [users]);

    return (
        <div className='w-3/6 mx-auto flex flex-col gap-3'>
            {
                users.map((user, index) => <UserComponent key={index} user={user} />)
            }
        </div>
    );
};

export default UsersComponent;