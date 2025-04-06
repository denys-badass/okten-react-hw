import {useSearchParams} from "react-router-dom";
import {FC, useEffect, useState} from "react";
import {IUser} from "../../models/IUser.ts";
import {APIService} from "../../api/api.service.ts";

type TotalUsersProp = {
    setTotalFn: (users: number) => void;
    perPage: number;
}

const Users: FC<TotalUsersProp> = ({setTotalFn, perPage}) => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [query] = useSearchParams();
    const page: string = query.get('page') || '1';

    useEffect(() => {
        APIService.getUsersPerPage(perPage, +page).then((data) => {
            setUsers(data.users);
            setTotalFn(data.total);
        })
    }, [page, setTotalFn]);

    return (
        <div>
            {
                users.map(user => <div key={user.id}>{user.firstName} {user.lastName}</div>)
            }
        </div>
    );
};

export default Users;