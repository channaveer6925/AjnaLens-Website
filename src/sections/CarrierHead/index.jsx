import React from 'react';
import styles from './styles.module.css';
import carrierDoor from '../../asets/carrierDoor.png';
const CarrierHead = () => {
  return (
    <section className={styles.carrierTop}>
      <div className={styles.carrierHead}>
        <p>Ajna Career</p>
        <h1>Do the work that allows you to be yourself</h1>
      </div>
      <div className={styles.imgSec}>
        <img src={carrierDoor} alt="" />
      </div>
    </section>
  );
};

export default CarrierHead;
