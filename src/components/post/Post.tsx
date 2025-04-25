import {FC} from "react";
import {IPost} from "../../models/IPost.ts";

type PostProp = {
    post: IPost;
}

export const Post: FC<PostProp> = ({post}) => {
    const {title, body} = post;

    return (
        <div className='border-1 border-slate-500/60 rounded-2xl p-6 pb-0 shadow-2xl'>
            <h4 className='text-lg capitalize font-bold'>{title}</h4>
            <p className='p-6'>{body}</p>
        </div>
    );
};