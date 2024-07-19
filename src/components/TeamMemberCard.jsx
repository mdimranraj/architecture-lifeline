import React from 'react';
import styles from '../styles/TeamMemberCard.module.css';

const TeamMemberCard = () => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <div className={styles.imageFrame}>
            <img src="./images/ceo.png" alt="Team Member" className={styles.image}/>
          </div>
        </div>
        <div className={styles.details}>
          <h3 className={styles.name}>Arch. Nikhil Kumar</h3>
          <p className={styles.position}>Founder & CEO</p>
          <div className={styles.socials}>
            <a href="mailto:architecturelifeline@gmail.com" className={styles.socialLink}><img src="./images/gmail.png" alt="gmail" /></a>
            <a href="https://wa.me/9672179298" target="_blank" rel="noopener noreferrer" className={styles.socialLink}><img src="./images/whatsapp.png" alt="whatsapp" /></a>
            <a href="https://www.instagram.com/architecture_lifeline?igsh=MThjN2phaTNlZG5vcA==" target="_blank" rel="noopener noreferrer" className={styles.socialLink}><img src="./images/instagram.png" alt="instagram" /></a>
          </div>
          <p className={styles.description}>
              <span>With over 9 years of professional experience in the field of architecture, in 2015, I established my own enterprise, Architecture LifeLine. Throughout my career, I have designed a wide variety of architectural projects, including multiplexes, sports pavilions, hospitals, universities, schools, industrial buildings, restoration and conservation projects, landscapes, and bungalows. I also undertake interior designing projects as a passion. </span>
              <span>My practice is well-equipped, and I believe in a methodological approach to adapting to an ever-changing environment within minimal time frames, with careful monitoring of inputs. I love competing for design projects in prestigious competitions, always aiming to merge nature with man-made creations, whether in interiors or exteriors. I strongly believe that one's surroundings reflect and influence personality, and I enjoy experimenting with vibrant colors that exude positivity and are pleasing to the eye.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
