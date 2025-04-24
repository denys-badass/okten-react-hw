import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {useEffect} from "react";
import {userActions} from "../../redux/slices/userSlice.ts";
import {User} from "../user/User.tsx";

export const Users = () => {
    const {users} = useAppSelector(state => state.userStore);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userActions.loadUsers());
    }, [users, dispatch]);

    return (
        <div>
            {users.map((user) => <User key={user.id} user={user} />)}
        </div>
    );
};