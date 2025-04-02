import {FC} from "react";
import {ICompanyPlaceholder} from "../../../../models/placeholder-models/ICompanyPlaceholder.ts";

type CompanyProp = {
    company: ICompanyPlaceholder
}

const UserCompanyPlaceholder: FC<CompanyProp> = ({company}) => {
    const {name, catchPhrase, bs} = company;
    return (
        <div>
            <h4 className='font-bold'>Company</h4>
            <p>{name}</p>
            <p>{catchPhrase}</p>
            <p>{bs}</p>
        </div>
    );
};

export default UserCompanyPlaceholder;