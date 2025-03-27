import {FC} from 'react';
import {IComment} from "../../models/IComment.ts";

type CommentProp = {
    comment: IComment;
}

const Comment: FC<CommentProp> = ({comment}) => {
    return (
        <div>
            <div className='flex gap-1'>
                <span className='italic'>by</span>
                <h4 className='font-bold'>{comment.user.username}</h4>
            </div>
            <p>{comment.id}</p>
            <p className='pl-5'>{comment.body}</p>
        </div>
    );
};

export default Comment;