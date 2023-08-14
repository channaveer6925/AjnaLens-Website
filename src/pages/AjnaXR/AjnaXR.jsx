import React, { useEffect, useState } from 'react';
import styles from './ajnaxr.module.css';
import {
  ButtonWrapper,
  ButtonWrapper2,
  DarkText,
  DiopterTextsm,
  FeatureWrapper,
  FeatureWrapperText,
  PlatformText,
  TextBig,
  TextMD,
  WhiteGradientText,
} from '../../components/styled/common-styled';
import xrImage1 from '../../assets/XRImage1.png';
import xrImage2 from '../../assets/PrimiumComfirt.png';
import xrImage3 from '../../assets/XRImg3.svg';
import cesImg from '../../assets/CES.svg';
import GlobeChair from '../../assets/Globe.png';
import D1 from '../../assets/Diopter Adjustment (1).png';
import D2 from '../../assets/Diopter Adjustment 2.png';
import HandsImg from '../../assets/HandsImg.png';
import InBox from '../../assets/InBox.svg';
import ScannerImg from '../../assets/ScannerImg.png';
import { Specifications, featureData, miniFeatures } from '../../constants/constants';
import { FooterVersion2 } from '../../components/Footer-v-2.0/FooterVersion2';
import { AjnaXrSE } from './AjnaXrSE';
import { useNavigate } from 'react-router-dom';

export const AjnaXR = () => {
  // const [isPro, setIsPro] = useState(true);
  const [isSpecification, setSpecification] = useState(false);
  const navigate = useNavigate();

  const videoRef = React.useRef(null);

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

  useEffect(() => {
    const play = () => {
      videoRef.current.play();
    };
    play();
  }, []);

  return (
    <div className={styles.container}>
      {/* subNav */}
      <div className={styles.subNav}>
        <div className={styles.subNavSec1}>
          <div className={styles.subNav1}>
            <div className={styles.xrTitle}>
              <span className="fw-300">Ajna</span>
              <span className="fw-700">XR</span>
            </div>

            <div className={styles.switchTab}>
              <div
                onClick={() => {
                  navigate('/ajnaxr-PRO');
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                  });
                }}
                className={styles.tabElement1}
                style={{ background: '#3c3c3d' }}
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
                className={styles.tabElement2}
                style={{ background: 'transparent' }}
              >
                SE
              </div>
            </div>
          </div>
          {/* overview and specification */}
          <div className={`d-none d-sm-flex gap-2 mx-3 fw-300`}>
            <div onClick={handleOverview} className={`px-2 ${styles.activeBtn}`}>
              Overview <div className={!isSpecification && styles.borderDiv}></div>
            </div>
            <div onClick={handleSpecification}>
              <div className={`px-2 ${styles.activeBtn}`}>
                Specifications <div className={isSpecification && styles.borderDiv}></div>
              </div>
            </div>
          </div>
        </div>
        {/* order Button */}
        <ButtonWrapper className="d-none d-sm-flex justify-content-center" onClick={() => navigate('/cart/PRO')}>
          Order Now
        </ButtonWrapper>
      </div>

      {/* Beyond Limitless */}
      <section id="overview">
        <div className={styles.section1}>
          <div className="d-flex flex-column h-auto">
            <div className={styles.textBox}>
              <ButtonWrapper2>AjnaXR Pro</ButtonWrapper2>
              <TextBig className={styles.BigT1}>Beyond</TextBig>
              <TextBig className={styles.BigT2}>Limitless</TextBig>
              <ButtonWrapper onClick={() => navigate('/cart/PRO')}>Order Now</ButtonWrapper>
            </div>
          </div>
          <img className={styles.image1Container} src={xrImage1} alt="img" />
          <img className={styles.image1ContainerMini} src={xrImage1} alt="img" />
        </div>
      </section>

      {/* MR Headset Section */}
      {/* <div className={styles.section2}> */}
      <div className={styles.section2flex}>
        <div className={styles.sec2Elem}>
          <div className={styles.sec2ElemTextBox}>
            <div className={styles.smallText}>Step into the world of unlimited possibilities with</div>
            <h1 className={styles.BigText}>Industry’s Most Advanced Mixed Reality Headset</h1>
            <img className={styles.cesImg} src={cesImg} alt="img" />
          </div>
        </div>
        <div className={styles.sec2Elem}>
          {/* <video
            ref={videoRef}
            style={{ width: '100%', objectFit: 'fill' }}
            src={'https://cdn.ajnavidya.com/ajnavidya/Levels/Level6.mp4'}
            autoPlay
            loop
          /> */}
          <video ref={videoRef} style={{ width: '100%', objectFit: 'fill' }} autoPlay controls>
            <source src={'https://cdn.ajnavidya.com/ajnavidya/Levels/Level6.mp4'} type="video/mp4" />
            {/* Add additional source elements for different video formats */}
          </video>
        </div>
      </div>

      <div className="py-lg-0 py-sm-2">
        <div className={styles.ExpWhite}>
          <WhiteGradientText>Experience reality like never before</WhiteGradientText>
        </div>
        <div className={styles.featureFlex}>
          {featureData.map((item, index) => (
            <FeatureWrapper key={index}>
              <img src={item.imgUrl} alt="img" />
              <FeatureWrapperText>{item.name}</FeatureWrapperText>
            </FeatureWrapper>
          ))}
        </div>
      </div>

      {/* section 3 */}

      <div className={styles.section3}>
        <DarkText style={{ textAlign: 'center' }}>Crafted to fit naturally</DarkText>
        <WhiteGradientText>A Premium Comfort</WhiteGradientText>
        <img className={styles.xrImage2} src={xrImage2} alt="img" />
      </div>

      {/* section 4 */}

      <div className={styles.section4}>
        <div className={styles.incredibleText}>
          <WhiteGradientText>INCREDIBLE CAPABILITIES PACKED IN SURPRISING COMPACT FORM FACTOR</WhiteGradientText>
        </div>
        <img className={styles.xrImage3} src={xrImage3} alt="img3" />
      </div>

      {/* 5K Resolution */}
      <div className={styles.fiveKSection}>
        <img className={styles.globeChair} src={GlobeChair} alt="img" />
      </div>
      <div className="d-flex justify-content-center">
        <div className={styles.miniFeature}>
          {miniFeatures.map((item, index) => (
            <div className="d-flex flex-column justify-content-center align-items-start">
              <h2 className={styles.miniFeatureTitle}>{item.featureInfo}</h2>
              <p className={styles.miniFeatureDesc}>{item.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Diopter section */}
      <div className={styles.section6}>
        <DarkText className={styles.darkBig1} fontSize={'96px'}>
          Adaptable to Your Eyes
        </DarkText>
        <DarkText className={styles.darkBigMini}>Adaptable to Your Eyes</DarkText>

        <WhiteGradientText className={styles.DiopterText}>DIOPTER LENSES</WhiteGradientText>
        <DiopterTextsm className={styles.Dpsm}>
          64% of the adults wear prescription glasses. Wearing headsets is uncomfortable. The world needs headsets that
          are user-friendly. One that they can wear, without adding an extra layer
        </DiopterTextsm>
        <p className={styles.smallWhite}>0-500° degrees</p>
        <video
          ref={videoRef}
          className={styles.D1Img}
          autoPlay
          loop
          src="http://cdn.ajnavidya.com/ajnalens/ajnalens_video_2.mp4"
        />

        <WhiteGradientText className={styles.IPD}>IPD Adjustment</WhiteGradientText>
        <DiopterTextsm className={styles.Dpsm}>
          Shifting focus of images towards the optical center to provide a clearer view with no strain on eyes,
          improving depth perception.
        </DiopterTextsm>
        <p className={styles.smallWhite}>59-68mm</p>
        {/* <div className="row justify-content-center align-items-center"> */}
        {/* <img className={styles.D1Img} src={D2} alt="" /> */}
        <video
          ref={videoRef}
          className={styles.D1Img}
          autoPlay
          loop
          src="http://cdn.ajnavidya.com/ajnalens/ajnalens_video_1.mp4"
        />
        {/* </div> */}
      </div>

      {/* section 7 */}
      <div className={styles.section7}>
        <div className={styles.sec7Text}>
          <TextMD>DESIGNED TO ELEVATE YOUR PERFORMANCE</TextMD>
          <PlatformText>
            Say <span className={styles.namaskar}>Namaskar</span> &nbsp;to Qualcomm XR2+ Gen1 Platform
          </PlatformText>
        </div>
      </div>

      {/* section 8 */}
      <div className={styles.section8}>
        <div className={styles.section2flex}>
          <div className={styles.sec2Elem}>
            <div className={styles.sec2ElemTextBox}>
              <h1 className={styles.BigText}>Real & Immersive </h1>
              <div className={styles.smallText2}>
                Integrated hand tracking that makes digital interaction smooth, swift and effortless
              </div>
            </div>
          </div>
          <div className={styles.sec2Elem}>
            <img style={{ width: '100%', height: '100%', userSelect: 'none' }} src={HandsImg} alt="" />
          </div>
        </div>
      </div>

      {/* section 9 */}
      <div className={styles.section9}>
        <img src={InBox} alt="" />
      </div>

      {/* scanner */}
      <div className={styles.scannerDiv}>
        <h6 className={styles.scanHeading}>Check out what AjnaXR SE looks like</h6>
        <img className={styles.scannerImg} src={ScannerImg} alt="scan" />
        <div className={styles.scaninfo}>Scan to see AjnaXR PRO in AR mode</div>
      </div>

      {/* section 10- product specification */}
      <section id="product-specification" style={{ paddingTop: '3rem' }}>
        <div className={styles.specification}>
          {/* left */}
          <div className={styles.leftDiv}>
            <h1 className={styles.SpecTitle}>Product Specifications</h1>
            <div className={styles.smProduct}>Product</div>
            <div className="d-flex align-items-center py-sm-0 py-lg-2 ">
              <div className={styles.xrTitle2} style={{ fontSize: '20px' }}>
                <span className="fw-300">Ajna</span>
                <span className="fw-700">XR</span>
              </div>
              <div
                className="d-flex align-items-center rounded-pill px-3 py-1 mx-1 text-white font-family-cairo font-size-14 font-weight-300 line-height-22 letter-spacing-1-4px text-uppercase"
                style={{ background: '#18191B' }}
              >
                Pro
              </div>
            </div>
          </div>
          {/* right */}
          <div className="col-lg-8 col-sm-12 px-1">
            {Specifications.map((item, index) => (
              <div
                key={index}
                className={styles.spFlex}
                style={{ borderBottom: index === Specifications.length - 1 ? 'none' : '' }}
              >
                <div className=" d-flex align-items-center col-lg-6 col-sm-4">
                  <h3 className={styles.specSubtitle}>{item.title}</h3>
                </div>
                <div className={styles.specColumn}>
                  {item?.items?.map((elem, index) => (
                    <li key={index} className={`${styles.spListItem} fw-300`}>
                      {elem}
                    </li>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr />

      {/* footer */}
      <div className={styles.footer}>
        <FooterVersion2 />
      </div>

      {/* mobile order button */}
      <div className={styles.mobileSticky}>
        <button className={styles.orderSticky} onClick={() => navigate('/cart/PRO')}>
          Order Now
        </button>
      </div>
    </div>
  );
};
