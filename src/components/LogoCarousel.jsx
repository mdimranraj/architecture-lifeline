import React, { useEffect, useRef } from 'react';
import styles from '../styles/LogoCarousel.module.css';

const LogoCarousel = ({ collabData }) => {
  const trackRef1 = useRef(null);
  const trackRef2 = useRef(null);

  useEffect(() => {
    const track1 = trackRef1.current;
    const track2 = trackRef2.current;
    const width1 = track1.scrollWidth / 2;
    const width2 = track2.scrollWidth / 2;
    track1.style.animationDuration = `${width1 / 30}s`; // Adjust speed
    track2.style.animationDuration = `${width2 / 30}s`; // Adjust speed
  }, []);

  const half = Math.ceil(collabData.length / 2);
  const firstHalf = collabData.slice(0, half);
  const secondHalf = collabData.slice(half);

  return (
    <div className={styles.container}>
      <div className={styles.topCarousel}>
        <div className={styles.track} ref={trackRef1}>
          {firstHalf.concat(firstHalf).map((data, index) => (
            <div key={index} className={styles.logo}>
              <img src={data.logo} alt={data.name} />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.bottomCarousel}>
        <div className={styles.trackReverse} ref={trackRef2}>
          {secondHalf.concat(secondHalf).map((data, index) => (
            <div key={index} className={styles.logo}>
              <img src={data.logo} alt={data.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;
