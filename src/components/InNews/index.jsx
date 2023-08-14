import React from 'react';
import styles from './InNews.module.css';

const InNewsComp = (props) => {
  const sliceText = (text) => {
    if (text.length >= 63) {
      const sliced = text.slice(0, 62);
      return `${sliced} ...`;
    }
    return text;
  };

  return (
    <div>
      <a href={props.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
        <div className={styles.container}>
          {/* news Image */}
          <div className={styles.newsImage}>
            <center>
              <img height="100%" width="100%" src={props.imgUrl} alt={props.id} />
            </center>
          </div>
          {/* description text */}
          <div className={styles.desc}>
            <div className={styles.content}>
              <div className={styles.newsHeading}>
                <p>{sliceText(props.title)} </p>
              </div>
              <div className={styles.descFooter}>
                <div>
                  <p> Ajnalens in news</p>
                </div>
                <div>
                  <p>{props.date}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default InNewsComp;
