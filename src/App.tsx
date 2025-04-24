import './App.css'
import {Outlet} from "react-router";
import {Menu} from "./components/menu/Menu.tsx";

function App() {
  return (
    <div className='bg-gray-300/70'>
        <header className='bg-sky-600 h-[10vh]'>
            <Menu/>
        </header>
        <main className='min-h-[90vh] w-3/5 mx-auto py-8'>
            <Outlet/>
        </main>
    </div>
  )
}

export default App
