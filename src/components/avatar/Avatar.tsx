import {FC} from "react";
import {getAvatarLetters} from "./getAvatarLetters.ts";
import {getBgColor} from "./getBgColor.ts";

type AvatarProp = {
    firstName: string;
    lastName: string;
}

const Avatar: FC<AvatarProp> = ({firstName, lastName}) => {
    const bgColor: string = getBgColor();
    const letters: string = getAvatarLetters(firstName, lastName)
    return (
        <div className={`rounded-[50%] ${bgColor} text-slate-50 w-[50px] h-[50px] `}>
            <p className='text-2xl flex justify-center items-center w-full h-full'>{letters}</p>
        </div>
    );
};

export default Avatar;