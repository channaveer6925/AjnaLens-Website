//crteating a card component for the stakeholders

import React from 'react';
// import index.module.css from the same folder
import styles from './index.module.css';

// destructuring the props object
const StakeholdersCard = ({ name, image, role, company }) => {
  return (
    <div className={styles.stakeholdercard}>
      {/* create 3 more div inside */}
      <div className={styles.outer}>
        <div className={styles.middle}>
          <div className={styles.inner}>
            <div className={styles.image}>
              <img src={image} alt="stakeholder" />
            </div>
          </div>
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

export default StakeholdersCard;
