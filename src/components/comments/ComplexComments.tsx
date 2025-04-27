import {FC, useEffect} from "react";
import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {complexActions} from "../../redux/slices/complexSlice.ts";
import {Comment} from "../comment/Comment.tsx";

type ComplexCommentProp = {
    postId: number;
}

export const ComplexComments: FC<ComplexCommentProp> = ({postId}) => {
    const comments = useAppSelector(state => state.complexStore.postComments[postId]);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!comments) dispatch(complexActions.loadPostComments(postId));
    }, [dispatch, postId, comments]);

    return (
        <>
            {
                comments?.map(comment => <Comment key={comment.id} comment={comment}/>)
            }
        </>
    );
};