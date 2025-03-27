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
                <h4 className='font-bold'>{comment.email}</h4>
            </div>
            <p className='capitalize text-xl'>{comment.name}</p>
            <p className='pl-5'>{comment.body}</p>
        </div>
    );
};

export default Comment;