import {FC, useState} from "react";
import {ICart} from "../../models/ICart.ts";
import Products from "../products/Products.tsx";

type CartProp = {
    cart: ICart;
}

const Cart: FC<CartProp> = ({cart}) => {
    const [expanded, setExpanded] = useState<boolean>(false);

    const {id, products, totalQuantity, total, discountedTotal} = cart
    return (
        <div className='w-full p-6 rounded-2xl border-1'>
            <button onClick={() => setExpanded(!expanded)} className='w-full flex justify-between overflow-hidden'>
                <span>Cart #{id}</span>
                <i className={`fa-solid fa-${expanded ? 'minus' : 'plus'}`}></i>
            </button>
            <div className={`w-full grid pointer-events-none ${
                expanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0] opacity-0'}`}>
                {expanded &&
                <div>
                    <Products products={products}/>
                    <p className='text-lg text-center'>Total Qty: {totalQuantity}</p>
                    <div className='text-right'>
                        <p className='text-xl line-through text-gray-500'>${total}</p>
                        <p className='text-3xl'>Total: ${discountedTotal}</p>
                    </div>
                </div>
                }
            </div>
        </div>
    );
};

export default Cart;