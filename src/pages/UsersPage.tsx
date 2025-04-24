import {useAppSelector} from "../redux/hooks/useAppSelector.tsx";
import {useEffect} from "react";
import {userActions} from "../redux/slices/userSlice.ts";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.tsx";

const UsersPage = () => {
    const {users} = useAppSelector(state => state.userStore);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userActions.loadUsers());
    }, [users]);

    return (
        <div>
            {
                users.map(user => <div key={user.id}>{user.name}</div>)
            }
        </div>
    );
};

export default UsersPage;