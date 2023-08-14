import React from 'react';
import style from './index.module.css';
import defenceBanner from '../../asets/defenceBanner.svg';
import def_img from '../../asets/def_img.svg';
import Indian_Army_Logo from '../../asets/Indian_Army_Logo.svg';
import ministry from '../../asets/ministry.svg';
import drdo from '../../asets/drdo.svg';
import lion from '../../asets/lion.svg';

const DefenceHero = () => {
  return (
    <div className={style.bannerCont}>
      <div className={style.Banner}>
        <div className={style.content}>
          <h1 className={style.contentHeading}>
            Making India <span>Self-Reliable</span> with Revolutionary Warfare Systems
          </h1>
          <p className={style.desc}>
            AjnaLens is revolutionizing India's Defence Sector, realizing true modern warfare by integrating mixed
            reality and AI technologies. Our Made-in-India, high-performance defence systems augment human intelligence
            and strengthen India's defence forces.
            <br />
            <br />
            AjnaLens is renowned as the winner of the Ministry of Defence's iDEX initiative for its ultra-modern
            technologies and aspires to spread Make-in-India technologies globally.
          </p>
        </div>
        <div className={style.defence}>
          <div className={style.line}></div>
          <div className={style.defenceimg}>
            <img src={def_img} alt="" />
          </div>
          <div className={style.line}></div>
        </div>
      </div>
      {/* <hr style={{ border: '1px solid #A966FF', width: '100%',background:'transperent' }} /> */}

      <div className={style.trustedbyCont}>
        <p className={style.trustedbyTxt}>TRUSTED BY</p>{' '}
        <div className={style.trusteddesc}>
          <h1>India’s Leading Defense Organizations</h1>
        </div>
        <div className={style.trusteddescTxt}>
          <p>
            Trusted by the most prestigious bodies such as the Indian Army, Indian Navy, Ministry of defence, and DRDO,
            AjnaLens’ excellent solutions provide military forces and internal security personnel with a wide range of
            applications.
          </p>
        </div>
      </div>
      <div className={style.def_symboles}>
        <div className={style.logoCont}>
          <img src={Indian_Army_Logo} alt="Indian_Army_Logo" />
        </div>
        <div className={style.logoCont}>
          <img src={ministry} alt="Indian_Army_Logo" />
        </div>{' '}
        <div className={style.logoCont}>
          <img src={drdo} alt="Indian_Army_Logo" />
        </div>{' '}
        <div className={style.logoCont1}>
          <img src={lion} alt="Indian_Army_Logo" />
        </div>
      </div>
      {/* <div
        style={{
          borderBottom: '1px solid #A966FF',
          marginTop: '6rem',
        }}
      ></div> */}
      
    </div>
  );
};

export default DefenceHero;
