import {FC} from 'react';
import {IPostPlaceholder} from "../../../models/placeholder-models/IPostPlaceholder.ts";

type PostProp = {
    post: IPostPlaceholder;
}

const PostPlaceholder: FC<PostProp> = ({post}) => {
    return (
        <div>
            {JSON.stringify(post)}
        </div>
    );
};

export default PostPlaceholder;