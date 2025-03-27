import {FC, useState} from 'react';
import {IPost} from "../../models/IPost.ts";
import Comments from "../comments-component/Comments.tsx";

type PostPropType = {
    post: IPost;
}

const Post: FC<PostPropType> = ({post: {title, body, id}}) => {
    const [collapsed, setCollapsed] = useState<boolean>(true);

    return (
        <div className='w-full'>
            <h3 className='text-[20px] capitalize'>{title}</h3>
            <p className='rounded-2xl inset-shadow-sm bg-blue-100/50 inset-shadow-blue-300 p-4 italic'>{body}</p>
            <button onClick={() => setCollapsed(!collapsed)} className='w-2/4 flex justify-between pl-6 pt-3'>
                <span>Comments</span>
                <i className={`bx ${
                    collapsed ? 'bx-plus' : 'bx-minus'
                }`}></i>
            </button>
            <div className={`w-2/4 ml-6 mt-3 overflow-hidden grid ${
                collapsed ? 'grid-rows-[0] opacity-0' : 'grid-rows-[1fr] opacity-100'
            }`}>
                <Comments postId={id}/>
            </div>
        </div>
    );
};

export default Post;