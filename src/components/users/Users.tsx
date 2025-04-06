import {useSearchParams} from "react-router-dom";
import {FC, useEffect, useState} from "react";
import {IUser} from "../../models/IUser.ts";
import {APIService} from "../../api/api.service.ts";
import User from "../user/User.tsx";

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
    }, [page, setTotalFn, perPage]);

    return (
        <div className='w-2/3 m-auto grid grid-cols-3 gap-6 grid-rows-auto py-6'>
            {
                users.map(user => <User key={user.id} user={user}/>)
            }
        </div>
    );
};

export default Users;