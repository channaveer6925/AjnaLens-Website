//crteating a card component for the stakeholders

import React from 'react';
// import index.module.css from the same folder
import styles from './investorsCard.module.css';

// destructuring the props object
const InvestorsCard = ({ name, image, role, company }) => {
  return (
    <div className={styles.stakeholdercard}>
      <div className={styles.inner}>
        <div
          className={styles.image}
          style={name === "Let's Venture" ? { width: '70%', height: '70%', borderRadius: 0 } : {}}
        >
          <img src={image} alt="stakeholder" style={name === "Let's Venture" ? { borderRadius: 0 } : {}} />
        </div>
      </div>
      <div className={styles.stakeholderinfo}>
        <h3>{name}</h3>
        <h4>{role}</h4>
        <p>{company}</p>
      </div>
    </div>
  );
};

export default InvestorsCard;
