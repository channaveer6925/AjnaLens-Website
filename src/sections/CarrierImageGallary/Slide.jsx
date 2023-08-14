// import styles from "";
import styles from './styles.module.css';
const Slide = ({ slide, idx, active }) => {
  return (
    <div key={idx} className={styles.slide}>
      <img src={slide.img} alt={slide.caption} />
    </div>
  );
};

export default Slide;
