import styles from './behindTheMic.module.css';
import StakeholdersCard from '../../components/StakeholdersCard';

const data1 = [
  {
    name: 'Rishi Desai',
    role: 'Marketing and Growth @AjnaLens',
    image: 'https://s3.ajnavidya.com/ajnalens/podcasts/behind-the-mic/Rishi%20Desai.png',
  },
  {
    name: 'Pankaj Raut',
    role: 'Co-Founder, CEO @AjnaLens',
    image: 'https://s3.ajnavidya.com/ajnalens/podcasts/behind-the-mic/Pankaj.jpg',
  },
  {
    name: 'Yukti Suri',
    role: 'Tech Lead @AjnaLens',
    image: 'https://s3.ajnavidya.com/ajnalens/podcasts/behind-the-mic/Yukti%20Suri.jpg',
  },
];

const BehindTheMic = () => {
  return (
    <section className={styles.behindTheMic}>
      <h2 className={styles.title}>Behind The Mic</h2>
      <div className={styles.contentContainer}>
        {data1.map((stakeholder, index) => (
          <StakeholdersCard key={index} name={stakeholder.name} role={stakeholder.role} image={stakeholder.image} />
        ))}
      </div>
    </section>
  );
};

export default BehindTheMic;
