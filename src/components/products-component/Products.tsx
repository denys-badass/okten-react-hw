import {useEffect, useState} from 'react';
import {IProduct} from "../../models/IProduct.ts";
import {getProducts} from "../../sevices/api.service.ts";
import Product from "../product-component/Product.tsx";

const Products = () => {
    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        getProducts().then(data => setProducts(data));
    }, []);

    return (
        <div className={`grid grid-cols-4 gap-8 w-2/3 mx-auto`}>
            {
                products.map(product => <Product key={product.id} product={product} />)
            }
        </div>
    );
};

export default Products;