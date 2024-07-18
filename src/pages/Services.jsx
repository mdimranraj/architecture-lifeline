
import Service from "../components/Service";
import servicesData from "../data/services.json";
import styles from "../styles/Services.module.css"
const Services = ()=>{
    return(
        <div className={styles.mainContainer}>
            <div className={styles.firstSection}>
                <div className={styles.description}>
                    <q>
                        To give real service, you must add something which
                        cannot be bought or measured with money.
                    </q>
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