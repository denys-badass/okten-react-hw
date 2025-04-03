import {FC, useEffect, useState} from "react";
import {IUserPlaceholder} from "../../../models/placeholder-models/IUserPlaceholder.ts";
import {PlaceholderService} from "../../../api/placeholder.service.ts";

type UserIdProp = {
    id: number;
}

const PostedUser: FC<UserIdProp> = ({id}) => {
    const [user, setUser] = useState<IUserPlaceholder | null>(null);

    useEffect(() => {
        PlaceholderService.getUserById(id).then(data => {
            setUser(data);
        })
    }, [id]);

    return (
        <p>Posted by <span className='italic'>{user?.username}</span></p>
    );
};

export default PostedUser;