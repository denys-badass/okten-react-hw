import {FC} from 'react';
import {IPost} from "../../models/IPost.ts";

type PostPropType = {
    post: IPost;
}

const Post: FC<PostPropType> = ({post: {title, body}}) => {
    return (
        <div className='w-full'>
            <h3 className='text-[20px] capitalize'>{title}</h3>
            <p className='rounded-2xl inset-shadow-sm bg-blue-100/50 inset-shadow-blue-300 p-4 italic'>{body}</p>
        </div>
    );
};

export default Post;