import {useEffect, useState} from 'react';
import {IUserModel} from "../../models/IUserModel.ts";
import {getUsers} from "../../services/api.service.ts";
import UserComponent from "../username-component/UserComponent.tsx";



const UsersComponent = () => {
    const [usersArr, setUsersArr] = useState<IUserModel[]>([]);

    useEffect(() => {
        getUsers().then(({users}) => setUsersArr(users))
    }, [usersArr]);

    return (
        <div className='w-3/6 mx-auto flex flex-col gap-3'>
            {
                usersArr.map((user, index) => <UserComponent key={index} user={user} />)
            }
        </div>
    );
};

export default UsersComponent;