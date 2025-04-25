import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {useEffect} from "react";
import {postActions} from "../../redux/slices/postSlice.ts";
import {Post} from "../post/Post.tsx";

export const Posts = () => {
    const {posts} = useAppSelector((state) => state.postStore);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(postActions.loadPosts());
    }, [posts, dispatch]);

    return (
        <div className='flex flex-col gap-6'>
            {posts.map(post => <Post key={post.id} post={post} />)}
        </div>
    );
};