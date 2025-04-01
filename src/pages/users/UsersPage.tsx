import {useLocation} from "react-router-dom";
import {UserComponentMap} from "./UserComponentMap.ts";

const UsersPage = () => {
    const {state} = useLocation();
    const componentKey: string = state.key;

    const Component = UserComponentMap[componentKey];

    return (
        <div>
            {
                <Component />
            }

        </div>
    );
};

export default UsersPage;