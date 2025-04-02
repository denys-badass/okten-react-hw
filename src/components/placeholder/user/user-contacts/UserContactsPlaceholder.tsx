import {FC} from "react";

type ContactsProp = {
    email: string;
    phone: string;
    website: string;
}

const UserContactsPlaceholder: FC<ContactsProp> = ({email, phone, website}) => {
    return (
        <div>
            <h4 className='font-bold'>Contacts</h4>
            <p>Email: <span className='italic'>{email}</span></p>
            <p>Phone: <span className='italic'>{phone}</span></p>
            <p>Website: <span className='italic'>{website}</span></p>
        </div>
    );
};

export default UserContactsPlaceholder;