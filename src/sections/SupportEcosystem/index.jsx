import React from 'react';
import { Reveal } from 'react-awesome-reveal';
import styles from './support.module.css';

import support1 from '../../asets/supports/support1.png';
import support2 from '../../asets/supports/support2.png';
import support3 from '../../asets/supports/support3.png';
import support4 from '../../asets/supports/support4.png';
import support5 from '../../asets/supports/support5.png';
import support6 from '../../asets/supports/support6.png';
import support7 from '../../asets/supports/support7.png';
import support8 from '../../asets/supports/support8.png';

const Support = () => {
  return (
    <div className={styles.supportContainer}>
      <p className={styles.supportHeading1}>PARTNERS</p>
      <h1 className={styles.supportHeading2}>Support Ecosystem</h1>
      <div className={styles.supportLogos}>
        <Reveal keyframes={styles.fadeInUp} delay={300} duration={800} triggerOnce>
          <div className={styles.supportLogo}>
            <img src={support1} alt="" />
          </div>
          <div className={styles.supportLogo}>
            <img src={support2} alt="" />
          </div>
          <div className={styles.supportLogo}>
            <img src={support3} alt="" />
          </div>
          <div className={styles.supportLogo}>
            <img src={support4} alt="" />
          </div>
          <div className={styles.supportLogo}>
            <img src={support5} alt="" />
          </div>
          <div className={styles.supportLogo}>
            <img src={support6} alt="" />
          </div>
          <div className={styles.supportLogo}>
            <img src={support7} alt="" />
          </div>
          <div className={styles.supportLogo}>
            <img src={support8} alt="" />
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Support;
