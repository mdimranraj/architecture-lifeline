
import Service from "../components/Service";
import styles from "../styles/Services.module.css"
const Services = ()=>{
    return(
        <div className={styles.mainContainer}>
            <div className={styles.firstSection}>
                <h3>Our Services</h3>
                <div className={styles.description}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi error dolorum eligendi. Sint commodi, nam laboriosam consequatur facere odio accusamus amet beatae quisquam? Necessitatibus, delectus. Ab distinctio blanditiis iste cum!
                </div>
                <div className={styles.servicesFlex}>
                    <Service title="Landscaping" img="./images/landscaping.png"/>
                    <Service title="Interior Designing" img="./images/interior-designing.png"/>
                    <Service title="Industrial Building" img="./images/industrial-building.png"/>
                    <Service title="Township Planning" img="./images/township-planning.png"/>
                    <Service title="Restoration & Conservation" img="./images/restoration.png"/>
                    <Service title="Traffic Improvement Planning" img="./images/traffic.png"/>
                    <Service title="Project Management Consultancy" img="./images/project-management.png"/>
                </div>
            </div>
            <div className={styles.secondSection}>

            </div>
        </div>
    )
}

export default Services;