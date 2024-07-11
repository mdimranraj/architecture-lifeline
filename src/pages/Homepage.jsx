import Testimonial from "../components/Testimonial";
import styles from "../styles/Homepage.module.css";
const Homepage = ()=>{
    return(
        <>
            <div className={styles.backgroundSection}>
                <img src="/images/gray-block-structure.jpg" alt="Background-Image"/>
            </div>
            <div className={styles.mainContainer}>
                <div className={styles.firstSection}>
                    <h3>Modern Design, Asthetic Feel</h3>
                    <h5>We Make Your Dream, A Reality</h5>
                </div>
                <div className={styles.secondSection}>
                    <h3>What do we do ?</h3>
                    <div className={styles.aboutVideoFlex}>
                        
                        <div className={styles.about}>
                            
                            <div className={styles.content}>
                            At Architecture Lifeline, we specialise in designing and constructing a wide array of architectural projects, including :
                            <ul>
                                <li>Landscaping</li>
                                <li>Interior designing</li>
                                <li>Industrial buildings</li>
                                <li>Township planning</li>
                                <li>Restoration & Conservation</li>
                                <li>Traffic improvement planning</li>
                                <li>Project management consultancy</li>
                            </ul>
                            We pride ourselves on creating spaces that are not only aesthetically pleasing but also highly functional, meeting the diverse needs of our clients.
                            Our state-of-the-art tools and adaptable approach ensure we manage changes seamlessly and complete projects efficiently.
                            <br /><br />
                            Let us create your dream space. From modern hospitals and cozy bungalows to residential complexes and other diverse buildings.
                            </div>

                        </div>
                        <div className={styles.aboutImg}>
                            <video src="./images/video.mp4" autoPlay loop muted></video>
                        </div>
                    </div>       
                </div>
                <div className={styles.thirdSection}>
                        <h3>What do our Customers say ?</h3>
                        <div className={styles.review}>We value every feedback. Afterall your satisfaction is our priority. </div>
                        <div className={styles.testimonialContainer}>
                            <Testimonial/>
                            <Testimonial />
                            <Testimonial />
                        </div>         
                </div>
        </div>
        </>
        
    )
};

export default Homepage;