import React from 'react';
import { Reveal } from 'react-awesome-reveal';
import styles from './clients.module.css';

const data = [
  {
    img: 'https://s3.ajnavidya.com/ajnalens/home/clients/tata-steel.png',
    alt: 'Tata Steel',
  },
  {
    img: 'https://s3.ajnavidya.com/ajnalens/home/clients/logo-Mahindra.png',
    alt: 'Mahindra',
  },
  {
    img: 'https://s3.ajnavidya.com/ajnalens/home/clients/Vedanta.png',
    alt: 'Vedanta',
  },
  {
    img: 'https://s3.ajnavidya.com/ajnalens/home/clients/VR_Coating_Pvt_Ltd.png',
    alt: 'VR Coating Pvt Ltd',
  },
  {
    img: 'https://s3.ajnavidya.com/ajnalens/home/clients/TATA.png',
    alt: 'TATA',
  },
  {
    img: 'https://s3.ajnavidya.com/ajnalens/home/clients/The_President_India.png',
    alt: 'The President India',
  },
  {
    img: 'https://s3.ajnavidya.com/ajnalens/home/clients/PM_Experts.png',
    alt: 'PM Experts',
  },
  {
    img: 'https://s3.ajnavidya.com/ajnalens/home/clients/PM_Experts-1.png',
    alt: 'PM Experts',
  },
  {
    img: 'https://s3.ajnavidya.com/ajnalens/home/clients/Ministry_of_Defence.png',
    alt: 'Ministry of Defence',
  },
  {
    img: 'https://s3.ajnavidya.com/ajnalens/home/clients/Kohinglanj.png',
    alt: 'Kohinglanj',
  },
  {
    img: 'https://s3.ajnavidya.com/ajnalens/home/clients/Khodiyar_CAD_Center_Pvt_Ltd.png',
    alt: 'Khodiyar CAD Center Pvt Ltd',
  },
  {
    img: 'https://s3.ajnavidya.com/ajnalens/home/clients/Indian_navy.png',
    alt: 'Indian navy',
  },
  {
    img: 'https://s3.ajnavidya.com/ajnalens/home/clients/Indian_army.png',
    alt: 'Indian army',
  },
  {
    img: 'https://s3.ajnavidya.com/ajnalens/home/clients/Government_of_Maharashtra.png',
    alt: 'Government of Maharashtra',
  },
  {
    img: 'https://s3.ajnavidya.com/ajnalens/home/clients/Atop.png',
    alt: 'Atop',
  },
  {
    img: 'https://s3.ajnavidya.com/ajnalens/home/clients/cymax.png',
    alt: 'cymax',
  },
  {
    img: 'https://s3.ajnavidya.com/ajnalens/home/clients/Forge.png',
    alt: 'Forge',
  },
  {
    img: 'https://s3.ajnavidya.com/ajnalens/home/clients/D_Y_Patil_University.png',
    alt: 'D Y Patil University',
  },
  {
    img: 'https://s3.ajnavidya.com/ajnalens/home/clients/DRDO.png',
    alt: 'DRDO',
  },
  {
    img: 'https://s3.ajnavidya.com/ajnalens/home/clients/Betic.png',
    alt: 'Betic',
  },
  {
    img: 'https://s3.ajnavidya.com/ajnalens/home/clients/LnT.png',
    alt: 'LnT',
  },
];
const OurClients = () => {
  return (
    <div className={styles.clientsContainer}>
      <p className={styles.sectionGoal}>CLIENTS</p>
      <p className={styles.sectionHeading}>Our Clients</p>
      <div className={styles.clients}>
        <Reveal keyframes={styles.fadeInUp} delay={300} duration={800} triggerOnce>
          {data.map((item, index) => {
            return (
              <div className={styles.clientImageContainer}>
                <img src={item.img} alt={item.alt} />
              </div>
            );
          })}
        </Reveal>
      </div>
    </div>
  );
};

export default OurClients;
