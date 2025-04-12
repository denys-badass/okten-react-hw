import {useEffect, useState} from "react";
import {ICar} from "../../models/ICar.ts";
import {carsService} from "../../api/cars.service.ts";
import Car from "../car/Car.tsx";

const Cars = () => {
    const [cars, setCars] = useState<ICar[]>([]);

    useEffect(() => {
        carsService.getAllCars().then(data => {
            setCars(data);
        })
    }, []);
    return (
        <div className='w-3/4 mx-auto grid grid-cols-4 py-10'>
            {
                cars.map(car => <Car key={car.id} car={car}/>)
            }
        </div>
    );
};

export default Cars;