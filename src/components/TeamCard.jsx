
import { useState } from 'react';
import styles from '../styles/TeamCard.module.css'

const TeamCard = ()=>{
    const [isExpanded, setIsExpanded] = useState(false);

    function toggleExpand() {
        setIsExpanded(!isExpanded);
    }
    return(
        <div className={styles.mainContainer}>
            <div className={styles.img}><img src="./images/ceo.jpg" alt="ceo" /></div>
            <div className={`${styles.details} ${isExpanded ? styles.expanded : ''}`}>
                <div className={styles.name}>Arch. Nikhil Kumar</div>
                <div className={styles.designation}>Founder & CEO</div>
                <div className={styles.email}>abc@gmail.com</div>
                <div className={`${styles.about} ${isExpanded ? styles.expanded : styles.collapsed}`} onClick={toggleExpand}>
                With over 9 years of professional experience in the field of architecture, in 2015, I established my own enterprise, Architecture LifeLine. Throughout my career, I have designed a wide variety of architectural projects, including multiplexes, sports pavilions, hospitals, universities, schools, industrial buildings, restoration and conservation projects, landscapes, and bungalows. I also undertake interior designing projects as a passion. <br />
                My practice is well-equipped, and I believe in a methodological approach to adapting to an ever-changing environment within minimal time frames, with careful monitoring of inputs. I love competing for design projects in prestigious competitions, always aiming to merge nature with man-made creations, whether in interiors or exteriors. I strongly believe that one's surroundings reflect and influence personality, and I enjoy experimenting with vibrant colors that exude positivity and are pleasing to the eye.
                </div>
            </div>
        </div>
    );
}
export default TeamCard;