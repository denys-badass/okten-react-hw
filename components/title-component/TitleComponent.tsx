import {FC} from 'react';

type TitlePropsType = {
    title: string;
}

const TitleComponent: FC<TitlePropsType> = ({title}: TitlePropsType) => {
    return (
        <h2 className={'text-4xl text-slate-300'}>{title}</h2>
    );
};

export default TitleComponent;