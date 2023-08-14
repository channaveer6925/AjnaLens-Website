import React, { useLayoutEffect } from 'react';
import Ajnabolt from '../../sections/Ajnabolt_defence';
import Contactus from '../../sections/Contact-us_defence';
import ContactForm from '../../sections/ContactUs';
import DefenceHero from '../../sections/Defence';
import OurSolutions from '../../sections/ourSolutions';
import style from './index.module.css';
import useDocumentTitle from '../../hooks/useDocumentTitle';
const Defence = () => {
  useDocumentTitle(`Revolutionising Indian Defence with AR/VR solutions | Mixed Reality in Defence in India`);
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={style.container}>
      <DefenceHero />
      <OurSolutions />
      <Ajnabolt />
      <Contactus />
      {/* <ContactForm /> */}
    </div>
  );
};

export default Defence;
