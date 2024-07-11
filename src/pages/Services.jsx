
import Service from "../components/Service";
import servicesData from "../data/services.json";
import styles from "../styles/Services.module.css"
const Services = ()=>{
    return(
        <div className={styles.mainContainer}>
            <div className={styles.firstSection}>
                <h3>Our Services</h3>
                <div className={styles.description}>
                    Our dedicated team blends creativity with technical excellence to deliver bespoke designs tailored to your needs. 
                    From concept to completion, we ensure every detail is meticulously crafted, bringing your dream spaces to life with unmatched quality and precision.
                </div>
                <div className={styles.servicesFlex}>
                    {
                        servicesData.map((service)=>{
                            return <Service key={service.id} data={service}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Services;