import {simpsons} from "../../data/arrays.ts";
import CharacterComponent from "../character-component/CharacterComponent.tsx";

const FamilyComponent = () => {
    return (
        <div className='flex gap-8 flex-col border-slate-600 border-2 w-2/3 m-auto p-6 rounded-2xl'>
            {
                simpsons.map((item, index) => <CharacterComponent key={index} character={item}>
                    {item.info}</CharacterComponent>)
            }
        </div>
    );
};

export default FamilyComponent;