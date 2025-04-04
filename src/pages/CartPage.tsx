import {useParams} from "react-router-dom";
import UserCart from "../components/user-cart/UserCart.tsx";

const CartPage = () => {
    const {userId} = useParams();

    return (
        <div>
            {userId && <UserCart userId={userId}/>}
        </div>
    );
};

export default CartPage;