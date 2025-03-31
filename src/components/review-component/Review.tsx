import {FC} from 'react';
import Stars from "../stars-component/Stars.tsx";
import Avatar from "../avatar-component/Avatar.tsx";
import {IReviews} from "../../models/IReviews.ts";

type ReviewProp = {
    review: IReviews;
}

const Review: FC<ReviewProp> = ({review}) => {
    const dateReview = new Date(review.date);
    const formattedDate: string = dateReview.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    });

    return (
        <div className='flex gap-7'>
            <div>
                <Avatar name={review.reviewerName}/>
            </div>
            <div className='flex flex-col gap-1'>
                <div className='flex gap-2'>Rating: <Stars stars={review.rating}/></div>
                <p className='text-sm'>{formattedDate}</p>
                <p className='text-lg'>{review.comment}</p>
                <p className='text-sm'>
                    {review.reviewerName}
                    <a className='italic' href={`mailto:${review.reviewerEmail}`}>{review.reviewerEmail}</a>
                </p>
            </div>

        </div>
    );
};

export default Review;