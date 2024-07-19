
import { RiDoubleQuotesR } from "react-icons/ri";
import styles from "../styles/Testimonial.module.css"
import { useState } from "react";
const Testimonial = ({data})=>{
    const [isExpanded, setIsExpanded] = useState(false);

    function toggleExpand() {
        setIsExpanded(!isExpanded);
    }
    return(
        <div className={`${styles.mainContainer}`}>
            <div className={styles.quoteCircle}>
                <RiDoubleQuotesR className={styles.quoteIcon}/>
            </div>
            <div className={`${styles.quoteTextContainer} ${isExpanded ? styles.expanded : styles.collapsed}`} onClick={toggleExpand}>
                {
                    data.description.map(each => {
                        return <p>{each}</p>
                    })
                }
            </div>
            <div className={styles.author}>
                {data.name}
            </div>
        </div>
    )
}
export default Testimonial;