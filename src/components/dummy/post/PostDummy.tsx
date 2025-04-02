import {FC, useEffect, useState} from 'react';
import {IPostDummy} from "../../../models/dummy-models/IPostDummy.ts";
import PostTitle from "../../post-title/PostTitle.tsx";
import {IUserDummy} from "../../../models/dummy-models/IUserDummy.ts";
import {DummyService} from "../../../api/dummy.service.ts";
import PostReviews from "./post-reviews/PostReviews.tsx";
import Tags from "../../tags/Tags.tsx";

type PostProp = {
    post: IPostDummy;
}

const PostDummy: FC<PostProp> = ({post}) => {
    const [user, setUser] = useState<IUserDummy | null>(null);
    const [collapsed, setCollapsed] = useState<boolean>(true);

    useEffect(() => {
        DummyService.getUserById(post.userId).then(data => {
            setUser(data);
        })
    }, []);

    const {id, title, body, reactions, views, tags} = post;
    return (
        <div className='border-2 border-sky-700 text-sky-950 rounded-2xl p-3 bg-gray-200'>
            <PostTitle postId={id} title={title} collapsed={collapsed} clickFn={() => setCollapsed(!collapsed)}/>
            <div className={`grid ${collapsed ? 'grid-rows-[0] opacity-0 pointer-events-none' : 'grid-rows-[1fr] opacity-100'}`}>
                <div className='my-4 ml-5 flex flex-col gap-3'>
                    <Tags tags={tags}/>
                    <p className='border-l-2 border-sky-600 pl-6'>{body}</p>
                    <PostReviews reactions={reactions} views={views}/>
                    <p>Posted by <span className='italic'>{user?.username}</span></p>
                </div>
            </div>
        </div>
    );
};

export default PostDummy;