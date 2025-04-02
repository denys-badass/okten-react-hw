import {useEffect, useState} from 'react';
import {ICommentPlaceholder} from "../../../models/placeholder-models/ICommentPlaceholder.ts";
import {PlaceholderService} from "../../../api/placeholder.service.ts";
import CommentPlaceholder from "../comment/CommentPlaceholder.tsx";

const CommentsPlaceholder = () => {
    const [comments, setComments] = useState<ICommentPlaceholder[]>([]);

    useEffect(() => {
        PlaceholderService.getComments().then(data => {
            setComments(data);
        })
    }, []);

    return (
        <div className='grid grid-cols-4 gap-4'>
            {
                comments.map(comment => <CommentPlaceholder key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export default CommentsPlaceholder;