import {FC} from "react";
import {ICommentDummy} from "../../models/dummy-models/ICommentsDummy.ts";

type CommentProp = {
    comment: ICommentDummy;
}

const CommentDummy: FC<CommentProp> = ({comment}) => {
    return (
        <div>
            {JSON.stringify(comment)}
        </div>
    );
};

export default CommentDummy;