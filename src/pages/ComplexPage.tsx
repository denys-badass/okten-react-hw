import {Users} from "../components/users/Users.tsx";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.tsx";
import {useEffect} from "react";
import {complexActions} from "../redux/slices/complexSlice.ts";

export const ComplexPage = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(complexActions.setIsComplex(true));

        return () => {
            dispatch(complexActions.setIsComplex(false));
        }
    }, [dispatch]);

    return (
        <div className='flex flex-col gap-6'>
            <Users/>
        </div>
    );
};