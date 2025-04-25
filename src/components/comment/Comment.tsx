import {FC} from "react";
import {IComment} from "../../models/IComment.ts";

type CommentProp = {
    comment: IComment;
}

export const Comment: FC<CommentProp> = ({comment}) => {
    const {name, body, email} = comment;

    return (
        <div className='border-1 border-slate-500/60 rounded-2xl p-6 shadow-2xl'>
            <h4 className='text-lg font-bold capitalize'>{name}</h4>
            <div className='px-6 pt-2 flex flex-col gap-2'>
                <p>{body}</p>
                <p className='italic text-sm'> by {email}</p>
            </div>
        </div>
    );
};