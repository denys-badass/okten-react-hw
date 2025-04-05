import {useParams} from "react-router-dom";
import UserCarts from "../components/user-carts/UserCarts.tsx";

const CartsPage = () => {
    const {userId} = useParams();

    return (
        <div>
            {userId && <UserCarts userId={userId}/>}
        </div>
    );
};

export default CartsPage;