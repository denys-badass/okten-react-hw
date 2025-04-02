import {FC} from 'react';
import {IUserPlaceholder} from "../../../models/placeholder-models/IUserPlaceholder.ts";
import UserContactsPlaceholder from "./user-contacts/UserContactsPlaceholder.tsx";
import UserAddressPlaceholder from "./user-address/UserAddressPlaceholder.tsx";
import UserCompanyPlaceholder from "./user-company/UserCompanyPlaceholder.tsx";

type UserProp = {
    user: IUserPlaceholder;
}

const UserPlaceholder: FC<UserProp> = ({user}) => {
    const {name, username, email, phone, website, address, company} = user;
    return (
        <div className='border-2 p-4 rounded-lg border-sky-950 text-sky-950'>
            <h3 className='text-2xl'>{name}</h3>
            <h4 className='text-2xl italic'>"{username}"</h4>
            <div className='flex flex-col gap-3 py-3'>
                <UserContactsPlaceholder email={email} phone={phone} website={website}/>
                <UserAddressPlaceholder address={address}/>
                <UserCompanyPlaceholder company={company}/>
            </div>
        </div>
    );
}

export default UserPlaceholder;