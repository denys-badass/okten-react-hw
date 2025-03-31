import {FC} from 'react';
import Star from "../star-component/Star.tsx";

type StarsProp = {
    stars: number;
}

const Stars: FC<StarsProp> = ({stars}) => {
    const starsFill: string[] = [];
    for (let i = 0; i < 5; i++) {
        if (stars > 0.8) {
            starsFill.push('fa-solid fa-star');
        } else if (stars > 0.2) {
            starsFill.push('fa-solid fa-star-half-stroke')
        } else {
            starsFill.push('fa-regular fa-star')
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