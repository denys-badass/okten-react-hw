import {FC, useState} from "react";
import {IPost} from "../../models/IPost.ts";
import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {BiCaretDown} from "react-icons/bi";
import {ComplexComments} from "../comments/ComplexComments.tsx";

type PostProp = {
    post: IPost;
}

export const Post: FC<PostProp> = ({post}) => {
    const {title, body, id} = post;
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const {isComplex} = useAppSelector(state => state.complexStore)

    const expandedHandle = () => {
        setIsExpanded(!isExpanded);
    }

    return (
        <div className='border-1 border-slate-500/60 rounded-2xl p-6 pb-0 shadow-2xl'>
            <h4 className='text-lg capitalize font-bold'>{title}</h4>
            <p className='p-6'>{body}</p>
            {isComplex && <div>
                <div className='flex items-center gap-2.5'>
                    <button onClick={expandedHandle}>Comments</button>
                    <BiCaretDown/>
                </div>
                <div>{isExpanded && <div><ComplexComments postId={id}/></div>}</div>
            </div>}
        </div>
    );
};