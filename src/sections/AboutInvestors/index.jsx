import { Reveal } from 'react-awesome-reveal';
import InvestorsCard from '../../components/InvestorsCard';
import WhatPeopleSay from '../WhatPeopleSay';
import styles from './aboutInvestors.module.css';

const investors = [
  {
    name: 'Vijay Shekhar Sharma',
    role: 'Founder & CEO, PAYTM',
    image: 'https://s3.ajnavidya.com/ajnalens/about-us/vijay.png',
  },
  {
    name: 'Japan Vyas',
    role: 'Founder of Roots Ventures',
    image: 'https://s3.ajnavidya.com/ajnalens/about-us/japan.png',
  },
  {
    name: 'Chirayu Khimji',
    role: 'Khimji Ramdas Group',
    image: 'https://s3.ajnavidya.com/ajnalens/about-us/chirayu.png',
  },
  {
    name: 'Mohsin Hani AI Bahrani',
    role: 'MHD Group',
    image: 'https://s3.ajnavidya.com/ajnalens/about-us/mohsin.png',
  },
  {
    name: 'Nailesh Kanaksi Khimji',
    role: 'Khimji Ramdas',
    image: 'https://s3.ajnavidya.com/ajnalens/about-us/nailesh-khimji.png',
  },
  {
    name: 'Chetan Kajaria',
    role: 'MD at Kajaria Ceramics',
    image: 'https://s3.ajnavidya.com/ajnalens/about-us/chetan.png',
  },
  {
    name: 'Manish Bhatia',
    role: 'Bhatia Brothers - Dubai',
    image: 'https://s3.ajnavidya.com/ajnalens/about-us/manish.png',
  },
  {
    name: "Let's Venture",
    role: '',
    image: 'https://s3.ajnavidya.com/ajnalens/about-us/Lets%20Venture.jpg',
  },
  {
    name: 'Maharashtra Defence And Aerospace Venture Fund',
    role: '',
    image: 'https://s3.ajnavidya.com/ajnalens/about-us/maharashtra_defence.png',
  },
  {
    name: 'Udayat Venture',
    role: '',
    image: 'https://s3.ajnavidya.com/ajnalens/about-us/Udyat%20Venture.jpg',
  },
  {
    name: 'JITO Angel Network',
    role: '',
    image: 'https://s3.ajnavidya.com/ajnalens/about-us/JITO%20Angel%20Network.jpg',
  },
];

const AboutInvestors = ({ data, page }) => {
  return (
    <section className={styles.container}>
      <div className={styles.headingContainer}>
        <div className={styles.containerName}>Investors</div>
        <h2 className={styles.title}>Who believe in us</h2>
      </div>
      <Reveal keyframes={styles.fadeInUp} delay={400} duration={900} triggerOnce style={{ marginBottom: '120px' }}>
        <div className={styles.contentContainer}>
          {investors?.slice(0, 4)?.map((investor, idx) => (
            <InvestorsCard key={idx} name={investor.name} role={investor.role} image={investor.image} />
          ))}
        </div>
      </Reveal>
      <div style={{ display: 'block', overflow: 'hidden', width: '100%' }}>
        <WhatPeopleSay data={data} page={page} />
      </div>
      <Reveal keyframes={styles.fadeInUp} delay={400} duration={900} triggerOnce>
        <div className={styles.contentContainer}>
          {investors?.slice(4)?.map((investor, idx) => (
            <InvestorsCard key={idx} name={investor.name} role={investor.role} image={investor.image} />
          ))}
        </div>
      </Reveal>
    </section>
  );
};

export default AboutInvestors;
