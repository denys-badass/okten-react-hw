import {FC, useEffect, useState} from 'react';
import {IPostPlaceholder} from "../../../models/placeholder-models/IPostPlaceholder.ts";
import {IUserPlaceholder} from "../../../models/placeholder-models/IUserPlaceholder.ts";
import {PlaceholderService} from "../../../api/placeholder.service.ts";
import PostTitle from "../../post-title/PostTitle.tsx";

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

    const {id, title, body} = post;
    return (
        <div className='border-2 border-sky-700 text-sky-950 rounded-2xl p-3 bg-gray-200'>
            <PostTitle postId={id} title={title} collapsed={collapsed} clickFn={() => setCollapsed(!collapsed)}/>

            <div className={`grid ${collapsed ? 'grid-rows-[0] opacity-0 pointer-events-none' : 'grid-rows-[1fr] opacity-100'}`}>
                <div>
                    <p className='my-5 ml-5 border-l-2 border-sky-600 pl-6'>{body}</p>
                    <p>Posted by <span className='italic'>{user?.username}</span></p>
                </div>

            </div>

        </div>
    );
};

export default PostPlaceholder;