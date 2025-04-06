import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <ul className='flex text-slate-600 text-lg'>
            <li><Link to={'/users'}>Users</Link></li>
        </ul>
    );
};

export default Menu;