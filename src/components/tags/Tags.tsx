import {FC} from "react";
import Tag from "../tag/Tag.tsx";

type TagsProp = {
    tags: string[]
}

const Tags:FC<TagsProp> = ({tags}) => {
    return (
        <ul className='flex'>
            {
                tags.map((tag, index) => <Tag key={index} tag={tag}/>)
            }
        </ul>
    );
};

export default Tags;