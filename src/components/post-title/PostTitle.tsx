import {FC} from "react";

type PostTitleProp = {
    postId: number;
    title: string;
    collapsed: boolean;
    clickFn: () => void;
}

const PostTitle:FC<PostTitleProp> = ({postId, title, collapsed, clickFn}) => {
    return (
        <div className='flex items-center justify-between'>
            <p className='text-xl text-gray-600 italic'>Post #{postId}</p>
            <button onClick={clickFn} className='flex items-center justify-between w-3/4 h-8 cursor-pointer'>
                <span className='text-2xl capitalize block'>{title}</span>
                <i className={` block fa-solid fa-chevron-${collapsed ? 'right' : 'down'}`}></i>
            </button>
        </div>
    );
};

export default PostTitle;