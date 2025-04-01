import {Link} from "react-router-dom";

const SubMenu = () => {
    return (
        <ul>
            <li><Link to={'jsonplaceholder'} state={{key: 'placeholder'}}>JSONPlaceholder</Link></li>
            <li><Link to={'dummyjson'} state={{key: 'dummy'}}>DummyJSON</Link></li>
        </ul>
    );
};

export default SubMenu;