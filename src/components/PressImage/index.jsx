import React from 'react';
import styles from './pressImage.module.css';

const PressImage = (props) => {
  return (
    <div>
      <div className={styles.container}>
        <a href={props.imgUrl} className={styles.png} target="_blank" rel="noopener noreferrer">
          <div className={styles.imageSec}>
            <img height="100%" width="100%" src={props.imgUrl} alt={props.id} />
          </div>
        </a>
        <a href={props.imgUrl} className={styles.png} target="_blank" rel="noopener noreferrer">
          <p className={styles.download}>Download HQ PNG</p>
        </a>
        {/* <a
          href="path_to_file"
          download="proposed_file_name"
          className={styles.svg}
        >
          <p className={styles.download}>Download HQ SVG</p>
        </a> */}
      </div>
    </div>
  );
};

export default PressImage;
