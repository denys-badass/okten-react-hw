import {useEffect, useState} from 'react';
import {IUserPlaceholder} from "../../models/placeholder-models/IUserPlaceholder.ts";
import UserComponent from "../user-component/UserComponent.tsx";
import {PlaceholderService} from "../../api/placeholder.service.ts";


const UsersPlaceholder = () => {
    const [users, setUsers] = useState<IUserPlaceholder[]>([])

    useEffect(() => {
        PlaceholderService.getUsers().then(data => {
            setUsers(data);
        })
    }, []);

    return (
        <div>
            {
                users.map(user => <UserComponent key={user.id} user={user}/>)
            }
        </div>
    );
};

export default UsersPlaceholder;