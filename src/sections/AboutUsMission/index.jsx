import { Accordion } from 'react-bootstrap';
import styles from './aboutUsMission.module.css';
import './bs.css';

const AboutUsMission = () => {
  return (
    <section className={`aboutUsMission ${styles.container}`}>
      <p className={styles.containerName}>Vision</p>
      <h2 className={styles.title}>Augmenting Human Intelligence</h2>
      <p className={styles.content}>
        Humans are the most powerful creations on Earth till date. While evolving, we created tools and technologies to
        fuel our growth and ignite innovation. What was meant to enhance our capabilities has, in a way limited our
        possibilities. This needs to change. We need technologies that become a part of our lives, something that we can{' '}
        <b>adapt</b> to, something that will help us <b>grow</b> and evolve to our <b>highest potential</b>.
      </p>
      <Accordion
        style={{
          width: '100%',
          '--bs-accordion-border-width': 0,
          '--bs-accordion-btn-padding-x': 0,
        }}
      >
        <Accordion.Item eventKey="0">
          <Accordion.Header>Read full mission statement</Accordion.Header>
          <Accordion.Body style={{ color: '#484848' }}>
            With technologies becoming powerful each day, humanizing interactions between the physical and the digital
            world is the need of the era. Elevating capability, improving capacity and enhancing productivity,
            technologies can transform us to be superhumans. And AjnaLens aims to bring this future to everyone with our
            XR solutions powered by artificial intelligence. Our devices are powered by next-generation technologies
            that can blend in with your daily life, interact naturally, assist and guide you, helping you become the
            highest version of yourself.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </section>
  );
};

export default AboutUsMission;
