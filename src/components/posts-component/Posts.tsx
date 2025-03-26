import {FC, useEffect, useState} from 'react';
import {IPost} from "../../models/IPost.ts";
import {getPostsByUserId} from "../../services/api.service.ts";
import Post from "../post-component/Post.tsx";

type UserIdPropType = {
    userId: number;
}

const Posts:FC<UserIdPropType> = ({userId}) => {
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        getPostsByUserId(userId).then(data => setPosts(data))
    }, [userId]);

    return (
        <div className='flex flex-col gap-4 p-5'>
            {
                posts.map(post => <Post key={post.id} post={post}/>)
            }
        </div>
    );
};

export default Posts;