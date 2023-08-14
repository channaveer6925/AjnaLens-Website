import React, { useEffect, useRef } from 'react';
import styles from '../home/home.module.css';
import cartStyle from '../Cart/cart.module.css';
import fordev from '../../pages/ForDev/forDev.module.css';

import Ajnastyle from './ajna.module.css';

import { CategoryData, CoursesLibraryData, ScrollCardData, SliderCardData, data } from './constant';
import whitesend from '../../assets/whitesend.svg';
import circle from '../../assets/newAjnalensimg/circle.png';
import first from '../../assets/newAjnalensimg/first.png';
import circle1 from '../../assets/newAjnalensimg/circle1.png';
import last from '../../assets/newAjnalensimg/last.png';
import { images } from '../../utils/FilesExport';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';

export const Ajnavidya = () => {
  const videoRef = React.useRef(null);

  useEffect(() => {
    const play = () => {
      videoRef.current.play();
    };
    play();
  }, []);
  return (
    <div className={`${Ajnastyle.mainContainer}`}>
      {/* claim section*/}
      <section className={Ajnastyle.download}>
        <div className={styles.standardTextLg}>
          <span>Claim .</span>
          <span>Click .</span>
          <span>Play</span>
        </div>
        <span className={Ajnastyle.tagLine}>Unleash Your Potential with Ajnavidya's Extended Reality Ecosystem!</span>
        <button className={cartStyle.cancelBtn} style={{ marginTop: '30px' }}>
          Download AjnaVidya
        </button>
      </section>

      {/* video section */}
      <section className={`col-11 ${Ajnastyle.mainImmerssive}`}>
        <video ref={videoRef} className={Ajnastyle.videoCont} autoPlay controls>
          <source src={'https://s3.ajnavidya.com/ajnalens/home/hero/heroVideo.mp4'} type="video/mp4" />
          {/* Add additional source elements for different video formats */}
        </video>
      </section>
      {/* immersessive l;earning */}
      <section className={`${Ajnastyle.imme}`}>
        <h3 className={Ajnastyle.immenTxt}>Immersive Learning</h3>
        <p className={`${fordev.textBlack}`}>Why Immersive Learing</p>
        <p className={`col-7 Ajnastyle.immDesc`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis laborum mollitia natus, sit aperiam
          libero, accusamus a impedit dignissimos ea corrupti quasi ad nulla facere. Culpa dolorem ipsum beatae velit?
        </p>
      </section>
      {/* upskils */}
      <section className={`col-12 ${Ajnastyle.imme}`}>
        <h3 className={Ajnastyle.immenTxt}>Immersive Learning</h3>
        <p className={Ajnastyle.newtextBlack}>Upskill with the power of Extended reality tech</p>
        <p className={Ajnastyle.reimg}>Reimagine learing with Ajnavidya </p>
        {/* constatt data */}
        <div className={`${Ajnastyle.imgTxtCont}`}>
          {data?.map((item, index) => (
            <div className={Ajnastyle.singleCont} key={index}>
              <img src={item.img} alt="" className={Ajnastyle.img} />
              <div className={Ajnastyle.imgTxt}>
                <h3 className={Ajnastyle.numTxt}>{item.num}</h3>
                <h3 className={Ajnastyle.numTitle}>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Scalable solution */}

      <section className={`${Ajnastyle.imme}`}>
        <h3 className={Ajnastyle.immenTxt}>Scaleable Solution</h3>
        <p className={fordev.textBlack}>Get the best out of AjnaVidya</p>
        <p className={Ajnastyle.immDesc}>Subheading input here</p>
      </section>

      {/* mapping data card here */}

      <div className="position-relative col-11">
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
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* mapping data card here */}
      {/* Ajnavidya platform */}
      <section className={` ${Ajnastyle.imme}`} style={{ marginTop: '150px' }}>
        <h3 className={Ajnastyle.immenTxt}>AjnaVidya Platform</h3>
        <p className={fordev.textBlack}>A world of Unlimited XR course library</p>
        <p className={Ajnastyle.immDesc}>Upskill yourself with Ajnavidya’s huge cateloge of XR courses</p>
      </section>
      {/* Ajnavidya platform */}

      {/* courses library */}
      <section className={Ajnastyle.libraryDispal}>
        {/* <div className="marquee-container">
          <div className="marquee-content">
            {images?.map((item, i) => {
              return (
                <div key={i} className="my-3">
                  <img src={item} alt="img" height={'200px'} width={'200px'} style={{ borderRadius: '20px' }} />
                </div>
              );
            })}
          </div>
        </div> */}
        <Marquee direction="left" loop={true}>
          {images?.map((item, i) => {
            return (
              <div key={i} className="my-3">
                <img src={item} alt="img" height={'200px'} width={'200px'} style={{ borderRadius: '20px' }} />
              </div>
            );
          })}
        </Marquee>
      </section>
      {/* courses library */}

      {/* small cards */}
      <section className={`col-11 ${Ajnastyle.CradMain}`}>
        {CategoryData.map((item, index) => (
          <div className={Ajnastyle.Cat} key={index}>
            <img src={item.img} alt="" style={{ margin: 'auto' }} />
            <p className={Ajnastyle.title}>{item.title}</p>
          </div>
        ))}
      </section>
      <button className={Ajnastyle.downloadBtn}>Download Ajnavidya</button>

      {/* Analytics*/}
      <section className={`${Ajnastyle.imme}`}>
        <h3 className={Ajnastyle.immenTxt}>Analytics</h3>
        <p className={fordev.textBlack}>Analyze your ability to perform well</p>
        <p className={Ajnastyle.immDesc}>Upskill yourself with Ajnavidya’s huge cateloge of XR courses</p>

        <div className={`row ${Ajnastyle.analyse} ${Ajnastyle.shawdow}`}>
          <div className={`col-6 ${Ajnastyle.imgContAll} ${Ajnastyle.shawdow}`}>
            <img src={first} alt="first" className={Ajnastyle.firstImg} />
          </div>

          <div className="col-6">
            <div className={`row ${Ajnastyle.imgContAll} `}>
              <div className={`col-6 ${Ajnastyle.imgContAll}`}>
                <img src={circle} alt="img" className={Ajnastyle.smallImg} />
              </div>
              <div className={`col-6 ${Ajnastyle.imgContAll}`}>
                <img src={circle1} alt="img" className={Ajnastyle.smallImg} />
              </div>
            </div>
            <div className={` ${Ajnastyle.imgContAll} ${Ajnastyle.shawdow}`}>
              <img src={last} alt="last" className={Ajnastyle.firstImg} />
            </div>
          </div>
        </div>
      </section>
      {/* Ajnavidya platform */}

      {/* All products slider */}
      <section className={`col-11 ${Ajnastyle.productSliderCont} `}>
        <h3 className={Ajnastyle.ecoHeader}>Explore Ecosystem</h3>
        <div className={`${Ajnastyle.productSlider}`}>
          {SliderCardData.map((item, index) => (
            <div key={index}>
              <div className={Ajnastyle.imgs}>
                <img src={item.img} alt="" />
              </div>
              <div className={Ajnastyle.TextContainer}>
                <div style={{ height: '150px' }}>
                  <h3 className={`${Ajnastyle.immenTxt} ${Ajnastyle.centerTxt}`}>{item.title}</h3>
                  <p className={`${styles.cardHeading} ${Ajnastyle.cardHeading}`}>{item?.subTitile}</p>
                  <span className={` ${Ajnastyle.tagLine} ${Ajnastyle.uniquetititle}`}>{item.desc}</span>
                </div>
                <a href={item.link} target="_blank">
                  <button className={`${cartStyle.cancelBtn} ${Ajnastyle.cancelBtn}`}>Go to site</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* All products slider */}
    </div>
  );
};
