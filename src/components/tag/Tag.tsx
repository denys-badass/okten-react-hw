import {FC} from "react";

type TagProp = {
    tag: string;
}

const Tag:FC<TagProp> = ({tag}) => {
    return (
        <li className='text-sm text-slate-500 italic'>
            #{tag}
        </li>
    );
};

export default Tag;