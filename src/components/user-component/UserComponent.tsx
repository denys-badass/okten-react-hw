import {FC} from 'react';
import {IUserPH} from "../../models/ph-models/IUserPH.ts";

type UserProp = {
    user: IUserPH;
}

const UserComponent: FC<UserProp> = ({user}) => {
    return (
        <div>
            {JSON.stringify(user)}
        </div>
    );
};

export default UserComponent;