
import { NavLink, useLocation } from 'react-router-dom';
import styles from '../styles/Navbar.module.css'
const Navbar = ()=>{

    const location = useLocation();
    const currentPath = location.pathname;

    return(
        <nav className={styles.navbar + " navbar navbar-expand-lg bg-body-tertiary"}>
            <div className="container-fluid">
                <a className={styles.logoLink + " navbar-brand"} href="/">
                    <img className={styles.logo} src="./images/logo.png" alt="Logo" />
                    <div>Architecture Lifeline</div>
                </a>
                <button className={styles.hamburger + " navbar-toggler"} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className={styles.navbarNav + " collapse navbar-collapse"} id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <NavLink className={`nav-link ${currentPath === '/' ? styles.activeLink : ''}`} aria-current="page" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={`nav-link ${currentPath === '/services' ? styles.activeLink : ''}`} to="/services">Services</NavLink>
                    </li>
                    
                    <li className="nav-item">
                    <NavLink className={`nav-link ${currentPath === '/team' ? styles.activeLink : ''}`} to="/team" >Team</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className={`nav-link ${currentPath === '/contactus' ? styles.activeLink : ''}`} to="/contactus">Contact Us</NavLink>
                    </li>
                </ul>
                </div>
            </div>
        </nav>

    )
}
export default Navbar;