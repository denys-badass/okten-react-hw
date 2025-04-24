import './App.css'
import {Outlet} from "react-router";
import {Menu} from "./components/menu/Menu.tsx";

function App() {
  return (
    <div>
        <header>
            <Menu/>
        </header>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default App
