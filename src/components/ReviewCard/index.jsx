// create a card component for the reviews

import React from 'react';
import styles from './index.module.css';
import quotes from '../../asets/Quotes.png';

// destructuring the props object
const ReviewCard = ({ name, reviews, image, id, companyLogo }) => {
  return (
    <div className={styles.reviewcardouter} id={id}>
      <div className={styles.reviewcard}>
        <div className={styles.reviewcardimage}>
          <img src={quotes} alt="quote" />
        </div>
        <div className={styles.reviewcardinfo}>
          <div className={styles.textContainer}>
            <p className={styles.testimonial}>{reviews}</p>
          </div>
          <p className={styles.author}>-{name}</p>
          <div className={styles.companyImgContainer}>
            {/* <img className={styles.companyLogo} src={companyLogo} alt="" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
