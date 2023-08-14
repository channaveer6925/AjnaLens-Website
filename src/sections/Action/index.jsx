import React, { useState } from 'react';
import styles from './action.module.css';
import book from '../../asets/book.svg';
import document from '../../asets/document.svg';
const Action = () => {
  const [data, setData] = useState({
    state: '',
    name: '',
    age: '',
  });
  const changeHandler = (e) => {
    setData({ ...setData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {};
  return (
    <section className={styles.actionContainer}>
      {/* Headline */}
      <div className={styles.headlineContainer}>
        <div className={styles.heading}>
          <div className={styles.headingText}>
            <p>WRITE LETTER</p>
            <h1>Lead the skill-first movement, and set an example for the generations to follow.</h1>
          </div>
          <div className={styles.bookImgContainer}>
            <img className={styles.bookImg} src={book} alt="" />
          </div>
        </div>
        <div className={styles.quote}>
          <h3>
            The skill gap is one of the major issues cultivating the seed of unemployment, further leading to problems
            such as hunger, deaths, criminal activities, etc in society. To eliminate or at least reduce the above, both
            youth and adults must have decent jobs and/or equal economic opportunities. For the same, it is necessary
            that they possess relevant skills, technical or vocational, as deemed necessary by the industry. To be
            skill-first is not just an action but an initiative to make people employable, and self-sustainable.
          </h3>
        </div>
      </div>
      {/* Form */}
      <div className={styles.formContainerBody}>
        <h1>Every single voice MATTERS</h1>
        <div className={styles.formContainer}>
          <div>
            <img src={document} alt="" />
          </div>
          <div className={styles.form}>
            <h2>Inspire policy change</h2>
            <p>
              Send a letter to the leaders of your country to express your care for soil and request to enact policies
              that restore and safeguard soil.
            </p>
            <div className={styles.inputField}>
              <label htmlFor="">Select state:</label>
              <input type="text" name="state" onChange={changeHandler} />
            </div>
            <div className={styles.inputField}>
              <label htmlFor="">Your name:</label>
              <input type="text" name="name" onChange={changeHandler} />
            </div>
            <div className={styles.inputField}>
              <label htmlFor="">Your age:</label>
              <input type="number" name="age" onChange={changeHandler} id="" />
            </div>
            <h2 style={{ fontSize: '32px' }}>Appeal to your education minister for policy change</h2>
            <button onClick={handleSubmit}>Send Email</button>
            <div className={styles.checkField}>
              <div className={styles.checkFieldInputContainer}>
                <input type="checkbox" name="" id="" />
              </div>
              <label htmlFor="">I have sent my letter.</label>
            </div>
            <p>
              Feel free to use and personalize the suggested letter. Please acknowledge once you have sent your letter.
            </p>
          </div>
        </div>
      </div>
      {/* Reason */}
      <div className={styles.reasonContainer}>
        <h1>Why does this matter?</h1>
        <p>
          Since employment is a key source of identity and an organizational frame for daily life in our cultures,
          unemployed individuals suffer psychological and social distress. It is well researched that unemployment is
          connected with negative health consequences. Unemployment leads to stress-related illnesses and a lowered
          self-esteem as a result of unmet psychological and social needs in such contexts as: time structure, social
          interaction, common goals, status, identity, recognition and also uncertainty about the future, financial
          instability, and loss of vocational identity. That is why questions of coping become key issues.
        </p>
      </div>
    </section>
  );
};

export default Action;
