import {useLocation} from "react-router-dom";
import {PostsComponentMap} from "./PostsComponentMap.ts";

const PostsPage = () => {
    const {state} = useLocation();
    const componentKey = state.key;

    const PostsComponent = PostsComponentMap[componentKey];

    return (
        <div>
            <PostsComponent/>
        </div>
    );
};

export default PostsPage;