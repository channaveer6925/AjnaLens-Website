import React, { useState } from 'react';
import styles from './navbar.module.css';
import AjnaLensLogo from '../../asets/AjnaLensLogo.svg';
import ajnanewLogo from '../../assets/ajnanewLogo.svg';
import nDownArr from '../../assets/nDownArr.svg';
import downArrow from '../../asets/downArrowIcon.png';
import callIcon from '../../asets/callIcon.png';
import hamBIcon from '../../asets/hamIcon.png';
import PhoneNav from './PhoneNav';
import crossIcon from '../../asets/crossIcon.png';
import './phnNav.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [isMounted, setIsMounted] = useState(false);
  const handleHamBurger = () => {
    setIsMounted(!isMounted);
  };
  const handleMouseOutEvent = () => {
    if (isMounted) {
      setIsMounted(false);
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContent}>
        <div className={styles.ajnalogo}>
          <Link to="/">
            <img src={ajnanewLogo} alt="AjnaLens" />
          </Link>
        </div>
        <div className={styles.anchors}>
          <div className={styles.anchorTypes}>
            {/* <div className={styles.anchorsMenu}>
              <div href="" className={styles.linkSec}>
                <label className={styles.linkLabel}>Product and Solution</label>
                <div>
                  <img src={nDownArr} alt="^" />
                </div>
              </div>
              <div className={styles.megaMenu}>
                <div className={styles.megaItem}>
                  <ul>
                    {' '}
                    <p>Product</p>
                    <li>
                      {' '}
                      <Link to="/ajnaxr">AjnaXR</Link>
                    </li>
                    <li>
                      <a href="https://ajnavidya.com/" target="_blank" rel="noreferrer">
                        AjnaVidya
                      </a>
                    </li>
                    <li>
                      <a href="https://www.ajnacreator.com/" target="_blank" rel="noreferrer">
                        Ajna Creator Program
                      </a>
                    </li>
                    <li>XR Streaming {"(5G)"}</li>
                    <li>Ajna Cloud</li>
                    <li>Ajna Avatar</li>
                    <li>AI Suite</li>
                    <li>Chakra OS</li>
                  </ul>
                  <ul>
                    {' '}
                    <p>Solution</p>
                    <li>Enterprise</li>
                    <li>
                      <Link to="/defence">Defence</Link>
                    </li>
                    <li>Digital Twin</li>
                  </ul>
                </div>
              </div>
            </div> */}
            <div className={styles.anchorsMenu}>
              <div href="" className={styles.linkSec}>
                Ajna<span style={{ fontWeight: '600' }}>XR</span>
                <div>
                  <img src={nDownArr} alt="^" />
                </div>
              </div>
              <div className={styles.megaMenu}>
                <div className={styles.megaItem}>
                  <ul>
                    <li>
                      <div>
                        <img src={AjnaLensLogo} alt="" />
                      </div>
                    </li>
                    <li>
                      <div>
                        <img src={AjnaLensLogo} alt="" />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.anchorsMenu}>
              <div href="" className={styles.linkSec}>
                For Developer
              </div>
            </div>
            <div className={styles.anchorsMenu}>
              <div href="" className={styles.linkSec}>
                AjnaVidya
                <div>
                  <img src={nDownArr} alt="^" />
                </div>
              </div>
              <div className={styles.megaMenu}>
                <div className={styles.megaItem}>
                  <ul>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.anchorsMenu}>
              <div href="" className={styles.linkSec}>
                Cloud
                <div>
                  <img src={nDownArr} alt="^" />
                </div>
              </div>
              <div className={styles.megaMenu}>
                <div className={styles.megaItem}>
                  <ul>
                    <li>
                      <div>WorkStation</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.anchorsMenu}>
              <div href="" className={styles.linkSec}>
                Defense
              </div>
            </div>
            <div className={styles.anchorsMenu}>
              <div href="" className={styles.linkSec}>
                Business
              </div>
            </div>
            {/* <div className={styles.anchorsMenu}>
              <div href="" className={styles.linkSec}>
                <label> Transforming Enterprise</label>
                <div>
                  <img src={nDownArr} alt="^" />
                </div>
              </div>
              <div className={styles.megaMenu}>
                <div className={styles.megaItem}>
                  <ul>
                    {" "}
                    <p></p>
                    <li>Automotive</li>
                    <li>Manufacturing</li>
                    <li>Healthcare</li>
                    <li>Mining</li>
                    <li>Transport and Logistics</li>
                    <li>Energy Utilities</li>
                    <li>Ports</li>
                    <li>Public Safety</li>
                    <li>Human Resources</li>
                    <li>Banking and Finance</li>
                  </ul>
                </div>
              </div>
            </div> */}
            {/* <div className={styles.anchorsMenu}>
              <div href="" className={styles.linkSec}>
                Future Technology
                <div>
                  <img src={nDownArr} alt="^" />
                </div>
              </div>
              <div className={styles.megaMenu}>
                <div className={styles.megaItem}>
                  <ul>
                    {" "}
                    <p></p>
                    <li>Ajna Coin</li>
                  </ul>
                </div>
              </div>
            </div> */}

            <div className={styles.anchorsMenu}>
              <div href="" className={styles.linkSec}>
                Company
                <div>
                  <img src={nDownArr} alt="^" />
                </div>
              </div>
              <div className={styles.megaMenu}>
                <div className={styles.megaItem}>
                  <ul>
                    <p> </p>
                    <li>
                      <Link to="/purpose">Purpose</Link>
                    </li>
                    <li>
                      <Link to="/about-us">About us</Link>
                    </li>
                    <li>
                      <Link to="/our-story">Our Story</Link>
                    </li>
                    <li>
                      <Link to="/media">Media</Link>
                    </li>
                    <li>
                      <Link to="/careers">Careers</Link>
                    </li>
                    {/* <li>
                      <Link to="/legal">Legal</Link>
                    </li> */}
                    <li>
                      <Link to="/termsofuse">Terms of use</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.anchorsMenu}>
              <div href="" className={styles.linkSec}>
                Community
              </div>
            </div>
            <div className={styles.anchorsMenu}>
              <div href="" className={styles.linkSec}>
                Support
              </div>
            </div>
            <div className={styles.anchorsMenu}>
              <div href="" className={styles.linkSec}>
                Support
              </div>
            </div>

            {/* <div className={styles.anchorsMenu}>
              <div href="" className={styles.linkSec}>
                Resources
                <div>
                  <img src={nDownArr} alt="^" />
                </div>
              </div>
              <div className={styles.megaMenu}>
                <div className={styles.megaItem}>
                  <ul>
                    <p></p>
                    <li>
                      <Link to="/podcasts">Podcast</Link>
                    </li>
                    <li>
                      <a href="https://www.blogs.ajnalens.com/blogs" target="_blank" rel="noreferrer">
                        Blog
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <div className={styles.hamIcon} onClick={handleHamBurger}>
          <div>
            <img src={`${isMounted ? crossIcon : hamBIcon}`} alt="=" />
          </div>
        </div>
      </div>
      {isMounted ? <PhoneNav close={setIsMounted} /> : ''}
      <div
        className={styles.overlayHndle}
        style={{ display: `${isMounted ? 'block' : 'none'}` }}
        onClick={handleMouseOutEvent}
      ></div>
    </nav>
  );
};

export default Navbar;
