import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {useEffect} from "react";
import {userActions} from "../../redux/slices/userSlice.ts";
import {User} from "../user/User.tsx";
import {ComplexUser} from "../user/ComplexUser.tsx";

export const Users = () => {
    const {users} = useAppSelector(state => state.userStore);
    const {isComplex} = useAppSelector(state => state.complexStore);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (users.length === 0) dispatch(userActions.loadUsers());
    }, [dispatch, users.length]);

    return (
        <>
            {users.map((user) => isComplex? <ComplexUser key={user.id} user={user}/> : <User key={user.id} user={user} />)}
        </>
    );
};