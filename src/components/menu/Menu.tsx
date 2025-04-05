import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <ul>
            <li><Link to={'/users'}>Users</Link></li>
        </ul>
    );
};

export default Menu;