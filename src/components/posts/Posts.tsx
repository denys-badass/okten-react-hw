import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {useEffect} from "react";
import {postActions} from "../../redux/slices/postSlice.ts";

export const Posts = () => {
    const {posts} = useAppSelector((state) => state.postStore);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(postActions.loadPosts());
    }, [posts, dispatch]);

    return (
        <>
            {posts.map(post => <div key={post.id}>{post.title}</div>)}
        </>
    );
};