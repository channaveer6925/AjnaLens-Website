import React from 'react';
import styles from './forDev.module.css';
import SS1 from '../../assets/DEVICE_MANAGEMENT.svg';
import SS2 from '../../assets/SS2.png';
import SS3 from '../../assets/SS3.png';
import Cloud from '../../assets/Cloud.png';
import { ForDevSec1, PublisherhubData } from '../../constants/constants';
import { ButtonWrapper } from '../../components/styled/common-styled';

export const ForDev = () => {
  return (
    <div className={styles.container}>
      {/* section1 */}
      <div className={styles.section1}>
        <h1 className={styles.HeadTitle}>Design, Develop, Test & Publish</h1>
        <p className={styles.sm1}>
          Developers, Build With a <span className={styles.sm1Bold}>PURPOSE</span>
        </p>
      </div>

      {/* section 2 */}
      <section className={styles.section2}>
        <h4 className={styles.subTitle}>Ajna Developer Hub</h4>
        <p className={styles.textBlack}>
          Create your experience <br /> in a new world of unlimited possiblity{' '}
        </p>
        <img className={styles.SS1} src={SS1} alt="img" />

        <div className={styles.greyText}>What you will get in ADH?</div>

        <div className={`row justify-content-between align-items-center ${styles.iconFlex}`}>
          {ForDevSec1.map((item, index) => (
            <div className="col-md-2 col-6 p-4 d-flex flex-column align-items-center gap-2">
              <img src={item.imgUrl} alt="" />
              <p className={styles.iconTitle}>{item.title}</p>
            </div>
          ))}
        </div>

        <button className={styles.buttonBlue}>Access ADH</button>
      </section>

      {/* flex */}

      <div className={styles.flexSection}>
        <div className={`${styles.flexElem1}`}>
          <h4 className={styles.getAccess}>Get accese of AjnaXR SDK through Ajna Developer Hub</h4>
          <button className={`${styles.buttonBlue}`}>Access ADH</button>
        </div>
        <div className={styles.flexElem2}>
          <img height={'100%'} width={'102%'} src={SS2} alt="" />
        </div>
      </div>

      {/* publisher hub */}
      <h4 className={styles.subTitle2}>Ajna Publisher Hub</h4>
      <p className={styles.textBlack}>Publish your product to worlds first XR course library</p>
      <img className={styles.SS1} src={SS3} alt="img" />

      <div className={styles.greyText}>What you will get PublisherHub?</div>

      <div className={`row justify-content-center `}>
        {PublisherhubData.map((item, index) => (
          <div className="col-md-2 w-auto p-2 d-flex flex-column align-items-center justify-content-center gap-2">
            <img src={item.imgUrl} alt="" />
            <p className={styles.iconTitle}>{item.title}</p>
          </div>
        ))}
      </div>

      <button className={styles.buttonBlue}>Explore Publisher hub</button>

      <div className={styles.flexBox2}>
        <div className={styles.flex2Elem1}>
          <h1 className={styles.BigText}>
            Become more powerful <br /> with our cloud service <br />{' '}
            <span className={styles.workstation}>Ajna WorkStation</span>
          </h1>
          <button className={styles.buttonBlue}>Learn More</button>
        </div>

        <img className={styles.cloudImg} src={Cloud} alt="" />
      </div>

      <h4 className={styles.lastText}>
        See what others are building with <br /> <span className={styles.ajnaText}>Ajna Developer Hub</span>
      </h4>

      <div>
        <button className={`${styles.buttonBlue}`}>Join the community</button>
      </div>
    </div>
  );
};
