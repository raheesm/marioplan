import {Link} from 'react-router-dom'
import SingnedInLinks from './SignedInLinks';
import SigneOutLinks from './SignedOutLinks';
const Navbar = () => {
    return ( 
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className='brand-logo'>Mario Plan</Link>
                <SingnedInLinks/>
                <SigneOutLinks/>
            </div>
        </nav>
     );
}
 
export default Navbar;