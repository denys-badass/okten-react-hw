import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <>
            <h2>Cars</h2>
            <ul>
                <li><Link to='cars'>Show</Link></li>
            </ul>
        </>
    );
};

export default Menu;