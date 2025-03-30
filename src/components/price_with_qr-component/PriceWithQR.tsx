import {FC} from 'react';

type PriceQrProp = {
    price: number;
    discountPercentage: number;
    totalPrice: number | undefined;
    qr: string;
}

const PriceWithQr:FC<PriceQrProp> = ({price, discountPercentage, totalPrice, qr}) => {
    return (
        <div className='grid grid-cols-2 mt-6 gap-10'>
            <div className='flex flex-col place-content-end'>
                <p className='grid grid-cols-2'>
                    <span>Discount:</span>
                    <span className='text-right'>-{discountPercentage}%</span>
                </p>
                <p className='text-right line-through text-gray-500'>${price}</p>
                <p className='grid grid-cols-2 text-2xl'>
                    <span>Price:</span>
                    <span className='text-right'>${totalPrice}</span>

                </p>
            </div>
            <div className='flex justify-center'>
                <img src={qr} alt='QR Code' className='w-1/3'/>
            </div>
        </div>
    );
};

export default PriceWithQr;