import playIcon from '../../asets/PlayIcon.png';
import styles from './featuredPodCard.module.css';

const FeaturedPodCard = ({ coverImg, title, desc, length, primaryBtnText, link }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imgContainer}>
        <img src={coverImg} alt={title} />
      </div>
      <div className={styles.detailsContainer}>
        <div className={styles.details}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.desc}>{desc}</p>
          <div className={styles.lengthContainer}>
            <div className={styles.lengthImgContainer}>
              <img src={playIcon} alt="track length" />
            </div>
            <p className={styles.lengthTextContainer}>{length}</p>
          </div>
        </div>
        <a href={link} target="_blank" rel="noopener noreferrer" className={styles.action}>
          <button>{primaryBtnText}</button>
        </a>
      </div>
    </div>
  );
};

export default FeaturedPodCard;
