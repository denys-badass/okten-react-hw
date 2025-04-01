import {useLocation} from "react-router-dom";
import {UsersComponentMap} from "./UsersComponentMap.ts";

const UsersPage = () => {
    const {state} = useLocation();
    const componentKey: string = state.key;

    const UsersComponent = UsersComponentMap[componentKey];

    return (
        <div>
            {
                <UsersComponent />
            }
        </div>
    );
};

export default UsersPage;