import React, { useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'react-responsive-modal/styles.css';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import styles from './home.module.css';
import caartStyles from '../Cart/cart.module.css';
import send from '../../assets/send.svg';
import { ScrollCardData, Testimonials } from './constant';
import whitesend from '../../assets/whitesend.svg';
import cesImg from '../../assets/honoree.svg';
import AwardCarousel from '../../components/AwardCarousel';
import partners from '../../assets/partners.svg';
import { clients, images } from '../../utils/FilesExport';

const Home = () => {
  const navigate = useNavigate();
  useDocumentTitle(`Best AR/VR and MR company in India | AjnaLens - India's top XR company`);

  // useLayoutEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  const width = window.innerWidth;
  return (
    <div>
      <div className={styles.heightContainer}>
        <div className="d-grid justify-content-center align-items-center gap-3">
          <div className={styles.standardTextLg}>
            Augmenting <br /> Human Intelligence
          </div>
          <div className={styles.tagLine}>We are changing the future of learning with XR technology</div>
          <div className="mx-auto" style={{ marginTop: '20px' }}>
            <button className={caartStyles.cancelBtn}>
              Get in Touch <img src={send} alt="send" />{' '}
            </button>
          </div>
        </div>
      </div>
      <div className={styles.heightContainer}>
        <div className="d-grid justify-content-center align-items-center gap-3">
          <div className={styles.typoHeading}>
            Imagine a world of
            <div className={styles.standardTextSm}>&nbsp;Opportunities</div>
          </div>
          <div className={styles.typoPara}>
            This isn't just a dream
            <br />
            it's a reality we're striving for
          </div>
          <div className="mx-auto" style={{ marginTop: '20px' }}>
            <button className={caartStyles.cancelBtn}>Learn More</button>
          </div>
        </div>
      </div>
      <div className="pt-5 pb-1">
        <div className="d-grid justify-content-center align-items-center gap-3">
          <div className={styles.typoHeading}>
            An
            <div className={styles.standardTextSm}>&nbsp;Ecosystem&nbsp;</div> to make it possible
          </div>
        </div>
      </div>
      <div className="position-relative">
        <div className={styles.scrollContainer}>
          {ScrollCardData.map((item, i) => {
            return (
              <div className="col" key={i}>
                <div className={styles.scrollCard}>
                  <div>
                    <img src={item?.img} alt="book" />
                  </div>
                  <div style={{ height: '160px' }}>
                    <div className={styles.cardHeading} style={{ marginBottom: '8px' }}>
                      {item?.heading}
                    </div>
                    <div className={styles.cardTypo} style={{ marginTop: '8px' }}>
                      {item?.para}
                    </div>
                  </div>
                  <div>
                    <button className={caartStyles.nextBtn} style={{ marginLeft: '0px' }}>
                      Explore Now <img src={whitesend} alt="send" />{' '}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.outerContainer} style={{ margin: '50vh auto' }}>
        <div className={styles.rowContainer}>
          <div className="col-5 d-grid align-items-center">
            <div className="d-grid" style={{ rowGap: '20px' }}>
              <div className={styles.infoHeading}>Unlimited possibility with AjnaVidya</div>
              <div className={styles.infoSubHeading}>
                Library of thousand’s XR courses to <br /> upskill yourself
              </div>
              <div>
                <button className={caartStyles.nextBtn} style={{ marginLeft: '0px' }}>
                  Explore Now <img src={whitesend} alt="send" />{' '}
                </button>
              </div>
            </div>
          </div>
          <div className="col-7">
            <div className={styles.marqueeContainer}>
              <div className="col">
                <div className="marquee-container">
                  <div className="marquee-content">
                    {images?.map((item, i) => {
                      return (
                        <div key={i} className="my-3">
                          <img src={item} alt="img" height={'200px'} width={'200px'} style={{ borderRadius: '20px' }} />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="marquee-container">
                  <div className="marquee-content2">
                    {images?.map((item, i) => {
                      return (
                        <div key={i} className="my-3">
                          <img src={item} alt="img" height={'200px'} width={'200px'} style={{ borderRadius: '20px' }} />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="marquee-container">
                  <div className="marquee-content">
                    {images?.map((item, i) => {
                      return (
                        <div key={i} className="my-3">
                          <img src={item} alt="img" height={'200px'} width={'200px'} style={{ borderRadius: '20px' }} />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.outerContainer} style={{ margin: '10vh  auto 10vh auto' }}>
        <div className="d-grid justify-content-center align-items-center my-2">
          <div className={styles.typoHeading} style={{ margin: 0 }}>
            To get unlimited possibility you need
          </div>
          <div className={styles.standardTextSm}>ultimate tool</div>
        </div>
        <div className={styles.outerContainer}>
          <div className={styles.videoOuterContainer}>
            <div className="col d-grid align-items-center ">
              <div className={styles.rightCol}>
                {/* <div className="d-grid align-items-center" style={{ gap: '20px' }}> */}
                <div className={styles.videoPara}>Embark on a journey into a new dimension of learning</div>
                <div className={styles.videoHeading}>Industry’s Most Advanced Mixed Reality Headset</div>
                <div>
                  {/* <button className={caartStyles.nextBtn} style={{ marginLeft: '0px' }}>
                    Know More <img src={whitesend} alt="send" />{' '}
                  </button> */}
                  <img src={cesImg} alt="ces" />
                </div>
                {/* </div> */}
              </div>
            </div>
            <div className="col">
              {/* <div className={styles.leftCol}> */}
              <video
                // ref={videoRef}
                className={styles.leftCol}
                style={{ width: '100%', objectFit: 'cover' }}
                src={'https://temp.ajnavidya.com/ajnavidya/Levels/Level6.mp4'}
                autoPlay
                loop
              />
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
      <div>
        <AwardCarousel />
      </div>
      <div className={styles.outerContainer} style={{ margin: '10vh  auto 30vh auto' }}>
        <div className={styles.testimonialsHeading} style={{ margin: '3.5rem 0' }}>
          What people say about us
        </div>
        <div className="row" style={{ columnGap: '24px' }}>
          {Testimonials?.map((item, i) => {
            return (
              <div className="col" key={i}>
                <div className={styles.testimonialCard}>
                  <div className="row ">
                    <div className="col-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="23" height="20" viewBox="0 0 23 20" fill="none">
                        <path
                          d="M20.0004 20C20.5898 20 21.155 19.7659 21.5717 19.3491C21.9885 18.9324 22.2226 18.3671 22.2226 17.7778V12.3511C22.2226 11.7617 21.9885 11.1965 21.5717 10.7798C21.155 10.363 20.5898 10.1289 20.0004 10.1289H16.9159C16.9159 9.34889 16.9626 8.56667 17.0537 7.78667C17.1915 6.96 17.4226 6.22444 17.7426 5.58222C18.0648 4.93778 18.4782 4.43333 18.9848 4.06444C19.4893 3.65111 20.1315 3.44445 20.9137 3.44445V0C19.6271 0 18.5026 0.275556 17.5359 0.826667C16.5777 1.37219 15.7538 2.12545 15.1248 3.03111C14.4936 4.02959 14.0283 5.12377 13.7471 6.27111C13.4637 7.53725 13.325 8.83146 13.3337 10.1289V17.7778C13.3337 18.3671 13.5678 18.9324 13.9846 19.3491C14.4013 19.7659 14.9666 20 15.5559 20H20.0004ZM6.66705 20C7.25642 20 7.82165 19.7659 8.2384 19.3491C8.65515 18.9324 8.88927 18.3671 8.88927 17.7778V12.3511C8.88927 11.7617 8.65515 11.1965 8.2384 10.7798C7.82165 10.363 7.25642 10.1289 6.66705 10.1289H3.58261C3.58261 9.34889 3.62927 8.56667 3.72039 7.78667C3.85816 6.96 4.08928 6.22444 4.40928 5.58222C4.7315 4.93778 5.14483 4.43333 5.6515 4.06444C6.15594 3.65111 6.79816 3.44445 7.58039 3.44445V0C6.29372 0 5.16927 0.275556 4.20261 0.826667C3.24436 1.37219 2.42048 2.12545 1.7915 3.03111C1.16022 4.02959 0.694928 5.12377 0.413719 6.27111C0.130354 7.53725 -0.00831239 8.83146 0.000385063 10.1289V17.7778C0.000385063 18.3671 0.234511 18.9324 0.651259 19.3491C1.06801 19.7659 1.63324 20 2.22261 20H6.66705Z"
                          fill="black"
                        />
                      </svg>
                    </div>
                    <div className="col-11 d-grid" style={{ gap: '21px' }}>
                      <div>
                        <img src={item?.img} alt="qoute" />
                      </div>
                      <div>
                        <div className={styles.nameStyle}>{item?.name}</div>
                        <div className={styles.role}>{item?.role}</div>
                      </div>

                      <div className={styles.tagLine} style={{ textAlign: 'start' }}>
                        {item?.para}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.outerContainer}>
        <div className="row d-flex justify-content-center" style={{ columnGap: '10rem' }}>
          <div className="col-2 d-flex align-items-center">
            <div className={styles.testimonialsHeading} style={{ textAlign: 'start' }}>
              Our Partners
            </div>
          </div>
          <div className="col-7">
            <img src={partners} alt="partners" />
          </div>
        </div>
      </div>
      <div className={styles.outerContainer}>
        <div className={styles.testimonialsHeading} style={{ margin: '3.5rem 0' }}>
          Our Clients
        </div>
        <div className="row">
          {clients?.map((item, i) => {
            return (
              <div className="d-flex align-items-center justify-content-center" style={{ width: '20%' }} key={i}>
                <img src={item} alt="images" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
