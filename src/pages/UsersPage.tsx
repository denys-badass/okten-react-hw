import Users from "../components/users/Users.tsx";
import Pagination from "../components/pagination/Pagination.tsx";
import {useState} from "react";

const UsersPage = () => {
    const [totalUsers, setTotalUsers] = useState<number>(0);
    const usersPerPage = 6;

    const handleTotalUsers =  (users: number) => {
        setTotalUsers(users);
    }
    return (
        <div>
            <Users setTotalFn={handleTotalUsers} perPage={usersPerPage}/>
            <Pagination total={totalUsers} perPage={usersPerPage}/>
        </div>
    );
};

export default UsersPage;