import React, { useLayoutEffect, useRef } from 'react';
import styles from './styles.module.css';
import xr1 from '../../asets/FloatAnimation1.png';
import scrollDownIcon from '../../asets/scrollDownIcon.png';
import { useNavigate } from 'react-router-dom';
const ScreenOne = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.screen_one}>
      <h1>Beyond Limitless</h1>
      <div className={styles.imgSec}>
        <img src="https://s3.ajnavidya.com/ajnalens/ajnaxr/floating/Floating_1.gif" alt="" />
      </div>
      <div className={styles.edition}>Enterprise Edition</div>
      <button className={styles.preBtn}>Pre order Closed</button>
      {/* <div className={styles.scrollDi}>
        <p>Scroll Down</p>
        <img src={scrollDownIcon} alt="^" />
      </div> */}
    </section>
  );
};

export default ScreenOne;
