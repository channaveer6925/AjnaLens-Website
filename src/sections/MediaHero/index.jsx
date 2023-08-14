import React, { useEffect, useState } from 'react';
import style from './mediaHero.module.css';
import filter from '../../assets/filter.svg';
import { data } from './Data';
import Swiper from './Swiper1';
import Swiper1 from './Swiper1';
const MediaHero = () => {
  const [mobileView, setMobileView] = useState(false);
  const [filterData, setFilterData] = useState(data);
  const [yearValue, setYearValue] = useState('allYears');
  const [monthValue, setMonthValue] = useState('allMonths');
  const [filteryearData, setFilterYearData] = useState([]);
  const onChangeYear = (e) => {
    setYearValue(e.target.value);
    if (e.target.value == 'allYears') {
      setFilterData(data);
    } else {
      let newItem = data.filter((el) => {
        if (el.year == e.target.value) {
          return el;
        }
      });
      setFilterYearData(newItem);
      setFilterData(newItem);
    }
  };
  const onChangeMonth = (e) => {
    setMonthValue(e.target.value);
    if (e.target.value == 'allMonths') {
      filteryearData.length === 0 ? setFilterData(data) : setFilterData(filteryearData);
    } else if (e.target.value != 'allMonths' && yearValue != 'allYears') {
      let newItem = data.filter((el) => el.month == e.target.value && el.year == yearValue);
      setFilterData(newItem);
    } else if (yearValue == 'allYears' && e.target.value == 'allMonths') {
      let newItem = filterData.filter((el) => el.month == e.target.value);
      setFilterData(newItem);
    } else if (e.target.value == 'allMonths') {
    }
  };

  const sliceText = (text) => {
    if (text.length >= 76) {
      const sliced = text.slice(0, 75);
      return `${sliced} ...`;
    }
    return text;
  };
  return (
    <section className={`mediaSection ${style.mainContainer}`}>
      <div className={style.mediaRewievCont}>
        <div className={style.ajnmediaCont}>
          <div className={style.ajnmedia}>AjnaLens for media</div>
          <p className={style.ajnmediaTxt}>
            Get an inside look into the world of AjnaLens with high resolution images of our products and interviews
            with our core team. Also get access to all our latest press releases.
          </p>
        </div>
        <hr className={style.horizontalLine} />
        <div className={style.requestInterViewCont}>
          <h1 className={style.requestInterViewHeading}>Request an interview & stay updated</h1>
          <p className={style.requestInterViewText}>
            If you would like to interview a member of our team or get an exclusive view on what we are working on,
            please contact our press team. We will reach out to you promptly.
          </p>

          <a href="mailto:hello@ajnalens.com" className={style.contactBtn}>
            Contact press teams
          </a>
        </div>
      </div>
      <hr className={style.horizontalLine} />
      {/* See our latest press releases */}
      <div className={style.seeourContainer}>
        <div className={style.seeourText}>SEE OUR LATEST PRESS RELEASE</div>
        <div className={style.filter}>
          <div>
            <img height="20px" width="20px" src={filter} alt="filter" />
          </div>
          {/* filter by years */}
          <div>
            <select className={style.years} onChange={onChangeYear}>
              <option value="allYears">All Years</option>
              <option value="2014">2014</option>
              <option value="2015">2015</option>
              <option value="2016">2016</option>
              <option value="2017">2017</option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
            </select>
          </div>
          {/* filter by Months */}
          <div>
            <select className={style.years} onChange={onChangeMonth}>
              <option value="allMonths">All Months</option>
              <option value="Jan">Jan</option>
              <option value="Feb">Feb</option>
              <option value="Mar">Mar</option>
              <option value="Apr">Apr</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="Sep">Sep</option>
              <option value="Oct">Oct</option>
              <option value="Nov">Nov</option>
              <option value="Dec">Dec</option>
            </select>
          </div>
        </div>
      </div>
      {/* **** grid section */}
      <div className={style.gridContainer}>
        <div className={style.gridchild}>
          {filterData.map((item) => {
            return (
              <a href={item.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <div className={style.griditem} key={item.id}>
                  <div className={style.itemImgContainer}>
                    <img src={item.img} alt="headsetImg" className={style.Xrimg} />
                  </div>
                  <div className={style.title}>{sliceText(item.title)}</div>
                  <div className={style.releaseCont}>
                    <p className={style.releaseTitle}>{item.releaseTitle}</p>
                    <p className={style.releaseOn}>{item.releaseOn}</p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
      {/* mobile */}
      <div className={style.mobile}>
        <Swiper1 data={data} />
      </div>
    </section>
  );
};
export default MediaHero;
