import {FC} from 'react';

type ModulePropsType = {
    module: string;
}

const ModuleComponent: FC<ModulePropsType> = ({module}) => {
    return (
        <li className='uppercase bg-slate-800 text-emerald-400 rounded-lg p-1.5 justify-center flex text-center'>{module}</li>
    );
};

export default ModuleComponent;