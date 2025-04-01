import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <ul className='flex justify-around items-center h-full text-cyan-50'>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/users'}>Users</Link></li>
            <li><Link to={'/posts'}>Posts</Link></li>
            <li><Link to={'/comments'}>Comments</Link></li>
        </ul>
    );
};

export default Menu;