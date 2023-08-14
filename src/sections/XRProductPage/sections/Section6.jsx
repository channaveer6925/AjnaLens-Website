import React from 'react';
import styles from './ajnaxr.module.css';
import feature1 from '../assets/images/feature1.png';
import feature2 from '../assets/images/feature2.png';
import feature3 from '../assets/images/feature3.png';
import controllers from '../assets/images/controllers.png';
import ajnaVidyaLogo from '../assets/images/ajnavidyaLogo.svg';
import LauncherImg from '../assets/images/AjnaVidyaLauncherUI.png';
import boxItems from '../assets/images/boxItems.png';

import Specifications from '../../Specification/index';
import { useNavigate } from 'react-router-dom';

const Section6 = () => {
  const navigate = useNavigate();
  return (
    <section className={styles.sectionContainer}>
      {/* Features */}
      <div className={styles.feature1}>
        <h3 className={styles.featureContainerHeading}>Interactions that feel natural</h3>
        <div className={styles.featureContainer}>
          <div className={styles.featureImgContainer1}>
            {/* <img className={styles.featureImg} src={feature1} alt="" /> */}
            <video className={styles.eyeTracking} autoPlay loop muted>
              <source src="https://s3.ajnavidya.com/ajnalens/ajnaxr/eyeTrack%20mp4.mp4" type="video/mp4" />
            </video>
            <p className={styles.featureHeading}>EYE-TRACKING</p>
            <p className={styles.featureDescription}>
              Raising the bar with seamless eye interaction - your focus, your move
            </p>
          </div>
          <div className={styles.featureImgContainer1}>
            <img className={styles.featureImg} src="https://s3.ajnavidya.com/ajnalens/ajnaxr/handTracking.png" alt="" />
            <p className={styles.featureHeading}>HAND-TRACKING</p>
            <p className={styles.featureDescription}>Interact the way you do in real life</p>
          </div>
        </div>
      </div>
      <div className={styles.featureImgContainer2}>
        <div>
          <p className={styles.featureHeading}>HAPTIC GLOVES</p>
          <p className={styles.featureDescription}>The power of real immersion lies within you</p>
        </div>
        <img className={styles.featureImg3} src={feature3} alt="" />
      </div>
      {/* Controllers */}
      <div className={styles.controllersContainer}>
        <img className={styles.controllerImg} src={controllers} alt="" />
        <p className={styles.controllerHeading}>Controllers</p>
      </div>
      {/* Ajnavidya section */}
      <div className={styles.ajnavidyaContainer}>
        <div className={styles.ajnavidyaContent}>
          <div className={styles.vidyaLogoContainer}>
            <img className={styles.ajnaVidyaLogo} src={ajnaVidyaLogo} alt="" />
            <h1>AjnaVidya</h1>
          </div>
          <h1>Industry's first all inclusive XR ecosystem</h1>
          <p>Powering the future of learning & human development</p>
        </div>
        <a href="https://ajnavidya.com" target="_blank">
          <button className={styles.exploreButton}>Explore More</button>
        </a>
        <div className={styles.launcherContainer}>
          <img className={styles.launcherImg} src={LauncherImg} alt="" />
        </div>
      </div>
      {/* In the box */}
      <div className={styles.boxContainer}>
        <p className={styles.boxHeading}>What's in the Box</p>
        <img className={styles.boxItemImg} src={boxItems} alt="" />
      </div>
      {/* Product sepecification */}
      <Specifications />
      {/* Preorder */}
      <div className={styles.preOrder}>
        <h1 className={styles.preOrderHeading}>JOIN THE WAITING LIST</h1>
        <button className={styles.preOrderButton}>Pre-Order Closed</button>
      </div>
    </section>
  );
};

export default Section6;
