import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {useEffect} from "react";
import {userActions} from "../../redux/slices/userSlice.ts";
import {User} from "../user/User.tsx";

export const Users = () => {
    const {users} = useAppSelector(state => state.userStore);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (users.length === 0) dispatch(userActions.loadUsers());
    }, [dispatch, users.length]);

    return (
        <>
            {users.map((user) => <User key={user.id} user={user} />)}
        </>
    );
};