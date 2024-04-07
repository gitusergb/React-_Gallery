import React ,{ useState }from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faImages, faAddressCard, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    // Toggle dropdown menu visibility
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
  return (
    // <div>Navbar</div>
    <nav className="navbar">
         <div className="hamburger" onClick={toggleMenu}>
                <FontAwesomeIcon icon={faBars} />
            </div>
    <ul className={`navbar-nav ${showMenu?'show':''}`}>
        <li className="nav-item ">
            <a href="/" className="nav-link">
                <FontAwesomeIcon icon={faHome} />
                <span className="link-text">Home</span>
            </a>
        </li>
        <li className="nav-item">
            <a href="/gallery" className="nav-link">
                <FontAwesomeIcon icon={faImages} />
                <span className="link-text">Gallery</span>
            </a>
        </li>
        <li className="nav-item">
            <a href="/contact" className="nav-link">
                <FontAwesomeIcon icon={faAddressCard} />
                <span className="link-text">Contact</span>
            </a>
        </li>
        <li className="nav-item">
            <a href="/about" className="nav-link">
                <FontAwesomeIcon icon={faInfoCircle} />
                <span className="link-text">About</span>
            </a>
        </li>
    </ul>
</nav>
  )
}

export default Navbar