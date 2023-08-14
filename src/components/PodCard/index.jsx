import playIcon from '../../asets/PlayIcon.png';
import styles from './podCard.module.css';

const PodCard = ({ title, ft, length, link, image, category }) => {
  return (
    <div className={styles.container}>
      <div className={styles.mediaContainer}>
        <img src={image} alt="card media" />
      </div>
      <div className={styles.descContainer}>
        <p className={styles.category}>{category}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className={styles.link}>
          <h4 className={styles.title}>{title}</h4>
        </a>
        <div className={styles.info}>
          <p className={styles.ft}>Ft. {ft}</p>
          <div className={styles.lengthContainer}>
            <div className={styles.lengthImgContainer}>
              <img src={playIcon} alt="track length" />
            </div>
            <p className={styles.lengthTextContainer}>{length}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodCard;
