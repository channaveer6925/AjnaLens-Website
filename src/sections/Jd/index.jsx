import React, { useLayoutEffect, useState } from 'react';
import style from './Job.module.css';
import backArrow from '../../asets/BackArrow.svg';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

const Job = () => {
  const navigate = useNavigate();
  const [jddata, setData] = useState([]);

  const { id } = useParams();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  async function getJd() {
    const response = await fetch(`https://s3.ajnavidya.com/ajnalens/careers/JDs/${id}`);
    var jdData = await response.json();
    setData(jdData);
  }
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    getJd();
  }, []);

  return (
    <div className={style.Container}>
      <div className={style.heading}>
        <div className={style.BtnwithJobroleCont}>
          <button
            onClick={() => {
              navigate(-1);
            }}
            className={style.btnwithText}
          >
            {' '}
            <img
              src={backArrow}
              alt="backsymbol"
              style={{
                width: '20px',
                alignItems: 'center',
                fontSize: '1rem',
                fontWeight: '600',
              }}
            />{' '}
            <p className={style.backbtn}>Back</p>
          </button>
        </div>
        <div className={style.titlebtnCont}>
          <div className={style.jobrole}>{jddata[0]?.body[0]}</div>
          <a href={jddata[7]?.link} target="_blank" rel="noopener noreferrer">
            <button className={style.applybtn}>Apply Now</button>
          </a>
        </div>
      </div>

      <div className={style.dataCont}>
        {jddata?.map((item, i) => {
          if (i > 0 && i <= 6) {
            return (
              <div key={i}>
                <div>{item.section}</div>
                <div className={style.Dataheading}>
                  {item.body.map((el) => (
                    <li className={style.list}>{el}</li>
                  ))}
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Job;
