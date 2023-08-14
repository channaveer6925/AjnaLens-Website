import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './styles.module.css';
import ajnaXR2 from '../assets/images/1.png';
import ajnaXR3 from '../assets/images/2.png';
import qualcommXr2 from '../assets/images/QualcommXR2.png';
import locked from '../assets/images/LockedState.png';
import Section6 from '../sections/Section6';
import { Link } from 'react-router-dom';
AOS.init();
const XRProductPhone = () => {
  return (
    <div className={styles.container}>
      <div className={styles.productSec1}>
        <h1>BEYOND LIMITLESS</h1>
        <div
          data-aos="fade-in"
          // data-aos-offset="100"
          // data-aos-delay="100"
          data-aos-duration="1500"
          data-aos-easing="ease-in"
          // data-aos-mirror="true"
          // data-aos-once="false"
          data-aos-anchor-placement="top-center"
          className={styles.imgSec}
        >
          <img src="https://s3.ajnavidya.com/ajnalens/ajnaxr/floating/Floating_1.gif" alt="" />
        </div>
        <div className={styles.edition}>Enterprise Edition</div>
        <Link to="/prelaunch">
          <button className={styles.preorderBtn}>Pre order Closed</button>
        </Link>
      </div>
      <div className={styles.productSec2}>
        <div className={styles.productDetails}>
          <h1>An Essential Tool to Master Skills Faster</h1>
          <p>AjnaXR,World's Most Advanced True Mixed Reality Headset</p>
        </div>
        <div
          className={styles.imgSec}
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-duration="900"
          data-aos-easing="ease-in-out"
          style={{border:"1px solid red"}}
        >
          <img src={ajnaXR2} alt="" />
        </div>
      </div>
      <div className={styles.productSec3}>
        <div className={styles.productDetails}>
          <h1>Experience reality like never before</h1>
          <p>Ultra Low Lantency | High Resolution | Lightweight | Colored Pass Through</p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1000"
          data-aos-easing="ease-in"
          className={styles.imgSec}
        >
          <img src={ajnaXR3} alt="" />
        </div>
      </div>
      <div className={styles.productSec4}>
        <div className={styles.productDetails}>
          <h3>HUMAN-FIRST DESIGN</h3>
          <h1>
            <span>Lighter</span> than the lightest
          </h1>
        </div>
        <div
          data-aos="fade-in"
          data-aos-duration="1500"
          data-aos-easing="ease-in"
          data-aos-anchor-placement="top-center"
          className={styles.imgSec}
        >
          <img src="https://s3.ajnavidya.com/ajnalens/ajnaxr/floating/Floating_2.gif" alt="" />
        </div>
        <div className={styles.weightDesc}>
          <p>
            Weight <span className={styles.weight}>~ 400g</span>
          </p>
        </div>
      </div>
      <div className={styles.productSec5}>
        <div className={styles.productDetails}>
          <h1>A Premimum Comfort</h1>
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1000"
          data-aos-easing="ease-in"
          className={styles.imgSec}
        >
          <img src="https://s3.ajnavidya.com/ajnalens/ajnaxr/floating/Eye%20pad%20detach-720.gif" alt="" />
        </div>
        <div className={styles.productDetails}>
          <h1>Crafted to fit naturally</h1>
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1000"
          data-aos-easing="ease-in"
          className={styles.imgSec}
        >
          <img src="https://s3.ajnavidya.com/ajnalens/ajnaxr/floating/scaleajnaxrback%201080.gif" alt="" />
        </div>
      </div>

      <div className={styles.productSec6}>
        <div className={styles.productDetails}>
          <h1>Incredible capabilities packed in surprisingly small space</h1>
        </div>
        <div className={styles.hrRotation}>
          <div className={styles.ticker_list}>
            <li>
              Better <span className={styles.resBlue}>Display</span>
            </li>
            <li>
              Higher <span className={styles.resBlue}>Resolution</span>
            </li>
            <li>
              Improved <span className={styles.resBlue}>Clarity</span>
            </li>
            <li>and much more!</li>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1000"
          data-aos-easing="ease-in"
          className={styles.imgSec}
        >
          <img src="https://s3.ajnavidya.com/ajnalens/ajnaxr/floating/diisect%201080.gif" alt="" />
        </div>
      </div>
      {/* bouncy section */}
      <div className={styles.productSec9}></div>

      <div className={styles.productSec10}>
        <h3>Adaptable to Your Eyes</h3>
        <div className={styles.productDetails}>
          <h1>IPD Adjustment</h1>
          <p>
            64% of the adults wear prescription glasses. Wearing headsets is uncomfortable. The world needs headsets
            that are user-friendly. One that they can wear, without adding an extra layer
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-duration="1000"
          data-aos-easing="ease-in"
          className={styles.imgSec}
        >
          <img src="https://s3.ajnavidya.com/ajnalens/ajnaxr/floating/IPD.gif" alt="ajnaxr-floating img" />
        </div>
      </div>
      <div className={styles.productSec11}>
        <video autoPlay loop muted>
          <source src="https://s3.ajnavidya.com/ajnalens/ajnaxr/ColourPassthroughVideo.mp4" type="video/mp4" />
        </video>
        <img src={qualcommXr2} alt="" />
      </div>
      <div className={styles.productSec12}>
        <div className={styles.productDetails}>
          <h1>
            Your Data is <span className={styles.safe}>SAFE</span> with us
          </h1>
          <p>
            Data privacy is not something you have to ask. It is yours and you have sole rights over it. We know, we
            understand and we protect it at the highest level possible
          </p>
          <h4>No Social Sign-in Required | No Personal Data Shared</h4>
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1000"
          data-aos-easing="ease-in"
          className={styles.imgSec}
        >
          <img src={locked} alt="" />
        </div>
      </div>
      <div className={styles.staticSec}>
        <Section6 />
      </div>
    </div>
  );
};

export default XRProductPhone;
