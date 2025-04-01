import {useEffect, useState} from "react";
import {IPostPlaceholder} from "../../models/placeholder-models/IPostPlaceholder.ts";
import {PlaceholderService} from "../../api/placeholder.service.ts";
import PostPlaceholder from "../post/PostPlaceholder.tsx";

const PostsPlaceholder = () => {
    const [posts, setPosts] = useState<IPostPlaceholder[]>([]);

    useEffect(() => {
        PlaceholderService.getPosts().then(data => {
            setPosts(data);
        })
    }, []);

    return (
        <div>
            {
                posts.map(post => <PostPlaceholder key={post.id} post={post}/>)
            }
        </div>
    );
};

export default PostsPlaceholder;