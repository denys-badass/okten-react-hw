import {FC, useEffect, useState} from 'react';
import {IPostPlaceholder} from "../../../models/placeholder-models/IPostPlaceholder.ts";
import {IUserPlaceholder} from "../../../models/placeholder-models/IUserPlaceholder.ts";
import {PlaceholderService} from "../../../api/placeholder.service.ts";

type PostProp = {
    post: IPostPlaceholder;
}

const PostPlaceholder: FC<PostProp> = ({post}) => {
    const [user, setUser] = useState<IUserPlaceholder | null>(null);
    const [collapsed, setCollapsed] = useState<boolean>(true);

    useEffect(() => {
        PlaceholderService.getUserById(post.userId).then(data => {
            setUser(data);
        })
    }, [post.userId]);

    const {id, title, body} = post
    return (
        <div className='border-2 border-sky-700 text-sky-950 rounded-2xl p-3 bg-gray-200'>
            <div className='flex items-center justify-between'>
                <p className='text-xl text-gray-600 italic'>Post #{id}</p>
                <button onClick={() => setCollapsed(!collapsed)} className='flex items-center justify-between w-3/4 h-8 cursor-pointer'>
                    <span className='text-2xl capitalize block'>{title}</span>
                    <i className={` block fa-solid fa-chevron-${collapsed ? 'right' : 'down'}`}></i>
                </button>

            </div>
            <div className={`grid ${collapsed ? 'grid-rows-[0] opacity-0 pointer-events-none' : 'grid-rows-[1fr] opacity-100'}`}>
                <div>
                    <p className='my-5 ml-5 border-l-2 border-sky-600 pl-6'>{body}</p>
                    <p>Posted by <span className='italic'>{user?.name}</span></p>
                </div>

            </div>

        </div>
    );
};

export default PostPlaceholder;