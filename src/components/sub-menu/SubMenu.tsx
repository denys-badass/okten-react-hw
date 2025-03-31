import {Link} from "react-router-dom";
import {endpoints} from "../../constants/endpoints.ts";

const SubMenu = () => {
    return (
        <ul>
            <li><Link to={'jsonplaceholder'} state={endpoints.placeholder}>JSONPlaceholder</Link></li>
            <li><Link to={'dummyjson'} state={endpoints.dummy}>DummyJSON</Link></li>
        </ul>
    );
};

export default SubMenu;