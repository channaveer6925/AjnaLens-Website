import React from 'react';
import styles from './purpose.module.css';
import Accordion from 'react-bootstrap/Accordion';

import bridge from '../../asets/bridge.svg';

import planImage1 from '../../asets/planImage1.svg';
import planImage2 from '../../asets/planImage2.svg';
import planImage3 from '../../asets/planImage3.svg';
import { Link } from 'react-router-dom';
import { Reveal } from 'react-awesome-reveal';

const crisisData = [
  {
    title: 'Poverty and Starvation',
    p1: '1.2 billion people in 111 developing countries spend their life in acute multidimensional poverty.',
    p2: '1 in 4 people in India struggle to fill their stomach every day.',
    p3: 'Lack of income makes it difficult to meet living expenses, leading to malnutrition and poor health status.',
  },
  {
    title: 'Violence and Crimes',
    p1: 'A 1% increase in the unemployment rate yields a 14% increase in burglary rates.',
    p2: 'By age 35, about 64% of unemployed men have been arrested for a non-traffic offence.',
    p3: 'With mouths to feed and no income, the youth resort to robbery, murder, and other organised crimes.',
  },
  {
    title: 'Suicides',
    p1: '9000+ people ended their lives due to unemployment between 2018 and 2020.',
    p2: 'Suicides moved up by 24% post covid.',
    p3: 'Committing suicide seems the best way out when people fail to fulfil their basic needs.',
  },
  {
    title: 'Drug and Alcohol Abuse',
    p1: 'About 1 in 6 unemployed are substance abusers.',
    p2: 'In the 15-24 year age group, 50% of deaths (accidents, homicides, suicides) involve substance abuse.',
    p3: 'To get rid of the unemployment stress, alcohol or drugs are often accepted by the youth.',
  },
  {
    title: 'Health Declination',
    p1: 'Every 1 in 8 people lives with a mental health condition.',
    p2: 'Depression and anxiety have shot up by 25% post covid.',
    p3: 'Every 1 in 9 people does not have enough food to lead a healthy, active life. Unemployment brings low self-esteem and confidence, impacting psychological and physical health drastically.',
  },
];
const Purpose = () => {
  return (
    <section className={styles.container}>
      <div className={styles.imageContainer}>
        <img src="https://s3.ajnavidya.com/ajnalens/purpose/Pupose%20heading.jpg" alt="Purpose" />
        <div className={styles.textContainer}>
          <div className={styles.textWrapper}>
            <h1>
              Global Unemployment is <span>RISING</span>
            </h1>
          </div>
        </div>
      </div>
      {/* Headline container */}
      <div className={styles.subContainer}>
        <div className={styles.left}>
          <Reveal keyframes={styles.fadeInUp} delay={200} duration={900} triggerOnce>
            <h1>73 million</h1>
            <h4>youth are unemployed globally</h4>
          </Reveal>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.right}>
          <Reveal keyframes={styles.fadeInUp} delay={200} duration={900} triggerOnce>
            <h4>Why Skill First?</h4>
            <p>
              I am Skill First is a movement launched by AjnaLens, to address the fast-increasing rate of unemployment.
              By creating an ecosystem where the youth can learn and upskill themselves, get hired and make their
              living, we intend to make every youth self-sustainable.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Accordion Section */}
      <div className={styles.accordionContainer}>
        <p className={styles.sectionHeading}>CRISIS</p>
        <h1>Lacking industry-required skills, people remain unemployed, leading to</h1>
        <Accordion defaultActiveKey="0" className={styles.accordion}>
          {crisisData.map((item, index) => (
            <Accordion.Item key={index} eventKey={index}>
              <Accordion.Header>
                <b>{item.title}</b>
              </Accordion.Header>
              <Accordion.Body>
                <div>
                  <ul className={styles.listItems}>
                    <li>{item.p1}</li>
                    <li>{item.p2}</li>
                    <li>{item.p3}</li>
                  </ul>
                </div>
              </Accordion.Body>
              <hr className={styles.divider} />
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
      {/* Solution Section */}
      <Reveal keyframes={styles.fadeInUp} delay={200} duration={900} triggerOnce>
        <div className={styles.solutionContainer}>
          <div className={styles.bridgeImgContainer}>
            <img className={styles.bridge} src={bridge} alt="" />
          </div>
          <div className={styles.solutionContent}>
            <p className={styles.sectionHeading}>Solution</p>
            <h1 className={styles.solutionHeading}>Building a skill-first world with equal economic opportunities</h1>
            <p className={styles.solutionText}>
              By training and upskilling youth in industry-relevant skills in a fast and efficient way, we can prepare
              them for the jobs of tomorrow and/or employable.
            </p>
          </div>
        </div>
      </Reveal>
      {/* Plan section */}
      <div className={styles.planContainer}>
        <p className={styles.sectionHeading}>THE PLAN</p>
        <h1 className={styles.planHeading}>Strive to be Skill-first</h1>
        <Reveal keyframes={styles.fadeInUp} delay={200} duration={900} triggerOnce>
          <div className={styles.planImagesContainer}>
            <div className={styles.planImage}>
              <img className={styles.planImageSize} src={planImage1} alt="core value heading" />
              <h3>
                Skill-first employment needs <b>policies</b>
              </h3>
            </div>
            <div className={styles.planImage}>
              <img className={styles.planImageSize} src={planImage2} alt="core value heading" />
              <h3>
                Policies need all-around <b>support</b>
              </h3>
            </div>
            <div className={styles.planImage}>
              <img className={styles.planImageSize} src={planImage3} alt="core value heading" />
              <h3>
                Support needs <b>awareness</b>
              </h3>
            </div>
          </div>
        </Reveal>
      </div>
      {/* Action section */}
      <div className={styles.actionContainer}>
        <div className={styles.actionContent}>
          <p className={styles.sectionHeading}>THE ACTION</p>
          <h2 className={styles.actionHeading}>Lead the change</h2>
          <p className={styles.actionText}>
            Spread the voice to 1 Billion people. Reach those who believe that skills matter more than certifications.
          </p>
        </div>
        <Link onClick={() => window.scrollTo(0, 0)}>
          <button className={styles.actionButton}>Join the movement today</button>
        </Link>
      </div>
    </section>
  );
};

export default Purpose;
