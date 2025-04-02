import {FC} from 'react';
import {IUserDummy} from "../../../models/dummy-models/IUserDummy.ts";
import UserInfoDummy from "./user-info/UserInfoDummy.tsx";
import UserContactsDummy from "./user-contacts/UserContactsDummy.tsx";
import UserCompanyDummy from "./user-company/UserCompanyDummy.tsx";

type UserProp = {
    user: IUserDummy;
}

const UserDummy: FC<UserProp> = ({user}) => {
    const {
        firstName,
        lastName,
        maidenName,
        username,
        gender,
        age,
        birthDate,
        image,
        height,
        weight,
        bloodGroup,
        eyeColor,
        hair,
        address,
        university,
        phone,
        email,
        company
    } = user;

    const userInfo = {age, gender, birthDate, height, weight, eyeColor, hair, bloodGroup};
    const userContacts = {address, phone, email};
    return (
        <div className='border-2 p-4 rounded-lg border-sky-950 text-sky-950 overflow-auto'>
            <div className='flex'>
                <img src={image} alt={`${username} avatar`} className='float-left mr-4 mb-2'/>
                <div className='self-center m-auto text-center'>
                    <h3 className='text-2xl'>{firstName} {maidenName} {lastName}</h3>
                    <h4 className='text-2xl italic'>"{username}"</h4>
                    <p>{university}</p>
                </div>
            </div>
            <div className='grid grid-cols-1 gap-3 px-4'>
                <UserInfoDummy userInfo={userInfo}/>
                <UserContactsDummy userContacts={userContacts}/>
                <UserCompanyDummy company={company}/>
            </div>

        </div>
    );
};

export default UserDummy;