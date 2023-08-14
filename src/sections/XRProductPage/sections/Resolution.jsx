import React from 'react';
import styles from './resolution.module.css';
import headset from '../assets/images/AjnaXr.png';

const Resolution = () => {
  return (
    <div>
      <div className={styles.container}>
        <p className={styles.p1}>Setting the standards, Raising the bar</p>
        <div className={styles.resBody}>
          <div className={styles.p2}>
            <p className={styles.fiveK}>5K</p>
            <p className={styles.resolution}>Resolution</p>
          </div>
          <div className={styles.p3}>
            <div className={styles.p3Comp}>
              <p className={styles.p3Head}>2280 x 2280</p>
              <p className={styles.p3Bottom}>Resolution per eye</p>
            </div>
            <div className={styles.p3Comp}>
              <p className={styles.p3Head}>1512</p>
              <p className={styles.p3Bottom}>PPI (Pixel Per Inch)</p>
            </div>
            <div className={styles.p3Comp}>
              <p className={styles.p3Head}>24</p>
              <p className={styles.p3Bottom}>PPD (Pixel Per Degree)</p>
            </div>
          </div>
        </div>
        <div className={styles.image1}>
          <img src={headset} alt="headset" />
        </div>
      </div>
    </div>
  );
};
export default Resolution;
