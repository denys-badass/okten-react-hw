import {useLocation} from "react-router-dom";
import UsersComponent from "../../components/users-component/UsersComponent.tsx";

const UsersPage = () => {
    const {state} = useLocation();
    const baseUrl: string = state

    return (
        <div>
            <UsersComponent url={baseUrl}/>
        </div>
    );
};

export default UsersPage;