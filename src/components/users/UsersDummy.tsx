import {useEffect, useState} from "react";
import {IUserDummy} from "../../models/dummy-models/IUserDummy.ts";
import {DummyService} from "../../api/dummy.service.ts";
import UserComponent from "../user-component/UserComponent.tsx";

const UsersDummy = () => {
    const [users, setUsers] = useState<IUserDummy[]>([]);

    useEffect(() => {
        DummyService.getUsers().then(data => {
            setUsers(data)
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

export default UsersDummy;