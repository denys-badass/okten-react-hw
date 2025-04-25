import {Users} from "../components/users/Users.tsx";

const UsersPage = () => {
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
            <Users/>
        </div>
    );
};

export default UsersPage;