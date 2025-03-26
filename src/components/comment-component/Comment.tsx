import {FC} from 'react';
import {IComment} from "../../models/IComment.ts";

type CommentProp = {
    comment: IComment;
}

const Comment: FC<CommentProp> = ({comment}) => {
    return (
        <div>
            {comment.body}
        </div>
    );
};

export default Comment;