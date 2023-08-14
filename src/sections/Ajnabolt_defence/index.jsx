import React from 'react';
import style from './index.module.css';
import ajnabolt from '../../asets/ajnabolt.svg';

const Ajnabolt = () => {
  return (
    <div className={style.container}>
      {/* <div className={style.line}></div> */}
      <hr style={{ border: '1px solid #A966FF', width: '100%' }} />
      <h1 className={style.heading}>AjnaBolt</h1>
      <p className={style.Ajnadesc}>
        AjnaBolt is a revolutionary advancement for modern warfare which combines Mixed Reality (MR) with Artificial
        Intelligence (AI). These military-grade glasses with 60o FOV, integrated protection system enabling day/night
        vision, and indoor/outdoor adaptability increases mission capability whilst ensuring maximum survivability. Its
        modular design works efficiently in adverse weather conditions, improves the soldier’s battlefield awareness,
        and aids in accomplishing missions with minimum gadgets.
      </p>
      <div className={style.AjnaboltImg}>
        <img src={ajnabolt} alt="Military grade mixed reality headset for army" />
      </div>
      <hr style={{ border: '1px solid #A966FF', width: '100%' }} />
    </div>
  );
};

export default Ajnabolt;
