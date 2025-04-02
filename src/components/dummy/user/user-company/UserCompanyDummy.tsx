import {FC} from "react";
import {ICompanyDummy} from "../../../../models/dummy-models/ICompanyDummy.ts";

type UserCompanyProp = {
    company: ICompanyDummy
}

const UserCompanyDummy:FC<UserCompanyProp> = ({company}) => {
    const {name, title, department, address} = company
    return (
        <section>
            <h4 className='font-bold'>Company:</h4>
            <p>{name}</p>
            <p>{title} at {department} department</p>
            <p>{address.country}, {address.state} - {address.stateCode}</p>
            <p>{address.city}, {address.address} - {address.postalCode}</p>
        </section>
    );
};

export default UserCompanyDummy;