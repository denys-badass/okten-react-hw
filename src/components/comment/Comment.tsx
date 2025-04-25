import {FC} from "react";
import {IComment} from "../../models/IComment.ts";

type CommentProp = {
    comment: IComment;
}

export const Comment: FC<CommentProp> = ({comment}) => {
    return (
        <>
            {comment.body}
        </>
    );
};