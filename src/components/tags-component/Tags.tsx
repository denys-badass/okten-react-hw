import {FC} from 'react';

type TagsProp = {
    tags: string[];
}

const Tags: FC<TagsProp> = ({tags}) => {
    return (
        <ul className='flex text-sm text-gray-400'>
            {
                tags.map((tag, index) => <li key={index}>#{tag}</li>)
            }
        </ul>
    );
};

export default Tags;