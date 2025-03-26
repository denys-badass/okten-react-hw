import {FC} from 'react';

type PostIdProp = {
    postId: number;
}

const Comments: FC<PostIdProp> = ({postId}) => {
    return (
        <div>
            {postId}
        </div>
    );
};

export default Comments;