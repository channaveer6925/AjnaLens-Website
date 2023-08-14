import { useEffect, useRef, useState } from 'react';
import ReviewCard from '../../components/ReviewCard';
import styles from './whatPeopleSay.module.css';
import leftArrow from '../../asets/LeftArrow.png';
import rightArrow from '../../asets/RightArrow.png';

const WhatPeopleSay = ({ page, data }) => {
  const scroll = useRef();
  const [distance, setDistance] = useState(0);
  const [btnPressed, setBtnPressed] = useState(false);
  const [numberOfScreens, setNumberOfScreens] = useState(0);
  const [resized, setResized] = useState('1');
  let scrolled = 1;

  useEffect(() => {
    const resizeHandler = () => {
      if (window.innerWidth > 840) {
        const numScreens = Math.ceil(data.length / 2.5);
        setDistance(Math.ceil(numScreens * window.innerWidth));
        setNumberOfScreens(numScreens);
        setResized('1');
      } else if (window.innerWidth <= 840 && window.innerWidth > 520) {
        const numScreens = Math.ceil(data.length / 1.5);
        setDistance(Math.ceil(numScreens * window.innerWidth));
        setNumberOfScreens(numScreens);
        setResized('2');
      } else {
        const numScreens = Math.ceil(data.length);
        setDistance(Math.ceil(numScreens * 328));
        setNumberOfScreens(numScreens);
        setResized('3');
      }
    };

    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
      setResized('1');
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth > 840) {
      const numScreens = Math.ceil(data.length / 2.5);
      setDistance(Math.ceil(numScreens * window.innerWidth));
      setNumberOfScreens(numScreens);
    } else if (window.innerWidth <= 840 && window.innerWidth > 520) {
      const numScreens = Math.ceil(data.length);
      setDistance(Math.ceil(numScreens * window.innerWidth * 0.7));
      setNumberOfScreens(numScreens);
    } else {
      const numScreens = Math.ceil(data.length);
      setDistance(Math.ceil(numScreens * 328));
      setNumberOfScreens(numScreens);
    }
  }, [resized]);

  const nextHandler = (elem) => {
    setBtnPressed(true);
    if (window.innerWidth > 840) {
      elem.current.scrollLeft += window.innerWidth * 0.46;
    } else if (window.innerWidth <= 840 && window.innerWidth > 520) {
      elem.current.scrollLeft += 520;
    } else {
      elem.current.scrollLeft += 328;
    }
  };

  const prevHandler = (elem) => {
    setBtnPressed(true);
    if (window.innerWidth > 840) {
      elem.current.scrollLeft -= window.innerWidth * 0.46;
    } else if (window.innerWidth <= 840 && window.innerWidth > 520) {
      elem.current.scrollLeft -= 520;
    } else {
      elem.current.scrollLeft -= 328;
    }
  };

  useEffect(() => {
    if (window.innerWidth > 840 && distance > 0) {
      let intervalId;
      intervalId = setInterval(() => {
        if (distance > Math.ceil(scroll.current.scrollLeft + window.innerWidth)) {
          scroll.current.scrollLeft += window.innerWidth * 0.46;
        } else {
          scroll.current.scrollLeft = 0;
        }
      }, 4000);

      if (btnPressed) {
        clearInterval(intervalId);
        setBtnPressed(false);
        intervalId = setInterval(() => {
          if (distance > Math.ceil(scroll.current.scrollLeft + window.innerWidth * 0.46)) {
            scroll.current.scrollLeft += window.innerWidth * 0.46;
          } else {
            scroll.current.scrollLeft = 0;
          }
        }, 4000);
      }

      // Cleaning up
      return () => {
        clearInterval(intervalId);
      };
    } else if (window.innerWidth <= 840 && window.innerWidth > 520 && distance > 0) {
      let intervalId;
      intervalId = setInterval(() => {
        if (distance > Math.ceil(scroll.current.scrollLeft + window.innerWidth) && scrolled < numberOfScreens) {
          scroll.current.scrollLeft += 520;
          scrolled += 1;
        } else if (scrolled >= numberOfScreens) {
          scroll.current.scrollLeft = 0;
          scrolled = 1;
        }
      }, 4000);

      if (btnPressed) {
        clearInterval(intervalId);
        setBtnPressed(false);
        intervalId = setInterval(() => {
          if (distance > Math.ceil(scroll.current.scrollLeft + window.innerWidth) && scrolled < numberOfScreens) {
            scroll.current.scrollLeft += 520;
            scrolled += 1;
          } else if (scrolled >= numberOfScreens) {
            scroll.current.scrollLeft = 0;
            scrolled = 1;
          }
        }, 4000);
      }

      // Cleaning up
      return () => {
        clearInterval(intervalId);
      };
    } else {
      let intervalId;
      intervalId = setInterval(() => {
        if (distance > Math.ceil(scroll.current.scrollLeft + window.innerWidth)) {
          scroll.current.scrollLeft += 328;
        } else {
          scroll.current.scrollLeft = 0;
        }
      }, 4000);

      if (btnPressed) {
        clearInterval(intervalId);
        setBtnPressed(false);
        intervalId = setInterval(() => {
          if (distance > Math.ceil(scroll.current.scrollLeft + window.innerWidth)) {
            scroll.current.scrollLeft += 328;
          } else {
            scroll.current.scrollLeft = 0;
          }
        }, 4000);
      }

      // Cleaning up
      return () => {
        clearInterval(intervalId);
      };
    }
  }, [distance, btnPressed, resized]);

  return (
    <section className={`what-people-say ${styles.container}`}>
      {typeof page === 'undefined' && <h2 className={styles.title}>What people say about us</h2>}
      <div className={styles.contentContainer} ref={scroll}>
        {data.map((item, idx) => (
          <ReviewCard
            key={`testimonial-${idx}`}
            reviews={item.testimonial}
            name={item.author}
            id={'testimonial-' + idx}
            companyLogo={item.companyLogo}
          />
        ))}
      </div>
      <div className={styles.btnContainer}>
        <button onClick={() => prevHandler(scroll)} className={styles.carouselBtn}>
          <img src={leftArrow} alt="scroll left" />
        </button>
        <button onClick={() => nextHandler(scroll)} className={styles.carouselBtn}>
          <img src={rightArrow} alt="scroll right" />
        </button>
      </div>
    </section>
  );
};

export default WhatPeopleSay;
