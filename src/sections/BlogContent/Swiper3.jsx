import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Swiper3.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import "./swiper3.module.css";

// import required modules
import { Pagination, Navigation } from 'swiper';
// import InNewsComp from "../../components/InNews";

const Swiper3 = ({ data }) => {
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
        {data.map((elem, idx) => (
          <SwiperSlide key={idx}>
            <img height="600px" width="70%" className="ContentImage2" src={elem} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Swiper3;
