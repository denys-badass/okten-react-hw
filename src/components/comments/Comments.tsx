import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {useEffect} from "react";
import {commentActions} from "../../redux/slices/commentSlice.ts";
import {Comment} from "../comment/Comment.tsx";

export const Comments = () => {
    const comments = useAppSelector(state => state.commentStore.comments);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (comments.length === 0) dispatch(commentActions.loadComments());
    }, [dispatch, comments.length]);

    return (
        <div className='flex flex-col gap-6'>
            {comments.map(comment => <Comment key={comment.id} comment={comment} />)}
        </div>
    );
};