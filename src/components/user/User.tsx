import {FC} from "react";
import {IUser} from "../../models/IUser.ts";

type UserProp = {
    user: IUser;
}

const User:FC<UserProp> = ({user}) => {
    const {image, username, firstName, lastName, maidenName, university, age, gender} = user;
    return (
        <div className='border-2 border-teal-700 rounded-2xl flex flex-col justify-between items-center bg-teal-100/20 text-gray-900 p-4 shadow-lg shadow-teal-900'>
            <img src={image} alt={username} className='w-1/3' loading='lazy'/>
            <h3 className='text-2xl text-center'>{firstName} {maidenName} {lastName}</h3>
            <p className='text-center'>{university}</p>
            <p>{gender}</p>
            <p>{age} years old</p>
        </div>
    );
};

export default User;