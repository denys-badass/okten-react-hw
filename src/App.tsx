import './App.css'
import {useFetch} from "./hooks/useFetch.tsx";
import {IResponseUsers} from "./models/IReponseUsers.ts";

function App() {
    const users = useFetch<IResponseUsers>('https://dummyjson.com/users')
    return (
        <div>
            {
                users?.users?.map(user => <div>{JSON.stringify(user)}</div>)
            }
        </div>
    )
}

export default App
