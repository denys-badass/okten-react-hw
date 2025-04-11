import {FC} from "react";
import {ICar} from "../../models/ICar.ts";

type CarProp = {
    car: ICar;
}

const Car: FC<CarProp> = ({car}) => {
    return (
        <div>
            {JSON.stringify(car)}
        </div>
    );
};

export default Car;