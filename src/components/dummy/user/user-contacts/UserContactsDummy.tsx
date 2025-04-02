import {FC} from "react";
import {IAddressDummy} from "../../../../models/dummy-models/IAddressDummy.ts";

type UserContactsProp = {
    userContacts: {
        address: IAddressDummy,
        phone: string,
        email: string
    }
}

const UserContactsDummy: FC<UserContactsProp> = ({userContacts}) => {
    const {address, phone, email} = userContacts;
    return (
        <section>
            <h4 className='font-bold'>Contacts:</h4>
            <p>{address.country}, {address.state} - {address.stateCode}</p>
            <p>{address.city}, {address.address} - {address.postalCode}</p>
            <p>Phone: <span className='italic'>{phone}</span></p>
            <p>Email: <span className='italic'>{email}</span></p>
        </section>
    );
};

export default UserContactsDummy;