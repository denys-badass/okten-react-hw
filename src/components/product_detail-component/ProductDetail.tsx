import {FC, useState} from 'react';
import {IProduct} from "../../models/IProduct.ts";

type ProductDetailProp = {
    product: IProduct | null;
    onClose: () => void;
}

const ProductDetail: FC<ProductDetailProp> = ({product, onClose}) => {
    const [reviewCollapsed, setReviewCollapsed] = useState<boolean>(true);

    if (!product) return null;
    if (product.stock <= 0) onClose();

    return (
        <div className={`w-[80vw] bg-blue-50/97 fixed top-1/17 left-1/10 text-gray-700 rounded-3xl pl-14 py-6 pr-6`}>
            <img src={product.thumbnail} alt={product.title} className='w-1/4 float-left my-8 mr-8'/>
            <div className='flex'>
                <h2 className='text-4xl'>{product.title}</h2>
                <button onClick={onClose} className='self-start ml-auto'><i className='bx bxs-x-square text-[40px]' ></i></button>
            </div>
            <ul className='flex text-sm text-gray-400'>
                {
                    product.tags.map((tag) => <li>#{tag}</li>)
                }
            </ul>
            <div className='text-lg mt-3.5'>{product.description}</div>
            <ul className='grid grid-cols-1 mt-12 text-gray-600'>
                <li className='grid grid-cols-2'>
                    <span>Brand:</span>
                    <span className='capitalize'>{product.brand}</span>
                </li>
                <li className='grid grid-cols-2'>
                    <span>Category:</span>
                    <span className='capitalize'>{product.category}</span>
                </li>
                <li className='grid grid-cols-2'>
                    <span>Dimensions:</span>
                    <span className='capitalize'>
                        {Math.round(product.dimensions.width)} * {Math.round(product.dimensions.height)} * {Math.round(product.dimensions.depth)}
                    </span>
                </li>
                <li className='grid grid-cols-2'>
                    <span>Shipping:</span>
                    <span className='capitalize'>{product.shippingInformation}</span>
                </li>
                <li className='grid grid-cols-2'>
                    <span>In Stock:</span>
                    <span className='capitalize'>{product.stock}</span>
                </li>
            </ul>
            <div className='grid grid-cols-2 mt-6 gap-10'>
                <div className='flex flex-col place-content-end'>
                    <p className='grid grid-cols-2'>
                        <span>Discount:</span>
                        <span className='text-right'>-{product.discountPercentage}%</span>
                    </p>
                    <p className='text-right line-through text-gray-500'>${product.price}</p>
                    <p className='grid grid-cols-2 text-2xl'>
                        <span>Price:</span>
                        <span className='text-right'>${product.totalPrice}</span>

                    </p>
                </div>
                <div className='flex justify-center'>
                    <img src={product.meta.qrCode} alt='QR Code' className='w-1/3'/>
                </div>
            </div>
            <button
                className={`w-full grid grid-cols-3 mt-5 text-lg border-1 border-b-gray-500 rounded-lg p-2`}
                onClick={() => setReviewCollapsed(!reviewCollapsed)}>
                <span>Reviews</span>
                <div>Stars</div>
                <i className={`bx justify-self-end text-2xl self-center mr-5 bx-chevron-${ reviewCollapsed ? 'right' : 'down'}`}></i>
            </button>
            <div className={`grid overflow-hidden transition duration-300 ${ 
                reviewCollapsed ? 'grid-rows-[0] opacity-0' : 'grid-rows-[1fr] opacity-100'
            }`}>
                {/*<Reviews reviews={product.reviews}/>*/}
            </div>
        </div>
    );
};

export default ProductDetail;