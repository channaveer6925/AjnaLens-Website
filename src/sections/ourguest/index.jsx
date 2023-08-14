// create a section component for the behind the mic section and add stakeholder card component inside it

import React, { useEffect, useRef, useState } from 'react';
import styles from './ourGuest.module.css';
// import StakeholdersCard component
import StakeholdersCard from '../../components/StakeholdersCard/index.jsx';
import leftArrow from '../../asets/LeftArrow.png';
import rightArrow from '../../asets/RightArrow.png';

const data2 = [
  {
    name: 'Bhagyesh Patel',
    role: '',
    image: 'https://s3.ajnavidya.com/ajnalens/podcasts/behind-the-mic/Bhagyesh%20Patel.png',
  },
  {
    name: 'Gaurav Singh',
    role: '',
    image: 'https://s3.ajnavidya.com/ajnalens/podcasts/behind-the-mic/Gaurav%20Singh.png',
  },
  {
    name: 'Saurabh Pandey',
    role: '',

    image: 'https://s3.ajnavidya.com/ajnalens/podcasts/behind-the-mic/Saurabh%20Pandey.png',
  },
  // {
  //   name: "Abhishek Gupta",
  //   role: "",
  //   image: "https://s3.ajnavidya.com/ajnalens/podcasts/behind-the-mic/Abhishek%20Gupta.png",
  // },
  {
    name: 'Divyanshu Varshney',
    role: '',
    image: 'https://s3.ajnavidya.com/ajnalens/podcasts/behind-the-mic/Divyanshu%20Varshney.png',
  },
  {
    name: 'Eddie Avil',
    role: '',
    image: 'https://s3.ajnavidya.com/ajnalens/podcasts/behind-the-mic/Eddie%20Avil.png',
  },
];

const OurGuestContent = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [distance, setDistance] = useState(0);
  const [btnPressed, setBtnPressed] = useState(false);
  const scroll = useRef();

  useEffect(() => {
    const resizeHandler = () => {
      setViewportWidth(window.innerWidth);
      const numScreens = Math.ceil(data2.length / 2);
      setDistance(Math.ceil(numScreens * viewportWidth * 0.86));
    };

    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  useEffect(() => {
    const numScreens = Math.ceil(data2.length / 2);
    setDistance(Math.ceil(numScreens * window.innerWidth * 0.86));
  }, []);

  const nextHandler = (elem) => {
    if (distance > Math.ceil(elem.current.scrollLeft + viewportWidth * 0.86)) {
      setBtnPressed(true);
      elem.current.scrollLeft += viewportWidth * 0.86;
    }
  };

  const prevHandler = (elem) => {
    if (elem.current.scrollLeft > 0) {
      setBtnPressed(true);
      elem.current.scrollLeft -= viewportWidth * 0.86;
    }
  };

  useEffect(() => {
    if (viewportWidth <= 520 && distance > 0) {
      let intervalId;
      intervalId = setInterval(() => {
        if (distance > Math.ceil(scroll.current.scrollLeft + viewportWidth * 0.86)) {
          scroll.current.scrollLeft += viewportWidth * 0.86;
        } else {
          scroll.current.scrollLeft = 0;
        }
      }, 4000);

      if (btnPressed) {
        clearInterval(intervalId);
        setBtnPressed(false);
        intervalId = setInterval(() => {
          if (distance > Math.ceil(scroll.current.scrollLeft + viewportWidth * 0.86)) {
            scroll.current.scrollLeft += viewportWidth * 0.86;
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
  }, [distance, btnPressed]);

  if (viewportWidth <= 520) {
    return (
      <>
        <div className={styles.contentContainer} ref={scroll}>
          {data2.map((stakeholder, index) => (
            <StakeholdersCard key={index} name={stakeholder.name} role={stakeholder.role} image={stakeholder.image} />
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
      </>
    );
  }

  return (
    <div className={styles.contentContainer}>
      {data2.map((stakeholder, index) => (
        <StakeholdersCard key={index} name={stakeholder.name} role={stakeholder.role} image={stakeholder.image} />
      ))}
    </div>
  );
};

// destructuring the props object
const Ourguest = ({ name, image, role, company }) => {
  return (
    <section className={styles.ourguest}>
      <h2 className={styles.title}>Our Guest</h2>
      <OurGuestContent />
    </section>
  );
};

export default Ourguest;
