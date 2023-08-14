import React from 'react';
import styles from './ajnaxr.module.css';

import feature1 from '../../../asets/feature1.png';
import feature2 from '../../../asets/feature2.png';
import feature3 from '../../../asets/feature3.png';
import controllers from '../../../asets/controllers.png';
import ajnaVidyaLogo from '../../../asets/ajnavidyaLogo.svg';
import LauncherImg from '../../../asets/AjnaVidyaLauncherUI.png';
import boxItems from '../../../asets/boxItems.png';

const AjnaXR = () => {
  const specifications = [
    {
      name: 'Processors',
      xrSpecifcns: ['Qualcomm XR2', '8 Core 64 bit', '2.84GHz', '7nm technology'],
      newXrSpesfcns: ['Qualcomm XR2', '8 Core 64 bit', '2.84GHz', '7nm technology'],
    },
    {
      name: 'Storage',
      xrSpecifcns: ['8GB+128GB', '8GB+256GB'],
      newXrSpesfcns: ['8GB+128GB', '8GB+256GB'],
    },
    {
      name: 'Wireless connection',
      xrSpecifcns: ['PC-VR cable Support', 'Wireless Streaming Support', 'Wi-Fi 6', 'Bluetooth'],
      newXrSpesfcns: ['PC-VR cable Support', 'Wireless Streaming Support', 'Wi-Fi 6', 'Bluetooth'],
    },
    {
      name: 'Display',
      xrSpecifcns: ['Resolution 4.5K（2280*2280）', 'Refresh Rate 90Hz'],
      newXrSpesfcns: ['Resolution 4.5K（2280*2280）', 'Refresh Rate 90Hz'],
    },
    {
      name: 'Optics',
      xrSpecifcns: ['Pancake Lens'],
      newXrSpesfcns: ['Pancake Lens'],
    },
  ];
  return (
    <section className={styles.sectionContainer}>
      {/* Features */}
      <div className={styles.feature1}>
        <h3 className={styles.featureContainerHeading}>Interactions that feel natural</h3>
        <div className={styles.featureContainer}>
          <div className={styles.featureImgContainer1}>
            <img className={styles.featureImg} src={feature1} alt="Mixed reality headset with eye tracking" />
            <p className={styles.featureHeading}>EYE-TRACKING</p>
            <p className={styles.featureDescription}>
              Raising the bar with seamless eye interaction - your focus, your move
            </p>
          </div>
          <div className={styles.featureImgContainer1}>
            <img className={styles.featureImg} src={feature2} alt="Mixed reality glasses with hand tracking" />
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
        <img className={styles.featureImg3} src={feature3} alt="Most advanced haptic gloves" />
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
        <button className={styles.exploreButton}>Explore More</button>
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
      <div className={styles.specifications}>
        {/* Heading */}
        <p className={styles.spTitle}>Product Specifications</p>
        {/* table heading */}
        <div className={styles.tableHeading}>
          <div className={styles.productHeading}>Product</div>

          <div className={styles.innerDivs}>
            <div className={styles.ajnaXR1}>
              Ajna<b>XR</b>
            </div>

            <div className={styles.innerMost}>
              <div className={styles.ajnaXR2}>
                Ajna <b>XR</b>
              </div>
              <div className={styles.enterprise}>Enterprise Edition</div>
            </div>
          </div>
        </div>

        {/* Specification rows */}

        {/* map row */}
        {specifications.map((elem) => (
          <div className={styles.sprow}>
            <div className={styles.spHeading}>{elem.name}</div>

            <div className={styles.spInnerDivs}>
              <div className={styles.spOne}>
                {elem.xrSpecifcns.map((item) => (
                  <p>{item}</p>
                ))}
              </div>

              <div className={styles.spTwo}>
                {elem.newXrSpesfcns.map((item) => (
                  <p>{item} </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Preorder */}
      <div className={styles.preOrder}>
        <h1 className={styles.preOrderHeading}>JOIN THE WAITING LIST</h1>
        <button className={styles.preOrderButton}>Pre-Order Now</button>
      </div>
    </section>
  );
};

export default AjnaXR;
