import React from 'react';
import styles from './hero.module.css';
import Banner from './Banner.png';
const HeroBanner = () => {
  return (
    <section>
      <div className={styles.Banner}>
        <img src={Banner} alt="Bannerimg" />
      </div>
    </section>
  );
};

export default HeroBanner;
