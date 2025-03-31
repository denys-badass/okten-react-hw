import {FC} from 'react';

type StarProp = {
    className: string;
}

const Star: FC<StarProp> = ({className}) => {
    return (
        <i className={`text-yellow-400 ${className}`}></i>
    );
};

export default Star;