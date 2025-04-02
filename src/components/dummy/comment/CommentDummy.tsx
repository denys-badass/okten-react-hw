import {FC} from "react";
import {ICommentDummy} from "../../../models/dummy-models/ICommentsDummy.ts";

type CommentProp = {
    comment: ICommentDummy;
}

const CommentDummy: FC<CommentProp> = ({comment}) => {
    const {id, postId, body, user, likes} = comment;
    return (
        <div className='border-2 p-4 rounded-lg border-sky-950 text-sky-950 flex flex-col gap-4'>
            <p className='text-sm'>Comment #{id} for post #{postId}</p>
            <p>{body}</p>
            <p className='text-sm'>commented by <span className='italic'>{user.username} ({user.fullName})</span></p>
            <p className='text-sky-600'><i className="fa-solid fa-heart"></i> {likes}</p>
        </div>
    );
};

export default CommentDummy;