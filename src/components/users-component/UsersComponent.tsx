import {FC, useEffect, useState} from 'react';
import {IUserPH} from "../../models/ph-models/IUserPH.ts";
import {UserService} from "../../api/user-service.ts";
import UserComponent from "../user-component/UserComponent.tsx";

type UsersUrlProp = {
    url: string;
}

const UsersComponent: FC<UsersUrlProp> = ({url}) => {
    const [users, setUsers] = useState<IUserPH[]>([])

    useEffect(() => {
        UserService.getUsers(url).then(data => setUsers(data));
    }, [url]);

    return (
        <div>
            {

                users.map(user => <UserComponent key={user.id} user={user}/>)
            }
        </div>
    );
};

export default UsersComponent;