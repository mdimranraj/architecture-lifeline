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
          <h3 className={styles.name}>Sahariar Kabir</h3>
          <p className={styles.position}>Frontend Developer</p>
          <div className={styles.socials}>
            <a href="#" className={styles.socialLink}>FB</a>
            <a href="#" className={styles.socialLink}>TW</a>
            <a href="#" className={styles.socialLink}>LI</a>
          </div>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis cursus dui sit amet ligula 
            efficitur, sit amet lacinia massa dictum. Etiam accumsan felis a nunc facilisis, et euismod 
            lacus placerat. Praesent rutrum eget massa a convallis. Nam vitae augue malesuada, accumsan 
            mauris ut, consectetur.
          </p>
          <button className={styles.button}>VIEW PROFILE</button>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
