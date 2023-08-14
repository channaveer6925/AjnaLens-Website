import React from 'react';
import styles from './styles.module.css';
import coreIcon from '../../asets/coreValueIcon.png';
const CoreValue = () => {
  const data = [
    {
      heading: 'Commitment',
      content: 'Doing things with all your heart makes a difference.',
    },
    {
      heading: 'Knowing the WHY',
      content: 'Always be clear on the purpose behind every task you do.',
    },
    {
      heading: 'Self-Growth',
      content: 'To be 1% better each day makes huge difference.',
    },
    {
      heading: 'Respect',
      content: 'Being empathetic and appreciating the work that everyone does.',
    },
    {
      heading: 'Impact',
      content: 'Touching lives to makes your work worthwhile.',
    },
    {
      heading: 'Atmanirbhar',
      content: 'Strive to be independent and self-sustainable.',
    },
  ];
  return (
    <section className={styles.carrierCore}>
      <div className={styles.headingSec}>
        <p>CORE VALUES</p>
        <h1>Our Core Values</h1>
      </div>
      <div className={styles.content}>
        {data?.map((el, idx) => (
          <div className={styles.contentBox} key={idx}>
            <div className={styles.imgSec}>
              <img src={coreIcon} alt="" />
            </div>
            <h3>{el.heading}</h3>
            <p>{el.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreValue;
