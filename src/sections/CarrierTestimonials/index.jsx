import { useRef, useState } from 'react';
import Slider from 'react-slick';
import Slide from './Slide';
import leftArrow from '../../asets/LeftArrow.png';
import rightArrow from '../../asets/RightArrow.png';
import dummyImg from '../../asets/dummyImg.png';
import styles from './styles.module.css';
const CarrierTestimonials = () => {
  const slider = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      img: 'https://s3.ajnavidya.com/ajnalens/careers/testimonials/AjnaLens%20Office%201.webp',
    },
    {
      img: 'https://s3.ajnavidya.com/ajnalens/careers/testimonials/AjnaLens%20Office%202.webp',
    },
    {
      img: 'https://s3.ajnavidya.com/ajnalens/careers/testimonials/AjnaLens%20Office%20Culture.webp',
    },
    {
      img: 'https://s3.ajnavidya.com/ajnalens/careers/testimonials/AjnaLens%20Office%20Founders.webp',
    },
    {
      img: 'https://s3.ajnavidya.com/ajnalens/careers/testimonials/AjnaLens%20Office%20puja.webp',
    },
  ];

  return (
    <section className={styles.container}>
      <div className={styles.testimonialsHeader}>
        <p>OUR OFFICE</p>
        <h1>What People Say About Us</h1>
      </div>

      <div className={styles.carousel}>
        {slides?.length && (
          <Slider
            ref={slider}
            swipeToSlide={true}
            dots={true}
            infinite={true}
            speed={500}
            slidesToScroll={1}
            slidesToShow={1}
            centerMode={true}
            centerPadding="15%"
            beforeChange={(oldIdx, newIdx) => setCurrentSlide(newIdx)}
          >
            {slides.map((slide, idx) => (
              <Slide key={idx} slide={slide} active={idx === currentSlide} />
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

export default CarrierTestimonials;
