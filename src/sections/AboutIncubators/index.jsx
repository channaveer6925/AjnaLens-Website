import styles from './aboutIncubators.module.css';
import forgeLogo from '../../asets/Forge Logo.png';

const AboutIncubators = () => {
  return (
    <section className={styles.container}>
      <div className={styles.logoContainer}>
        <div className={styles.logoWrapper}>
          <img src={forgeLogo} alt="logo" />
        </div>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.contentWrapper}>
          <h2>Partner Incubator</h2>
          <button>Read More</button>
        </div>
      </div>
    </section>
  );
};

export default AboutIncubators;
