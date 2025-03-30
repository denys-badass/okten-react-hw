import {FC} from 'react';
import {IProduct} from "../../models/IProduct.ts";
import Reviews from "../reviews-component/Reviews.tsx";
import Stars from "../stars-component/Stars.tsx";
import Tags from "../tags-component/Tags.tsx";
import DetailProductInfo from "../detail_product_info-component/DetailProductInfo.tsx";
import PriceWithQR from "../price_with_qr-component/PriceWithQR.tsx";

type ProductDetailProp = {
    product: IProduct | null;
    onClose: () => void;
}

const ProductDetail: FC<ProductDetailProp> = ({product, onClose}) => {
    if (!product) return null;

    const {
        stock,
        thumbnail,
        title,
        tags,
        description,
        brand,
        category,
        dimensions,
        shippingInformation,
        discountPercentage,
        price,
        totalPrice,
        meta,
        rating,
        reviews,
    } = product;

    if (stock <= 0) onClose();

    return (
        <div className={`w-[80vw] bg-blue-50/97 fixed top-1/17 left-1/10 text-gray-700 rounded-3xl pl-14 py-6 pr-6 max-h-[90%] overflow-y-auto scrollbar-hide scroll-smooth`}>
            <img src={thumbnail} alt={title} className='w-1/4 float-left my-8 mr-8'/>
            <div className='flex relative'>
                <h2 className='text-4xl'>{title}</h2>
                <button onClick={onClose} className='self-start ml-auto'><i className='bx bxs-x-square text-[40px]' ></i></button>
            </div>

            <Tags tags={tags}/>

            <div className='text-lg mt-3.5'>{description}</div>

            <DetailProductInfo brand={brand} category={category} dimensions={dimensions} shippingInformation={shippingInformation} stock={stock}/>

            <PriceWithQR price={price} discountPercentage={discountPercentage} totalPrice={totalPrice} qr={meta.qrCode}/>

            <div className='w-full mt-5 text-lg p-2'>
                <div className='flex justify-center items-center gap-4'>
                    <div>Rating:</div>
                    <Stars stars={rating}/>
                    <p>({rating})</p>
                </div>
            </div>

            <div className='w-7/8 mx-auto'>
                <Reviews reviews={reviews}/>
            </div>
        </div>
    );
};

export default ProductDetail;