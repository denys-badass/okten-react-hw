import {useEffect, useState} from 'react';
import {IUserPlaceholder} from "../../models/placeholder-models/IUserPlaceholder.ts";
import {PlaceholderService} from "../../api/placeholder.service.ts";
import UserPlaceholder from "../user/UserPlaceholder.tsx";


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
                users.map(user => <UserPlaceholder key={user.id} user={user}/>)
            }
        </div>
    );
};

export default UsersPlaceholder;