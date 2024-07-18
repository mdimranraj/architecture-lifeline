
import styles from '../styles/Navbar.module.css'
const Navbar = ()=>{
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
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/services">Services</a>
                    </li>
                    {/* <li className="nav-item dropdown">
                            <div>
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Service
                                </a>
                                <ul className={styles.dropdownMenu + " dropdown-menu"}>
                                    <li><a className="dropdown-item" href="#">Architectural & Specialised Projects</a></li>
                                    <li><a className="dropdown-item" href="#">Landscaping</a></li>
                                    <li><a className="dropdown-item" href="#">Interior designing</a></li>
                                    <li><a className="dropdown-item" href="#">Industrial buildings</a></li>
                                    <li><a className="dropdown-item" href="#">Township planning</a></li>
                                    <li><a className="dropdown-item" href="#">Restoration & Conservation</a></li>
                                    <li><a className="dropdown-item" href="#">Traffic improvement planning</a></li>
                                    <li><a className="dropdown-item" href="#">Project management consultancy</a></li>
                                </ul>
                            </div>
                        </li> */}
                    <li className="nav-item">
                    <a className="nav-link" href="/team">Team</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/contactus">Contact Us</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>

    )
}
export default Navbar;