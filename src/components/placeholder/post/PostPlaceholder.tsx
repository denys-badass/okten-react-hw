import {FC, useState} from 'react';
import {IPostPlaceholder} from "../../../models/placeholder-models/IPostPlaceholder.ts";
import PostTitle from "../../post-title/PostTitle.tsx";
import PostedUser from "../posted-user/PostedUser.tsx";

type PostProp = {
    post: IPostPlaceholder;
}

const PostPlaceholder: FC<PostProp> = ({post}) => {
    const [collapsed, setCollapsed] = useState<boolean>(true);

    const {id, title, body, userId} = post;

    return (
        <div className='border-2 border-sky-700 text-sky-950 rounded-2xl p-3 bg-gray-200'>
            <PostTitle postId={id} title={title} collapsed={collapsed} clickFn={() => setCollapsed(!collapsed)}/>

            <div className={`grid ${collapsed ? 'grid-rows-[0] opacity-0 pointer-events-none' : 'grid-rows-[1fr] opacity-100'}`}>
                <div>
                    <p className='my-5 ml-5 border-l-2 border-sky-600 pl-6'>{body}</p>
                    {
                        !collapsed && <PostedUser id={userId}/>
                    }

                </div>

            </div>

        </div>
    );
};

export default PostPlaceholder;