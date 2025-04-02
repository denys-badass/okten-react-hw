import {FC} from "react";
import {IHair} from "../../../../models/dummy-models/IHair.ts";

type UserInfoProp = {
    userInfo: {
        age: number,
        gender: string,
        birthDate: string,
        height: number,
        weight: number,
        eyeColor: string,
        hair: IHair,
        bloodGroup: string
    }
}

const UserInfoDummy: FC<UserInfoProp> = ({userInfo}) => {
    const {age, gender, birthDate, height, weight, eyeColor, hair, bloodGroup} = userInfo;
    return (
        <section>
            <h4 className='font-bold'>User Info:</h4>
            <p>{gender} {age} ({birthDate})</p>
            <p>Height: {height}</p>
            <p>Weight: {weight}</p>
            <p>Eye: {eyeColor}</p>
            <p>Hair: {hair.color} {hair.type}</p>
            <p>Blood: {bloodGroup}</p>
        </section>
    );
};

export default UserInfoDummy;