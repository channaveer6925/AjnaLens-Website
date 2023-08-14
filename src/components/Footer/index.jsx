import React from 'react';
import styles from './footer.module.css';
import ajnalogo from '../../asets/Ajnalogosvg.svg';
import facebookIcon from '../../asets/facebookIcon.png';
// import InstagramIcon from "../../asets/instagramIcon.png";
import InstaIcon from '../../asets/instaIcon.svg';
import linkedinIcon from '../../asets/linkedin icon empty.svg';
import youtubeIcon from '../../asets/youtubeIcon.svg';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <img src={ajnalogo} alt="" />
        </div>
        <div className={styles.detail}>
          <ul className={styles.tab}>
            <input type="checkbox" id="check1" className={styles.inputcheck} />
            <label className={styles.tab_label} htmlFor="check1">
              Products
            </label>
            <div className={styles.tab_content}>
              <li>
                {' '}
                {/* add /ajnaxr */}
                <Link className={styles.link} to="/ajnaxr">
                  AjnaXR
                </Link>
              </li>
              <li>
                <a className={styles.link} href="https://ajnavidya.com/" target="_blank">
                  AjnaVidya
                </a>
              </li>
              {/* <li>
                <a className={styles.link} href="https://marketplace.ajnavidya.com/" target="_blank">
                  NFT Market Place
                </a>
              </li> */}
              {/* <li>XR Streaming {'(5G)'}</li>
              <li>Ajna Cloud</li>
              <li>Ajna Avatar</li>
              <li>AI Suite</li>
              <li>Digital Twin</li>
              <li>Chakra OS</li> */}
            </div>
          </ul>
          {/* <ul className={styles.tab}>
            <input type="checkbox" id="check2" className={styles.inputcheck} />
            <label className={styles.tab_label} htmlFor="check2">
              Future Tech
            </label>
            <div className={styles.tab_content}>
              <li>Ajna Coin</li>
            </div>
          </ul> */}
          <ul className={styles.tab}>
            <input type="checkbox" id="check2" className={styles.inputcheck} />
            <label className={styles.tab_label} htmlFor="check2">
              Solutions
            </label>
            <div className={styles.tab_content}>
              <li>
                {' '}
                {/* add /ajnaxr */}
                <Link className={styles.link} to="/defence">
                  Defence
                </Link>
              </li>
            </div>
          </ul>
          <ul className={styles.tab}>
            <input type="checkbox" id="check3" className={styles.inputcheck} />
            <label className={styles.tab_label} htmlFor="check3">
              Company
            </label>
            <div className={styles.tab_content}>
              <li>
                <Link className={styles.link} to="/purpose">
                  Purpose
                </Link>
              </li>
              <li>
                <Link className={styles.link} to="/about-us">
                  About us
                </Link>
              </li>
              <li>
                <Link className={styles.link} to="/our-story">
                  Our Story
                </Link>
              </li>
              <li>
                <Link className={styles.link} to="/media">
                  Media
                </Link>
              </li>
              <li>
                <Link className={styles.link} to="/careers">
                  Careers
                </Link>
              </li>
              <li>
                <Link className={styles.link} to="/privacy">
                  Privacy & policy
                </Link>
              </li>
              <li>
                <Link className={styles.link} to="/termsofuse">
                  Terms of use
                </Link>
              </li>
              {/* <li>Patent And License</li> */}
            </div>
          </ul>
          <ul className={styles.tab}>
            <input type="checkbox" id="check4" className={styles.inputcheck} />
            <label className={styles.tab_label} htmlFor="check4">
              Resources
            </label>
            <div className={styles.tab_content}>
              <li>
                <Link className={styles.link} to="/podcasts">
                  Podcast
                </Link>
              </li>
              <li>
                <Link className={styles.link} to="/blogs">
                  Blog
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </div>
      <div className={styles.hr}></div>
      <div className={`${styles.content} ${styles.socialContent}`}>
        <div className={styles.socialMedia}>
          <a href="https://www.facebook.com/ajnalens">
            <img src={facebookIcon} alt="" />
          </a>
          <a href="https://www.youtube.com/@ajnalens">
            <img src={youtubeIcon} alt="" />
          </a>
          <a href="https://www.instagram.com/ajnalens/">
            <img src={InstaIcon} alt="" />
          </a>
          <a href="https://in.linkedin.com/company/ajnalens">
            <img src={linkedinIcon} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
