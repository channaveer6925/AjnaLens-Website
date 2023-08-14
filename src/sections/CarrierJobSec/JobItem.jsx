import React from 'react';
import styles from './styles.module.css';
import rightArrow from '../../asets/RightArrow.png';
import { Link } from 'react-router-dom';
const JobItem = ({ jobs }) => {
  return (
    <section className={styles.container}>
      <div className={styles.jobContainer}>
        {jobs?.map((elItem, i) => (
          <div className={styles.jobItem} key={i}>
            <li className={styles.jobrole}>{`${elItem.jobRole}`} </li>
            <Link to={`/careers/job/${elItem.link}`}>
              {' '}
              <p>
                Apply
                <img src={rightArrow} alt="" />
              </p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JobItem;
