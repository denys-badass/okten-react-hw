import {FC} from "react";
import {ICar} from "../../models/ICar.ts";

type CarProp = {
    car: ICar;
}

const Car: FC<CarProp> = ({car}) => {
    const {brand, price, year} = car;
    return (
        <div className='border-1 border-slate-500'>
            <h3 className='text-2xl font-bold'>{brand}</h3>
            <p>{year} year</p>
            <p>${price}</p>
        </div>
    );
};

export default Car;