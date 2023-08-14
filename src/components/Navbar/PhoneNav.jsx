import React from 'react';
import styles from './navbar.module.css';
import downArrow from '../../asets/downArrowIcon.png';
import callIcon from '../../asets/callIcon.png';
import { Link } from 'react-router-dom';

const PhoneNav = ({ close }) => {
  return (
    <div className={styles.phnNav}>
      <div className={styles.phnNavCh}>
        <ul className={styles.tabSection}>
          <input type="radio" name="tabs" id="chck1" className={styles.tabSectionCheck} />
          <label className={styles.tab_label} htmlFor="chck1">
            Products
          </label>
          <div className={styles.tab_content}>
            {/* <li>
              {' '}
              {/* <Link to="/ajnaxr" onClick={() => close(false)}>
                AjnaXR
              </Link> 
            </li> */}
            <li>
              <a href="https://ajnavidya.com/" target="_blank">
                AjnaVidya
              </a>
            </li>
            <li>
              <a href="https://www.ajnacreator.com/" target="_blank">
                Ajna Creator Program
              </a>
            </li>

            {/* <li>
              <a href="https://marketplace.ajnavidya.com/" target="_blank">
                NFT Market Place
              </a>
            </li> */}
            {/* <li>XR Streaming {"(5G)"}</li>
            <li>Ajna Cloud</li>
            <li>Ajna Avatar</li>
            <li>AI Suite</li>
            <li>Digital Twin</li>
            <li>Chakra OS</li> */}
          </div>
        </ul>

        {/* <ul className={styles.tabSection}>
          <input
            type="radio"
            name="tabs"
            id="check5"
            className={styles.tabSectionCheck}
          />
          <label className={styles.tab_label} htmlFor="check5">
            Transforming Enterprise
          </label>
          <div className={styles.tab_content}>
            <li>Network Architecture</li>
            <li>Patent And License</li>
            <li>Ajna Coin</li>
          </div>
        </ul> */}
        <ul className={styles.tabSection}>
          <input type="radio" name="tabs" id="chck2" className={styles.tabSectionCheck} />
          <label className={styles.tab_label} htmlFor="chck2">
            Solution
          </label>
          <div className={styles.tab_content}>
            <li>
              <Link to="/defence" onClick={() => close(false)}>
                Defence
              </Link>{' '}
            </li>
          </div>
        </ul>
        <ul className={styles.tabSection}>
          <input type="radio" name="tabs" id="chck3" className={styles.tabSectionCheck} />
          <label className={styles.tab_label} htmlFor="chck3">
            Company
          </label>
          <div className={styles.tab_content}>
            <li>
              <Link to="/purpose" onClick={() => close(false)}>
                Purpose
              </Link>
            </li>
            <li>
              <Link to="/about-us" onClick={() => close(false)}>
                About us
              </Link>
            </li>
            <li>
              <Link to="/our-story" onClick={() => close(false)}>
                Our Story
              </Link>
            </li>
            <li>
              <Link to="/media" onClick={() => close(false)}>
                Media
              </Link>
            </li>
            <li>
              <Link to="/careers" onClick={() => close(false)}>
                Careers
              </Link>
            </li>
            {/* <li>
              <Link to="/legal">Legal</Link>
            </li> */}
            <li>
              <Link to="/termsofuse" onClick={() => close(false)}>
                Terms of use
              </Link>
            </li>
          </div>
        </ul>
        <ul className={styles.tabSection}>
          <input type="radio" name="tabs" id="chck4" className={styles.tabSectionCheck} />
          <label className={styles.tab_label} htmlFor="chck4">
            Resources
          </label>
          <div className={styles.tab_content}>
            <li>
              <Link to="/podcasts" onClick={() => close(false)}>
                Podcast
              </Link>
            </li>
            <li>
              <Link to="https://blogs.ajnavidya.com/blogs" onClick={() => close(false)}>
                Blog
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default PhoneNav;
