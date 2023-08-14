import React, { useRef } from 'react';
import Slider from 'react-slick';
import styles from './award.module.css';
import { awards } from '../../utils/FilesExport';

const AwardCarousel = () => {
  const slider = useRef();
  const width = window.innerWidth;
  return (
    <div className={styles.newsCarouselContainer}>
      <Slider
        speed={5000}
        autoplay={true}
        autoplaySpeed={0}
        className="center"
        // cssEase={'linear'}
        centerPadding="60px"
        slidesToShow={5}
        {...(width > 1600 && { slidesToShow: 6 })}
        {...(width < 1600 && { slidesToShow: 5 })} // for Dekstop
        {...(width < 1500 && { slidesToShow: 4 })}
        {...(width < 1300 && { slidesToShow: 8 })}
        {...(width < 1200 && { slidesToShow: 8 })}
        {...(width < 1024 && { slidesToShow: 9 })}
        {...(width < 768 && { slidesToShow: 3 })} // for mobile
        slidesToScroll={1}
        infinite={true}
        swipeToSlide={true}
        centerMode={true}
        focusOnSelect={true}
        ref={slider}
      >
        {awards.map((slide, idx) => (
          <div key={idx} className={styles.slide}>
            <img className={styles.awardImg} src={slide} alt={'imgs'} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AwardCarousel;
