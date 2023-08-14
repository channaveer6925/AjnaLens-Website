import React, { useRef } from 'react';
import Slider from 'react-slick';
import styles from './carousel.module.css';

const data = [
  {
    img: 'https://s3.ajnavidya.com/ajnalens/home/media/Business_Insider_Logo%201.svg',
  },
  {
    img: 'https://s3.ajnavidya.com/ajnalens/home/media/Business-Standard%201.svg',
  },
  {
    img: 'https://s3.ajnavidya.com/ajnalens/home/media/dailyhunt%201.svg',
  },
  {
    img: 'https://s3.ajnavidya.com/ajnalens/home/media/DeccanChronicle_Logo.svg',
  },
  {
    img: 'https://s3.ajnavidya.com/ajnalens/home/media/Entrepreneur%20India.svg',
  },
  {
    img: 'https://s3.ajnavidya.com/ajnalens/home/media/financial-express.svg',
  },
  {
    img: 'https://s3.ajnavidya.com/ajnalens/home/media/India-Today-logo(1).svg',
  },
  {
    img: 'https://s3.ajnavidya.com/ajnalens/media/news-logo/Hindustan%20times%20logo.png',
  },
  {
    img: 'https://s3.ajnavidya.com/ajnalens/home/media/logo-express(1).svg',
  },
  {
    img: 'https://s3.ajnavidya.com/ajnalens/home/media/logo-vccircle(1).svg',
  },
  {
    img: 'https://s3.ajnavidya.com/ajnalens/home/media/The_Economic_Times%201.svg',
  },
  {
    img: 'https://s3.ajnavidya.com/ajnalens/home/media/mashable%201.svg',
  },
  {
    img: 'https://s3.ajnavidya.com/ajnalens/home/media/The%20Hindu_1.svg ',
  },
  {
    img: 'https://s3.ajnavidya.com/ajnalens/home/media/Your-Story%201.svg',
  },
];
const NewsCarousel = () => {
  const width = window.innerWidth;
  const slider = useRef();
  return (
    <div className={styles.newsCarouselContainer}>
      <Slider
        className={styles.newsCarousel}
        speed={5000}
        autoplay={true}
        autoplaySpeed={0}
        cssEase={'linear'}
        {...(width > 1024 && { slidesToShow: 5 })} // for Dekstop
        {...(width < 1024 && { slidesToShow: 3 })} // for tablet
        {...(width < 768 && { slidesToShow: 2 })} // for mobile
        slidesToScroll={1}
        infinite={true}
        swipeToSlide={true}
        centerMode={true}
        focusOnSelect={true}
        ref={slider}
      >
        {data.map((slide, idx) => (
          <div key={idx} className={styles.slide}>
            <img className={styles.newsImg} src={slide.img} alt={slide.caption} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewsCarousel;
