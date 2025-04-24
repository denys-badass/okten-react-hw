import {FC} from "react";
import {IUser} from "../../models/IUser.ts";

type UserProp = {
    user: IUser;
}

export const User: FC<UserProp> = ({user}) => {
    return (
        <div>
            {user.username}
        </div>
    );
};