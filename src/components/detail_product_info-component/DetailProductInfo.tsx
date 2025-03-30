import {FC} from 'react';
import {IDimensions} from "../../models/IProduct.ts";

type ProductInfoProp = {
    brand: string;
    category: string;
    dimensions: IDimensions;
    shippingInformation: string;
    stock: number;
}

const DetailProductInfo: FC<ProductInfoProp> = ({brand, category, dimensions, shippingInformation, stock}) => {
    return (
        <ul className='grid grid-cols-1 mt-12 text-gray-600'>
            <li className='grid grid-cols-2'>
                <span>Brand:</span>
                <span className='capitalize'>{brand}</span>
            </li>
            <li className='grid grid-cols-2'>
                <span>Category:</span>
                <span className='capitalize'>{category}</span>
            </li>
            <li className='grid grid-cols-2'>
                <span>Dimensions:</span>
                <span className='capitalize'>
                        {Math.round(dimensions.width)} * {Math.round(dimensions.height)} * {Math.round(dimensions.depth)}
                    </span>
            </li>
            <li className='grid grid-cols-2'>
                <span>Shipping:</span>
                <span className='capitalize'>{shippingInformation}</span>
            </li>
            <li className='grid grid-cols-2'>
                <span>In Stock:</span>
                <span className='capitalize'>{stock}</span>
            </li>
        </ul>
    );
};

export default DetailProductInfo;