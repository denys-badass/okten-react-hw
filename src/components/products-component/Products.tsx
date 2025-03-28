import {useEffect, useState} from 'react';
import {IProduct} from "../../models/IProduct.ts";
import {getProducts} from "../../sevices/api.service.ts";
import Product from "../product-component/Product.tsx";
import ProductDetail from "../product_detail-component/ProductDetail.tsx";

const Products = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [expanded, setExpanded] = useState<IProduct | null>(null);

    useEffect(() => {
        getProducts().then(data => setProducts(data));
    }, []);

    return (
        <>
            <div className={`grid grid-cols-4 gap-8 w-2/3 mx-auto ${expanded && 'blur-xs'}`}>
                {
                    products.map(product => <Product key={product.id} product={product} isExpanded={setExpanded}/>)
                }
            </div>
            <ProductDetail product={expanded} onClose={() => setExpanded(null)}/>
        </>

    );
};

export default Products;