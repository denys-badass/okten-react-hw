import {FC} from 'react';
import {IProduct} from "../../models/IProduct.ts";

type ProductProp = {
    product: IProduct;
}

const Product: FC<ProductProp> = ({product}) => {
    return (
        <div>
            {
                product.description
            }
        </div>
    );
};

export default Product;