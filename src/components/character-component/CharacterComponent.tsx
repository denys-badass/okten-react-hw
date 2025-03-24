import {FC, ReactNode} from 'react';
import {ISimpsonModel} from "../../models/SimpsonModel.ts";

type SimpsonPropsType = {
    character: ISimpsonModel;
    children: ReactNode;
}

const CharacterComponent: FC<SimpsonPropsType> = ({character, children}) => {
    return (
        <div className='w-2/3 m-auto'>
            <h3 className='text-3xl'>{character.name} {character.surname}</h3>
            <p>Age: {character.age} years</p>
            <p>{children}</p>
            <img src={character.photo} alt={character.name}/>
        </div>
    );
};

export default CharacterComponent;