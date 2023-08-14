import styles from './aboutUsHero.module.css';

const AboutUsHero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.imageContainer}>
        <img src="https://s3.ajnavidya.com/ajnalens/about-us/hero/AjnaLens_Team-min-min.webp" alt="about us" />
      </div>
      <h1 className={styles.title}>About Us</h1>
    </section>
  );
};

export default AboutUsHero;
