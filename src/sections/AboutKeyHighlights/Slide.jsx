import styles from './aboutKeyHighlights.module.css';

const Slide = ({ slide, idx, active }) => {
  return (
    <div key={idx} className={styles.slide}>
      <img src={slide.img} alt={slide.caption} />
      <p className={styles.slideContent} style={active ? {} : { display: 'none' }}>
        {slide.caption}
      </p>
    </div>
  );
};

export default Slide;
