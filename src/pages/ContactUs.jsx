
import ContactUsBox from '../components/ContactUsBox.jsx'
import styles from '../styles/ContactUs.module.css'
const ContactUs = ()=>{
    return(
        <div className={styles.mainContainer}>
            <div className={styles.blurContainer}>
                <ContactUsBox />
            </div>
            
        </div>
    )
}
export default ContactUs;