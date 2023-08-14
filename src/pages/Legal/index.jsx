import React, { useLayoutEffect } from 'react';
import styles from './legal.module.css';
import next from '../../asets/nextArrow.png';
import useDocumentTitle from '../../hooks/useDocumentTitle';

const Legal = () => {
  useDocumentTitle('Legal');
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className={styles.container}>
        {/* Hero Image */}
        <div className={styles.heroImage}>
          <img src="https://www.ajnalens.com/wp-content/uploads/2021/09/AjnaLens-Legal_1_1-1.png" alt="heroImg" />
        </div>
        {/* flexbox */}
        <div className={styles.firstFlex}>
          {/* first */}
          <div className={styles.first}>
            <img src="https://www.ajnalens.com/wp-content/uploads/2021/09/Glasses@2x-150x49.png" alt="glasses" />
            <h3 className={styles.flexTitle}>Hardware Warranties</h3>
            <p className={styles.flexContent}>
              Before you purchase cutting edge AR glasses from AjnaLens, you may review the terms and conditions of our
              limited warranty, including limitations and exclusions.
            </p>
            {/* link */}
            <div className={styles.linkFlex}>
              <a href="https://www.ajnalens.com/hardware-warranty/" className={styles.flexLink}>
                Find your warranty
              </a>
              <img width="20px" height="15px" src={next} alt="next" />
            </div>
          </div>

          {/* second */}
          <div className={styles.second}>
            <img src="https://www.ajnalens.com/wp-content/uploads/2021/09/OS-Icon@2x-80x80.png" alt="glasses" />
            <h3 className={styles.secondTitle}>Software License Agreements</h3>
            <p className={styles.flexContent}>
              Before availing AjnaLens products and services, you may review the terms and conditions of our end user
              software license agreements.
            </p>
            {/* link */}
            <div className={styles.linkFlex}>
              <a href="" className={styles.flexLink}>
                Find your software license agreement
              </a>
              <img width="20px" height="15px" src={next} alt="next" />
            </div>
          </div>
        </div>

        {/* Privacy Policy */}
        <div className={styles.privacyPolicy}>
          <img
            src="https://www.ajnalens.com/wp-content/uploads/2021/09/noun_privacy-policy_3908089@2x-114x150.png"
            alt="privacy"
          />
          <h3 className={styles.flexTitle}>Privacy Policy</h3>
          <p className={styles.privacyContent}>
            Your privacy is our top concern at AjnaLens. Go through our Privacy Policy to get a clear understanding of
            how we collect and store your information in order to serve you better. Find out how to review any of our
            information that pertains to you.
          </p>
          {/* link */}
          <div className={styles.linkFlex}>
            <a href="https://www.ajnalens.com/privacy-policy/" className={styles.pLink}>
              Read Ajnalens Privacy Policy
            </a>
            <img width="20px" height="15px" src={next} alt="next" />
          </div>
        </div>

        {/* Annual Report */}
        <div className={styles.annualReport}>
          <img src="https://www.ajnalens.com/wp-content/uploads/2021/09/New-Project.jpg" alt="annualReport" />
          <h3 className={styles.flexTitle}>Annual Returns Report</h3>
          <div className={styles.annualFlex}>
            <p className={styles.privacyContent}>Read our latest report on annual returns for</p>
            {/* link */}
            <div className={`${styles.linkFlex} ${styles.lastNext}`}>
              <a href="" className={`${styles.pLink} ${styles.pLinkmini}`}>
                F.Y. 2021-22
              </a>
              <img width="20px" height="15px" src={next} alt="next" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Legal;
