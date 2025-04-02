import {FC} from "react";
import {IReactions} from "../../../../models/dummy-models/IReaction.ts";

type PostReviewProp = {
    reactions: IReactions;
    views: number;
}

const PostReviews: FC<PostReviewProp> = ({reactions, views}) => {
    return (
        <div className='text-sky-600 flex gap-4'>
            <p className='flex gap-1 items-center'>
                <i className="fa-solid fa-eye"></i><span>{views}</span>
            </p>
            <p className='flex gap-1 items-center'>
                <i className="fa-solid fa-thumbs-up"></i><span>{reactions.likes}</span>    
            </p>
            <p className='flex gap-1 items-center'>
                <i className="fa-solid fa-thumbs-down"></i><span>{reactions.dislikes}</span>
            </p>
            
            
            
        </div>
    );
};

export default PostReviews;