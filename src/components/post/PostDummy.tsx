import {FC} from 'react';
import {IPostDummy} from "../../models/dummy-models/IPostDummy.ts";

type PostProp = {
    post: IPostDummy;
}

const PostDummy: FC<PostProp> = ({post}) => {
    return (
        <div>
            {JSON.stringify(post)}
        </div>
    );
};

export default PostDummy;