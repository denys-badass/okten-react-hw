import {FC} from 'react';
import {IProduct} from "../../models/IProduct.ts";

export type ProductProp = {
    product: IProduct;
    isExpanded: (product: IProduct) => void;
}

const Product: FC<ProductProp> = ({product, isExpanded}) => {
    const {price, stock, thumbnail, title, discountPercentage, brand} = product
    const totalPrice = Math.round((price - (discountPercentage / 100 * price)) * 100) / 100;
    const isAvailable = stock > 0;

    product.totalPrice = totalPrice;
    return (
        <div
            className={`bg-blue-50/90 border-1 border-slate-400 rounded-lg p-3 relative flex flex-col justify-between
            hover:shadow-md shadow-slate-600/80 transition duration-300 text-gray-700 ${!isAvailable && 'grayscale'}`}>
            <div>
                <img src={thumbnail} alt={title} loading="lazy"/>
                <span
                    className='absolute right-2 top-2 bg-red-500 text-slate-100 rounded-[8px] w-1/4 h-1/12 flex justify-center items-center'>
                    -{discountPercentage}%
                </span>
                <h3 className='text-2xl'>{title}</h3>
                {brand && <p className='italic'>by {brand}</p>}
            </div>
            <div className='flex flex-col items-center'>
                <p className='self-end text-gray-600 line-through text-[14px]'>${price}</p>
                <p className='self-end text-[20px]'>${Math.round(totalPrice * 100) / 100}</p>
                <p className='flex justify-center items-center'>In Stock: <i className={`bx text-[24px] bxs-${
                    isAvailable ? 'check-circle text-emerald-400' : 'x-circle text-red-500'
                }`}></i></p>
                <button
                    className='cursor-pointer justify-self-end w-3/4 p-2 mt-2 bg-emerald-400 rounded-lg'
                    onClick={() => isExpanded(product)}>Details
                </button>
            </div>

        </div>
    );
};

export default Product;