import {FC, useEffect} from "react";
import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {complexActions} from "../../redux/slices/complexSlice.ts";
import {Post} from "../post/Post.tsx";

type ComplexPostProp = {
    userId: number;
}

export const ComplexPosts:FC<ComplexPostProp> = ({userId}) => {
    const posts = useAppSelector(state => state.complexStore.userPosts[userId])
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!posts) dispatch(complexActions.loadUserPosts(userId))
    }, [dispatch, userId, posts]);

    return (
        <>
            {
                posts?.map(post => <Post key={post.id} post={post}/>)
            }
        </>
    );
};