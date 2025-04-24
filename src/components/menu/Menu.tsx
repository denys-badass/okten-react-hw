import {Link} from "react-router";

export const Menu = () => {
    return (
        <nav className='w-3/5 mx-auto h-full'>
            <ul className='flex justify-around items-center h-full text-gray-100'>
                <li><Link to={'/users'}>Users</Link></li>
                <li><Link to={'/posts'}>Posts</Link></li>
                <li><Link to={'/comments'}>Comments</Link></li>
                <li><Link to={'/complex'}>Complex</Link></li>
            </ul>
        </nav>
    );
};