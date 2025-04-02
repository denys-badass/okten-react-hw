import {useParams} from "react-router-dom";
import {PostsComponentMap} from "./PostsComponentMap.ts";

const PostsPage = () => {
    const {service} = useParams();
    const componentKey: string = service || '';

    const PostsComponent = PostsComponentMap[componentKey];

    return (
        <div>
            <PostsComponent/>
        </div>
    );
};

export default PostsPage;