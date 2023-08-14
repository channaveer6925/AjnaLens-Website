import { useRef, useState } from 'react';
import Slider from 'react-slick';

import Slide from './Slide';
import styles from './aboutKeyHighlights.module.css';
import './slider.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import leftArrow from '../../asets/LeftArrow.png';
import rightArrow from '../../asets/RightArrow.png';

const AboutKeyHighlights = ({ slides }) => {
  const slider = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className={styles.container}>
      <div className={styles.headingContainer}>
        <div className={styles.containerName}>Key Highlights</div>
        <h2 className={styles.title}>Upwards and Onwards</h2>
      </div>
      <div className={styles.carousel}>
        {slides?.length && (
          <Slider
            ref={slider}
            swipeToSlide={true}
            dots={true}
            infinite={true}
            speed={500}
            autoplay={true}
            slidesToScroll={1}
            slidesToShow={1}
            centerMode={true}
            centerPadding="15%"
            beforeChange={(oldIdx, newIdx) => setCurrentSlide(newIdx)}
          >
            {slides.map((slide, idx) => (
              <Slide key={idx} idx={idx} slide={slide} active={idx === currentSlide} />
            ))}
          </Slider>
        )}
      </div>
      <div className={styles.btnContainer}>
        <button
          onClick={() => {
            slider.current.slickPrev();
          }}
          className={styles.carouselBtn}
        >
          <img src={leftArrow} alt="scroll left" />
        </button>
        <button
          onClick={() => {
            slider.current.slickNext();
          }}
          className={styles.carouselBtn}
        >
          <img src={rightArrow} alt="scroll right" />
        </button>
      </div>
    </section>
  );
};

export default AboutKeyHighlights;
