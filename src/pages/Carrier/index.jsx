import React, { useEffect, useLayoutEffect } from 'react';
import CarrierHead from '../../sections/CarrierHead';
import CarrierHiring from '../../sections/CarrierHiring';
import JobSearch from '../../sections/CarrierJobSearch';
import CarrierTestimonials from '../../sections/CarrierTestimonials';
import CoreValue from '../../sections/CoreValue';
import styles from './styles.module.css';
import { WhatPeopleSay } from '../../sections';
import CarrierImageGallary from '../../sections/CarrierImageGallary';
import CompanyLogoImg from '../../asets/TataMotors.svg';
import JoinMission from '../../components/JoinMission';
import { Reveal } from 'react-awesome-reveal';
import useDocumentTitle from '../../hooks/useDocumentTitle';

const data = [
  {
    id: 1,
    testimonial:
      'We say the office is our second home. Felt this only after I joined AjnaLens. Not just because I spend most of our time there but because it is surrounded by people who genuinely care. The best workplace you will ever come across',
    author: 'Krishna',
    companyLogo: CompanyLogoImg,
  },
  {
    id: 2,
    testimonial:
      'I have been part of AjnaLens for the past 6 years and there has not been a single day when I have not felt immense pride to be working with such visionaries towards such a great vision. The impact that we want to bring in society with our technology solutions is nothing less than revolutionary and that is where we believe India should be, at the helm of the next technological revolution',
    author: 'Yukti Suri',
    companyLogo: CompanyLogoImg,
  },
  {
    id: 3,
    testimonial:
      "AjnaLens is creating a massive positive impact at the grassroots level by upgrading training institutes and businesses with AR/VR solutions. It is the only company in India that's manufacturing augmented reality and virtual reality glasses in India. Im proud to be associated with AjnaLens and serving the nation in my full capacity",
    author: 'Rishi Desai',
    companyLogo: CompanyLogoImg,
  },
  {
    id: 4,
    testimonial:
      'A place where great vision and technology come together. I feel pride to see the next generation of technology emerging from India and solving world problems!🇮🇳',
    author: 'Pranav Kulkarni',
    companyLogo: CompanyLogoImg,
  },
  {
    id: 5,
    testimonial:
      "I am very happy to be associated with AjnaLens (Dimension NXG Pvt Ltd) as it's the only Company in India that manufactures AR, VR & MR glasses/headsets. It feels like family & very proud working here",
    author: 'Rutuja Patil',
    companyLogo: CompanyLogoImg,
  },
  {
    id: 6,
    testimonial:
      'Ajnalens is a great place to work. It is solving a global problem by the upskilling workforce and augmenting intelligence with XR technology',
    author: 'Deepak Bhole',
    companyLogo: CompanyLogoImg,
  },
  {
    id: 7,
    testimonial:
      'A complete package of spiritual and professional work experience, a lot of work of AjnaLens is not getting the highlight that it should have',
    author: ' Suraj Patil',
    companyLogo: CompanyLogoImg,
  },
];
const Carrier = () => {
  useDocumentTitle(`Careers at AjnaLens - Join India's Top AR/VR Company`);
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className={`career ${styles.career}`}>
        <Reveal keyframes={styles.fadeInUp} delay={400} duration={900} triggerOnce>
          <CarrierHead />
        </Reveal>
        <JobSearch />
        <Reveal keyframes={styles.fadeInUp} delay={400} duration={900} triggerOnce>
          <CarrierHiring />
        </Reveal>
        <CarrierImageGallary />
        <Reveal keyframes={styles.fadeInUp} delay={400} duration={900} triggerOnce>
          <CoreValue />
        </Reveal>
        <p className={styles.testimonialHead}>TESTIMONIAL</p>
        <WhatPeopleSay data={data} />
        <CarrierTestimonials />
      </div>
      <JoinMission ButtonText="Join us" link="/" />
    </>
  );
};

export default Carrier;
