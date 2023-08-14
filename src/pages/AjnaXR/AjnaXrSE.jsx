import React, { useEffect, useState } from 'react';
import styles from './se.module.css';
import specStyles from './ajnaxr.module.css';
import {
  ButtonWrapper,
  ButtonWrapper2,
  SEText1,
  SEText2,
  SEText3,
  SEText3mini,
  WhiteGradientText,
} from '../../components/styled/common-styled';
import Image1 from '../../assets/AjnaXRSEOne1.svg';
import Image2 from '../../assets/AjnaXRSE2.svg';
import Image3 from '../../assets/AjnaXRSE3.svg';
import SlidingTab from '../../components/SlidingTab/SlidingTab';
import ScannerImg from '../../assets/ScannerImg.png';
import { SE_Specifications } from '../../constants/constants';
import { useNavigate } from 'react-router';
import flipUp from '../../assets/cartView/flipUp.jpg';

export const AjnaXrSE = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(false);

  // const [isPro, setIsPro] = useState(true);
  const [isSpecification, setSpecification] = useState(false);

  const scrollToSection = (sectionId) => {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOverview = () => {
    scrollToSection('overview');
    setSpecification(false);
  };

  const handleSpecification = () => {
    scrollToSection('product-specification');
    setSpecification(true);
  };

  return (
    <div className={styles.container}>
      {/* subNav */}
      <div className={specStyles.subNav}>
        <div className={specStyles.subNavSec1}>
          <div className={specStyles.subNav1}>
            <div className={specStyles.xrTitle}>
              <span className="fw-300">Ajna</span>
              <span className="fw-700">XR</span>
            </div>

            <div className={specStyles.switchTab}>
              <div
                onClick={() => {
                  navigate('/ajnaxr-PRO');
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                  });
                }}
                className={specStyles.tabElement1}
                style={{ background: 'transparent' }}
              >
                Pro
              </div>
              <div
                onClick={() => {
                  navigate('/ajnaxr-SE');
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                  });
                }}
                className={specStyles.tabElement2}
                style={{ background: '#3c3c3d' }}
              >
                SE
              </div>
            </div>
          </div>
          {/* overview and specification */}
          <div className={`d-none d-sm-flex gap-2 mx-3 fw-300`}>
            <div onClick={handleOverview} className={`px-2 ${specStyles.activeBtn}`}>
              Overview <div className={!isSpecification && specStyles.borderDiv}></div>
            </div>
            <div onClick={handleSpecification}>
              <div className={`px-2 ${specStyles.activeBtn}`}>
                Specifications <div className={isSpecification && specStyles.borderDiv}></div>
              </div>
            </div>
          </div>
        </div>
        {/* order Button */}
        <ButtonWrapper className="d-none d-sm-flex justify-content-center" onClick={() => navigate('/cart/SE')}>
          Order Now
        </ButtonWrapper>
      </div>
      {/* section 1 */}
      <section id="overview">
        <div className={styles.section1}>
          <ButtonWrapper2>AjnaXR SE</ButtonWrapper2>
          <SEText1>endless power</SEText1>
          <img className={styles.image1} src={Image1} alt="" />
          <div className={styles.orderBtn}>
            <ButtonWrapper onClick={() => navigate('/cart/SE')}>Order Now</ButtonWrapper>
          </div>

          {/* lightweighted */}

          <div className={styles.lightWeight}>
            <SEText2>Light Weighted</SEText2>
            <span className={styles.weight}>350g</span>
          </div>
          <img className={styles.image2} src={Image2} alt="alt" />

          {/* flip */}

          <SEText3>brings the power to flip</SEText3>
          <SEText3mini>switch between the virtual and the real world</SEText3mini>
          {!activeTab ? (
            <img className={styles.image3} src={flipUp} alt="img" />
          ) : (
            <img className={styles.image3} src={Image3} alt="img" />
          )}

          <div>
            <SlidingTab activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>

          {/* imageboxes */}

          <div className={styles.imageBox1}>
            <h4 className={styles.box1Text}>Resolution that brings a clear vision</h4>
          </div>

          <div className={styles.imageBox2}>
            <h4 className={styles.box1Text}>Combining elegance and sophistication</h4>
          </div>

          <div className={styles.BoxFlex1}>
            {/* Battery */}
            <div className={styles.BatteryBox}>
              <h4 className={styles.BatteryText1}>Battery life to stay with you a little longer</h4>
              <h4 className={styles.BatteryText2}>2hrs+</h4>
            </div>
            {/* security */}
            <div className={styles.securityBox}>
              <h4 className={styles.securityText}>
                <span className={styles.secBoldText}>Security</span> is our first priority
              </h4>
            </div>
          </div>

          <div className={styles.BoxFlex1}>
            {/* Wifi */}
            <div className={styles.wifiBox}>
              <h4 className={styles.wifiText1}>
                Stream <br /> <span className={styles.wifiText2}>wire-free</span>
              </h4>
            </div>
            {/* security */}
            <div className={styles.pcvrBox}>
              <h4 className={styles.pcvrText}>
                Extend <br /> to <span className={styles.pcvrBold}>PCVR</span>
              </h4>
            </div>
          </div>

          {/* scanner */}
          {/* <h6 className={styles.scanHeading}>Check out what AjnaXR SE looks like</h6>
          <img className={styles.scannerImg} src={ScannerImg} alt="scan" />
          <div className={styles.scaninfo}>Scan to see AjnaXR SE in AR mode</div> */}
        </div>
      </section>
      {/* product Specification */}
      <section id="product-specification" className={styles.specification}>
        <div className={specStyles.specification}>
          {/* left */}
          <div className={specStyles.leftDiv}>
            <h1 className={specStyles.SpecTitle}>Product Specifications</h1>
            <div className={specStyles.smProduct}>Product</div>
            <div className="d-flex align-items-center py-sm-0 py-lg-2 ">
              <div className={specStyles.xrTitle2} style={{ fontSize: '20px' }}>
                <span className="fw-300">Ajna</span>
                <span className="fw-700">XR</span>
              </div>
              <div
                className="d-flex align-items-center rounded-pill px-3 py-1 mx-1 text-white font-family-cairo font-size-14 font-weight-300 line-height-22 letter-spacing-1-4px text-uppercase"
                style={{ background: '#18191B' }}
              >
                SE
              </div>
            </div>
          </div>
          {/* right */}
          <div className="col-lg-8 col-sm-12 px-1">
            {SE_Specifications.map((item, index) => (
              <div
                className={specStyles.spFlex}
                style={{ borderBottom: index === SE_Specifications.length - 1 ? 'none' : '' }}
              >
                <div className=" d-flex align-items-center col-lg-6 col-sm-4 px-2">
                  <h3 className={specStyles.specSubtitle}>{item.title}</h3>
                </div>
                <div className={specStyles.specColumn}>
                  {item?.items?.map((elem, index) => (
                    <li key={index} className={`${specStyles.spListItem} fw-300`}>
                      {elem}
                    </li>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className={styles.takeME}>
        <WhiteGradientText>Create Experiences for Ajnaxr se</WhiteGradientText>
        <ButtonWrapper className={styles.takeMEBtn}>Take me there</ButtonWrapper>
      </div>
    </div>
  );
};
