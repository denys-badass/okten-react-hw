import './App.css'
import {coursesTitleArray} from "../data/arrays.ts";
import TitleComponent from "../components/title-component/TitleComponent.tsx";

function App() {
    return (
        <div className={'bg-sky-950 flex justify-center items-center flex-col gap-4 p-10'}>
            {coursesTitleArray.map((item: string, index: number) => <TitleComponent key={index} title={item} />)}
        </div>
    )
}

export default App
