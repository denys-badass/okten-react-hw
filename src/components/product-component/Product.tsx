import {FC} from 'react';
import {IProduct} from "../../models/IProduct.ts";

export type ProductProp = {
    product: IProduct;
    isExpanded: (product: IProduct) => void;
}

const Product: FC<ProductProp> = ({product, isExpanded}) => {

    return (
        <div className={`border-2 border-slate-600 rounded-lg p-3`}>
            <img src={product.thumbnail} alt={product.title} loading="lazy" />
            <span>{product.discountPercentage}</span>
            <h3>{product.title}</h3>
            <p>by {product.brand}</p>
            <p>{product.price}</p>
            <p>Stock: {product.stock}</p>
            <button className='cursor-pointer' onClick={() => isExpanded(product)}>Details</button>
        </div>
    );
};

export default Product;