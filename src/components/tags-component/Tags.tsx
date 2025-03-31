import {FC} from 'react';
import Tag from "../tag-component/Tag.tsx";

type TagsProp = {
    tags: string[];
}

const Tags: FC<TagsProp> = ({tags}) => {
    return (
        <ul className='flex text-sm text-gray-400'>
            {
                tags.map((tag, index) => <Tag key={index} tag={tag}/>)
            }
        </ul>
    );
};

export default Tags;