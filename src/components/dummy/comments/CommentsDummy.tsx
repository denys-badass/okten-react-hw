import {useEffect, useState} from "react";
import {ICommentDummy} from "../../../models/dummy-models/ICommentsDummy.ts";
import {DummyService} from "../../../api/dummy.service.ts";
import CommentDummy from "../comment/CommentDummy.tsx";

const CommentsDummy = () => {
    const [comments, setComments] = useState<ICommentDummy[]>([]);

    useEffect(() => {
        DummyService.getComments().then(data => {
            setComments(data);
        })
    }, []);

    return (
        <div className='grid grid-cols-4 gap-4'>
            {
                comments.map(comment => <CommentDummy key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export default CommentsDummy;