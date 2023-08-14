import { useRef, useState } from 'react';
import Slider from 'react-slick';
import Slide from './Slide';
import leftArrow from '../../asets/LeftArrow.png';
import rightArrow from '../../asets/RightArrow.png';
import dummyImg from '../../asets/dummyImg.png';
import styles from './styles.module.css';
const CarrierImageGallary = () => {
  const slider = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      img: 'https://s3.ajnavidya.com/ajnalens/careers/culture/collage%20(2).jpg',
    },
    {
      img: 'https://s3.ajnavidya.com/ajnalens/careers/culture/collage%20(3).jpg',
    },
    {
      img: 'https://s3.ajnavidya.com/ajnalens/careers/culture/collage%202%20(1).jpg',
    },
    {
      img: 'https://s3.ajnavidya.com/ajnalens/careers/culture/collage%204%20(1).jpg',
    },
  ];

  return (
    <section className={styles.container}>
      <div className={styles.testimonialsHeader}>
        <p>COMPANY CULTURE</p>
        <h1>A strong family</h1>
      </div>

      <div className={styles.carousel}>
        {slides?.length && (
          <Slider
            ref={slider}
            swipeToSlide={true}
            infinite={true}
            slidesToShow={1}
            slidesToScroll={1}
            autoplay={true}
            speed={7000}
            autoplaySpeed={2000}
            cssEase={'linear'}
          >
            {slides.map((slide, idx) => (
              <Slide key={idx} slide={slide} active={idx === currentSlide} />
            ))}
          </Slider>
        )}
      </div>
      {/* <div className={styles.btnContainer}>
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
      </div> */}
    </section>
  );
};

export default CarrierImageGallary;
