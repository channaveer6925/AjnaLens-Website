import React from 'react';
import { Accordion } from 'react-bootstrap';
import styles from './styles.module.css';
import './accordion.css';
import rightArrow from '../../asets/RightArrow.png';
import { Link } from 'react-router-dom';
const CarrierJob = ({ jobData }) => {
  return (
    <section className={`proContainer ${styles.container}`}>
      <Accordion defaultActiveKey="0" className={styles.accordion}>
        {jobData?.map((el, idx) => (
          <Accordion.Item eventKey={idx} key={idx} className={styles.accordionItem}>
            <Accordion.Header>
              <p>{el.section}</p>
              <div className={`career-accordion-right ${styles.rightContainer}`}>
                <p>Jobs</p>
                <img src={rightArrow} className={`career-accordion-arrow ${styles.arrow}`} alt=">" />
              </div>
            </Accordion.Header>
            <Accordion.Body className={styles.accordionBody}>
              {el.roles?.map((elItem, i) => (
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
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </section>
  );
};

export default CarrierJob;
