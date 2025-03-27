import {FC, useEffect, useState} from 'react';
import {IComment} from "../../models/IComment.ts";
import {getCommentsByPostId} from "../../services/api.service.ts";
import Comment from "../comment-component/Comment.tsx";

type PostIdProp = {
    postId: number;
}

const Comments: FC<PostIdProp> = ({postId}) => {
    const [comments, setComments] = useState<IComment[]>([]);

    useEffect(() => {
        getCommentsByPostId(postId).then(data => setComments(data));
    }, [postId]);

    return (
        <div className='overflow-hidden bg-gray-200/70 p-5 flex flex-col gap-2'>
            {
                comments.map(comment => <Comment key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export default Comments;