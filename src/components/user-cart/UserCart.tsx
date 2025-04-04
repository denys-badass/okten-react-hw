import {FC} from "react";

type UserIdProp = {
    userId: string;
}

const UserCart: FC<UserIdProp> = ({userId}) => {

    return (
        <div>
            <p>Cart for user {userId}</p>
        </div>
    );
};

export default UserCart;