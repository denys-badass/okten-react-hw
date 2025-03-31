import {FC} from 'react';
import Star from "../star-component/Star.tsx";

type StarsProp = {
    stars: number;
}

const Stars: FC<StarsProp> = ({stars}) => {
    const starsFill: string[] = [];
    for (let i = 0; i < 5; i++) {
        if (stars > 0.8) {
            starsFill.push('bxs-star');
        } else if (stars > 0.2) {
            starsFill.push('bxs-star-half')
        } else {
            starsFill.push('bx-star')
        }
        stars--;
    }

    return (
        <div className='flex justify-center items-center'>
            {
                starsFill.map((star, index) => <Star key={index} className={star}/>)
            }
        </div>
    );
};

export default Stars;