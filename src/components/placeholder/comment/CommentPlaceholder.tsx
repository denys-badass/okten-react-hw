import {FC} from 'react';
import {ICommentPlaceholder} from "../../../models/placeholder-models/ICommentPlaceholder.ts";

type CommentProp = {
    comment: ICommentPlaceholder;
}

const CommentPlaceholder: FC<CommentProp> = ({comment}) => {
    const {id, postId,name, body, email} = comment
    return (
        <div className='border-2 p-4 rounded-lg border-sky-950 text-sky-950 flex flex-col gap-4'>
            <p className='text-sm'>Comment #{id} for post #{postId}</p>
            <h4 className='text-lg capitalize'>{name}</h4>
            <p>{body}</p>
            <p className='text-sm'>commented by <span className='italic'>{email}</span></p>
        </div>
    );
};

export default CommentPlaceholder;