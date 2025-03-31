import {FC} from 'react';

type TagProp = {
    tag: string;
}

const Tag: FC<TagProp> = ({tag}) => {
    return (
        <li>#{tag}</li>
    );
};

export default Tag;