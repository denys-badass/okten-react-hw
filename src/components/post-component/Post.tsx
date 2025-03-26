import {FC} from 'react';
import {IPost} from "../../models/IPost.ts";

type PostPropType = {
    post: IPost;
}

const Post: FC<PostPropType> = ({post: {title, body}}) => {
    return (
        <div>
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    );
};

export default Post;