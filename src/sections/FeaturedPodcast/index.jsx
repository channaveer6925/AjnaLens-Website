import FeaturedPodCard from '../../components/FeaturedPodCard';
import featuredPod from '../../asets/FeaturedPod.png';

import styles from './featuredPodcast.module.css';

const data = {
  coverImg: featuredPod,
  title: 'XR technologies blur lines between virtual world and reality : Future of Immersive Technologies',
  desc: 'The Netflix show BlackMirror has pushed the boundaries of immersive technologies and made us rethink about implications of intelligent technologies. The main point of attraction is how the lines between the virtual and real world are getting blurred. Augmented reality and virtual reality are compelling technologies that enhance the way we interact with the real world. But when combined with AI, Mixed Reality can provide ultra-realistic interactive experiences that can easily confuse our senses between what is real and what is not. In this episode of Talk 4.0, we have Abhishek Gupta, Founder of Greykernel with Rishi Desai, Marketing and Growth Manager @AjnaLens who will take you deeper into the world of Immersive Technologies.',
  length: '41:35',
  primaryBtnText: 'Watch Now',
  link: 'https://www.youtube.com/watch?v=5HXN9CvUBiQ',
};

const truncateDesc = (desc) => (desc.length > 150 ? `${desc.substring(0, 151)}...` : desc);

const FeaturedPodcast = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Featured Podcast</h2>
      <FeaturedPodCard
        coverImg={data.coverImg}
        title={data.title}
        desc={truncateDesc(data.desc)}
        length={data.length}
        primaryBtnText={data.primaryBtnText}
        link={data.link}
      />
    </section>
  );
};

export default FeaturedPodcast;
