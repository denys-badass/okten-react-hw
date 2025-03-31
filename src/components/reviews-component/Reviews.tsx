import {FC} from 'react';
import Review from "../review-component/Review.tsx";
import './Reviews.css'
import {IReviews} from "../../models/IReviews.ts";

type ReviewsProp = {
    reviews: IReviews[];
}

const Reviews: FC<ReviewsProp> = ({reviews}) => {
    return (
        <div className='flex flex-col gap-7 mt-5'>
            {
                reviews.map((review, index) => <Review key={index} review={review}/>)
            }
        </div>
    );
};

export default Reviews;