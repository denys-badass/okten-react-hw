import {FC} from 'react';
import ModuleComponent from "../module-component/ModuleComponent.tsx";

type ModulesPropsType = {
    modules: string[];
}

const ModulesComponent: FC<ModulesPropsType> = ({modules}) => {
    return (
        <ul className='grid grid-cols-4 gap-2'>
            {
                modules.map((item: string, index: number) => <ModuleComponent key={index} module={item}/>)
            }
        </ul>
    );
};

export default ModulesComponent;