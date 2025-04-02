import {useParams} from "react-router-dom";
import {CommentsComponentMap} from "./CommentsComponentMap.ts";

const CommentsPage = () => {
    const {service} = useParams();
    const componentKey: string = service || '';
    const CommentsComponent = CommentsComponentMap[componentKey];

    return (
        <div>
            <CommentsComponent/>
        </div>
    );
};

export default CommentsPage;