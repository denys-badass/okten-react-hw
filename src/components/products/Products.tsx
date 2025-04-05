import {FC} from "react";
import {IProduct} from "../../models/IProduct.ts";
import Product from "../product/Product.tsx";

type ProductsProp = {
    products: IProduct[];
}

const Products: FC<ProductsProp> = ({products}) => {
    return (
        <section className='flex flex-col gap-4 py-6'>
            {
                products.map(product => <Product key={product.id} product={product}/>)
            }
        </section>
    );
};

export default Products;