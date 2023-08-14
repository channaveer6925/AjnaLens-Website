import React from 'react';
import styles from './styles.module.css';
import rightDiIcon from '../../asets/rightDiIcon.png';
const CarrierHiring = () => {
  return (
    <section className={styles.hiring}>
      <p>Couldn’t Find A Role that Fits Your Goals</p>
      <h1>Explore Here</h1>
      <button>
        Hiring Platform <img src={rightDiIcon} alt="" />
      </button>
    </section>
  );
};

export default CarrierHiring;
