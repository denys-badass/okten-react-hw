import {FC} from 'react';
import {IUserDummy} from "../../../models/dummy-models/IUserDummy.ts";

type UserProp = {
    user: IUserDummy;
}

const UserDummy: FC<UserProp> = ({user}) => {
    return (
        <div>
            {JSON.stringify(user)}
        </div>
    );
};

export default UserDummy;