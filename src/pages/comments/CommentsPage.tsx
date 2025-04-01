import {useLocation} from "react-router-dom";
import {CommentsComponentMap} from "./CommentsComponentMap.ts";

const CommentsPage = () => {
    const {state} = useLocation();
    const componentKey = state.key;
    const CommentsComponent = CommentsComponentMap[componentKey];

    return (
        <div>
            <CommentsComponent/>
        </div>
    );
};

export default CommentsPage;