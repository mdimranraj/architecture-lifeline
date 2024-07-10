
import { RiDoubleQuotesR } from "react-icons/ri";
import styles from "../styles/Testimonial.module.css"
const Testimonial = ()=>{
    return(
        <div className={styles.mainContainer}>
            <div className={styles.quoteCircle}>
                <RiDoubleQuotesR className={styles.quoteIcon}/>
            </div>
            <div className={styles.quoteTextContainer}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit corporis expedita facere neque labore nihil provident voluptas cum incidunt excepturi dolorem error dignissimos quos ad architecto, asperiores recusandae qui eligendi?
            </div>
            <div className={styles.author}>
                Imran Raj
            </div>
        </div>
    )
}
export default Testimonial;