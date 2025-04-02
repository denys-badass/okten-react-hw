import {useParams} from "react-router-dom";
import {UsersComponentMap} from "./UsersComponentMap.ts";

const UsersPage = () => {
    const {service} = useParams();

    const componentKey: string = service || '';

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