import './App.css'
import {Outlet} from "react-router";
import {Menu} from "./components/menu/Menu.tsx";

function App() {
  return (
    <div>
        <header className='bg-sky-600 h-[10vh]'>
            <Menu/>
        </header>
        <main className='bg-gray-300/70 min-h-[90vh]'>
            <Outlet/>
        </main>
    </div>
  )
}

export default App
