import {FC} from "react";
import {IAddressPlaceholder} from "../../../../models/placeholder-models/IAddressPlaceholder.ts";

type AddressProp = {
    address: IAddressPlaceholder;
}

const UserAddressPlaceholder: FC<AddressProp> = ({address}) => {
    const {city, street, suite, zipcode} = address;

    return (
        <div>
            <h4 className='font-bold'>Address</h4>
            <p>{city} city</p>
            <p>{street} str. {suite}</p>
            <p>Zipcode: {zipcode}</p>
        </div>
    );
};

export default UserAddressPlaceholder;