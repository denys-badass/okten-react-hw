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
        setPosts([]);
        console.log(`Fetching posts for user ${userId}`);
        getPostsByUserId(userId).then(data => setPosts(data))
    }, [userId]);

    return (
        <div>
            {
                posts.map(post => <Post key={post.id} post={post}/>)
            }
        </div>
    );
};

export default Posts;