
import styles from "../styles/Service.module.css"
const Service = (props)=>{
    return(
        <div className={styles.mainContainer}>
            <div className={styles.imageDiv}>
                <img src={props.img} alt={props.title} />
            </div>
            <div className={styles.title}>
                {props.title}
            </div>
            <div className={styles.description}>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dolorum odio autem! Impedit quam ullam laudantium delectus.
                </div>
                <button className={styles.btn + " btn btn-success"}>See Example</button>
            </div>
        </div>
    )
}
export default Service;