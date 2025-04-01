import {FC} from 'react';
import {IUserPlaceholder} from "../../models/placeholder-models/IUserPlaceholder.ts";
import {IUserDummy} from "../../models/dummy-models/IUserDummy.ts";

type UserProp = {
    user: IUserPlaceholder | IUserDummy;
}

const UserComponent: FC<UserProp> = ({user}) => {
    return (
        <div>
            {JSON.stringify(user)}
        </div>
    );
};

export default UserComponent;