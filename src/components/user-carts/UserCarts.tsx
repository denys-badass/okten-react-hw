import {FC, useEffect, useState} from "react";
import {ICart} from "../../models/ICart.ts";
import {APIService} from "../../api/api.service.ts";
import Cart from "../cart/Cart.tsx";

type UserIdProp = {
    userId: string;
}

const UserCarts: FC<UserIdProp> = ({userId}) => {
    const [carts, setCarts] = useState<ICart[]>([]);

    useEffect(() => {
        APIService.getCartsByUserId(+userId).then(data => {
            setCarts(data);
            window.scrollTo({top: 0, behavior: 'smooth'});
        })
    }, [userId]);

    return (
        <div className='py-6 flex flex-col gap-4'>
            {carts.length <= 0 ? <h2>User doesn`t have carts</h2> : carts.map(cart => <Cart key={cart.id} cart={cart}/>)}
        </div>
    );
};

export default UserCarts;