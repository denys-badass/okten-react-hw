import {FC} from 'react';

type AvatarNameProp = {
    name: string;
}

const Avatar: FC<AvatarNameProp> = ({name}) => {
    const nameLetters = name.split(' ').map(item => item.slice(0, 1)).join('');
    return (
        <div className='bg-emerald-700 text-cyan-50 rounded-[50%] w-[100px] h-[100px] flex justify-center items-center'>
            <p className='capitalize text-4xl'>{nameLetters}</p>
        </div>
    );
};

export default Avatar;