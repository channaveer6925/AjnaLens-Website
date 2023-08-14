import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './swiper1.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import "./styles.css";
// import required modules
import { Pagination, Navigation } from 'swiper';
// import InNewsComp from "../../components/InNews";
import style from './mediaHero.module.css';
const Swiper1 = ({ data }) => {
  const sliceText = (text) => {
    if (text.length >= 70) {
      const sliced = text.slice(0, 69);
      return `${sliced} ...`;
    }
    return text;
  };
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {data.map((item) => (
          <SwiperSlide>
            <a href={item.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <div className={style.griditem} key={item.id}>
                <img src={item.img} alt="headsetImg" className={style.Xrimg} />
                <div className={style.title}>{sliceText(item.title)}</div>
                <div className={style.releaseCont}>
                  <p className={style.releaseTitle}>{item.releaseTitle}</p>
                  <p className={style.releaseOn}>{item.releaseOn}</p>
                </div>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default Swiper1;
