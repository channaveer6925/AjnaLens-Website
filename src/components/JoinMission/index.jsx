import React from 'react';
import { useNavigate } from 'react-router';
import styles from './joinMission.module.css';

const JoinMission = ({ ButtonText, link }) => {
  const navigate = useNavigate();
  return (
    <section className={styles.careerBottom}>
      <h1>We are building a skill-first world</h1>
      <h1>Come, Join Our Mission</h1>
      <button
        onClick={() => {
          navigate(link);
        }}
      >
        {ButtonText}
      </button>
    </section>
  );
};

export default JoinMission;
