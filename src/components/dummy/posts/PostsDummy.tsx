import {useEffect, useState} from "react";
import {IPostDummy} from "../../../models/dummy-models/IPostDummy.ts";
import {DummyService} from "../../../api/dummy.service.ts";
import PostDummy from "../post/PostDummy.tsx";

const PostsDummy = () => {
    const [posts, setPosts] = useState<IPostDummy[]>([]);

    useEffect(() => {
        DummyService.getPosts().then(data => {
            setPosts(data);
        })
    }, []);

    return (
        <div>
            {
                posts.map(post => <PostDummy key={post.id} post={post}/>)
            }
        </div>
    );
};

export default PostsDummy;