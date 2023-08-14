import { useEffect, useState } from 'react';

import style from './aboutUsPurpose.module.css';
import aboutUsPurpose from '../../asets/AboutUsPurpose.png';
import purposeHeart from '../../asets/PurposeHeart.png';
import { Reveal } from 'react-awesome-reveal';
import { useNavigate } from 'react-router-dom';

const AboutUsPurpose = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (viewportWidth < 992) {
    return (
      <section className={style.container}>
        <div className={style.headingContainer}>
          <div className={style.containerName}>
            <div className={style.heart}>
              <img src={purposeHeart} alt="purpose" />
            </div>
            <div className={style.containerNameText}>Purpose</div>
          </div>
          <div className={style.title}>Building a skill-first world</div>
        </div>
        <div className={style.imageContainer}>
          <img src="https://s3.ajnavidya.com/ajnalens/about-us/PuposeSection.jpg" alt="purpose" />
        </div>
        <div className={style.contentContainer}>
          <p className={style.containerContent}>
            With 73 million unemployed youth, the world is soon to experience a severe crisis. Issues such as global
            poverty, intent to commit crimes, suicidal thoughts, health problems, and more would increase at a dramatic
            level. We are on a mission to upskill the global youth and adult fraternity, making them competent, capable
            and self-sustainable. Emphasizing more on the importance of skills over certificates, we intend to transform
            the learning ecosystem. Spreading the notion of interactive and experiential learning, we strive towards
            enhancing the skillsets of the youth, making them ready for the future jobs. Serving the bigger purpose, we
            seek to make every youth skilled and employable.
          </p>
          <button className={style.cta} onClick={() => navigate('/purpose')}>
            Learn More
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className={style.container}>
      <div className={style.imageContainer}>
        <img src="https://s3.ajnavidya.com/ajnalens/about-us/PuposeSection.jpg" alt="purpose" />
      </div>
      <Reveal keyframes={style.fadeInUp} delay={200} duration={900} triggerOnce>
        <div className={style.contentContainer}>
          <div className={style.headingContainer}>
            <div className={style.containerName}>
              <div className={style.heart}>
                <img src={purposeHeart} alt="purpose" />
              </div>
              <div className={style.containerNameText}>Purpose</div>
            </div>
            <div className={style.title}>Building a skill-first world</div>
          </div>
          <p className={style.containerContent}>
            With 73 million unemployed youth, the world is soon to experience a severe crisis. Issues such as global
            poverty, intent to commit crimes, suicidal thoughts, health problems, and more would increase at a dramatic
            level. We are on a mission to upskill the global youth and adult fraternity, making them competent, capable
            and self-sustainable. Emphasizing more on the importance of skills over certificates, we intend to transform
            the learning ecosystem. Spreading the notion of interactive and experiential learning, we strive towards
            enhancing the skillsets of the youth, making them ready for the future jobs. Serving the bigger purpose, we
            seek to make every youth skilled and employable.
          </p>
          <button className={style.cta} onClick={() => navigate('/purpose')}>
            Learn More
          </button>
        </div>
      </Reveal>
    </section>
  );
};

export default AboutUsPurpose;
