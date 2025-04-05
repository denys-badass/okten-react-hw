import {useNavigate, useParams} from "react-router-dom";
import UserCarts from "../components/user-carts/UserCarts.tsx";

const CartsPage = () => {
    const {userId} = useParams();
    const navigate = useNavigate();

    const backNavigateHandle = () => {
        navigate('/');
    }

    return (
        <div>
            {userId &&
                <div>
                    <button onClick={backNavigateHandle}><i className="fa-solid fa-arrow-left"></i> Back</button>
                    <UserCarts userId={userId}/>
                </div>}
        </div>
    );
};

export default CartsPage;