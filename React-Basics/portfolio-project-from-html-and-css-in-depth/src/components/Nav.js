import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <ul>
                <li><Link to="/" className='a'>Home</Link></li>
                <li><Link to="/about" className='a'>About</Link></li>
                <li><Link to="/booking" className='a'>Booking</Link></li>
                <li><Link to="/contact-us" className='a'>Contact Us</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;