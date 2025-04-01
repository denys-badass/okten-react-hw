import {FC} from 'react';
import {ICommentPlaceholder} from "../../../models/placeholder-models/ICommentPlaceholder.ts";

type CommentProp = {
    comment: ICommentPlaceholder;
}

const CommentPlaceholder: FC<CommentProp> = ({comment}) => {
    return (
        <div>
            {JSON.stringify(comment)}
        </div>
    );
};

export default CommentPlaceholder;