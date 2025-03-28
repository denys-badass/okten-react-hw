import {FC} from 'react';
import {IProduct} from "../../models/IProduct.ts";

type ProductDetailProp = {
    product: IProduct | null;
    onClose: () => void;
}

const ProductDetail: FC<ProductDetailProp> = ({product, onClose}) => {
    if (!product) return null;

    return (
        <div className={`w-[80vw] h-[90vh] bg-gray-400 fixed top-1/17 left-1/10`}>
            {
                product.description
            }
            <button onClick={onClose}>Close</button>
        </div>
    );
};

export default ProductDetail;