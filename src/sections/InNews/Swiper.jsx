import React from 'react';
import './swipper.css';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import "./styles.css";

// import required modules
import { Pagination, Navigation } from 'swiper';
import InNewsComp from '../../components/InNews';

const SwiperComp = ({ data }) => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {data.map((elem) => (
          <SwiperSlide>
            <InNewsComp id={elem.id} title={elem.title} date={elem.date} imgUrl={elem.imgUrl} url={elem.url} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwiperComp;
