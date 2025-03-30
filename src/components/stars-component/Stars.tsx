import {FC} from 'react';

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
                starsFill.map((star, index) => <i key={index} className={`bx text-yellow-400 ${star}`}></i>)
            }
        </div>
    );
};

export default Stars;