import {FC} from 'react';
import {IProduct} from "../../models/IProduct.ts";

type ProductProp = {
    product: IProduct;
}

const Product: FC<ProductProp> = ({product}) => {
    return (
        <div className={`border-2 border-slate-600 rounded-lg p-3`}>
            <img src={product.thumbnail} alt={product.title}/>
            <span>{product.discountPercentage}</span>
            <h3>{product.title}</h3>
            <p>by {product.brand}</p>
            <p>{product.price}</p>
            <p>Stock: {product.stock}</p>
            <button>Details</button>
        </div>
    );
};

export default Product;