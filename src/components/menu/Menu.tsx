import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <>
            <h2 className='text-2xl w-1/6'>Cars</h2>
            <ul>
                <li><Link to='/cars'>Show</Link></li>
                <li><Link to='/cars/add'>Add</Link></li>
            </ul>
        </>
    );
};

export default Menu;