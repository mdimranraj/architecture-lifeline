import styles from "../styles/Footer.module.css";
import { AiFillInstagram, AiFillMail, AiFillPhone,CiLocationOn } from "react-icons/ai";
const Footer = ()=>{
    return(
        <div className={styles.mainContainer}>
            <div className={styles.leftSide}>
                <img className={styles.logo} src="./images/logo.png" alt="logo" />
                <div>
                   <div>  Co-Working Space, Ortus-III <br /> near Lakshmi Naryanaswamy Temple,<br /> Amruthahalli Village, Yelahanka Hobli,<br /> Bengaluru North Taluk-560092 </div>
                </div>
            </div>
            <div className={styles.rightSide}>
                <table>
                    <tr>
                        <a href="https://www.instagram.com/architecture_lifeline"  target="_blank" rel="noopener noreferrer">
                            <td><AiFillInstagram/></td>
                            <td>architecture_lifeline</td>
                        </a>
                    </tr>
                    <tr>
                        <a href="mailto:architecturelifeline@gmail.com">
                            <td><AiFillMail/></td>
                            <td>architecturelifeline@gmail.com</td>
                        </a>
                    </tr>
                    <tr>
                        <a href="https://wa.me/9672179298" target="_blank" rel="noopener noreferrer">
                            <td><AiFillPhone/></td>
                            <td>+91-9672179298</td>
                        </a>
                    </tr>
                </table>
            </div>
            <div className={styles.copyright}> &copy; Architecture Lifeline {2000 + Math.round(Date.now()/(1000*60*60*24*365) - 1 - 30)}. All rights reserved.</div> 
        </div>
    )
}

export default Footer;