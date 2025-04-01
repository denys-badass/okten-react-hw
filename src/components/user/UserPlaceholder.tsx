import {FC} from 'react';
import {IUserPlaceholder} from "../../models/placeholder-models/IUserPlaceholder.ts";

type UserProp = {
    user: IUserPlaceholder;
}

const UserPlaceholder: FC<UserProp> = ({user}) => {
    return (
        <div>
            {JSON.stringify(user)}
        </div>
    );
}

export default UserPlaceholder;