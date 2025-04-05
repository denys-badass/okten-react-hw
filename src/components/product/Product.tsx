import {FC} from "react";
import {IProduct} from "../../models/IProduct.ts";

type ProductProp = {
    product: IProduct;
}

const Product: FC<ProductProp> = ({product}) => {
    const {thumbnail, title, discountPercentage, price, quantity, total, discountedTotal} = product;

    return (
        <div className='border-2 border-gray-500 bg-gray-100 rounded-2xl p-6'>

            <img src={thumbnail} alt={title} loading='lazy' className='w-1/5 float-left mr-4'/>
            <div className='flex justify-between mb-2.5'>
                <h3 className='text-2xl'>{title}</h3>
                <p className='bg-red-500 rounded-lg p-1.5 text-slate-50'>-{discountPercentage}%</p>
            </div>
            <div className='flex flex-col gap-3'>
                <p className='text-lg'>Price: ${price}</p>
                <p>QTY: {quantity}</p>
                <div className='text-right'>
                    <p className='text-gray-500 line-through'>${total}</p>
                    <p className='text-xl'>Total: ${discountedTotal}</p>
                </div>
            </div>


        </div>
    );
};

export default Product;