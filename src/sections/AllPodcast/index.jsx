import { useEffect, useState } from 'react';
import PillBox from '../../components/PillBox';
import PodCard from '../../components/PodCard';
import styles from './allPodcast.module.css';
import featuredPod from '../../asets/FeaturedPod.png';

const filters = [
  {
    id: 1,
    value: 'all',
    name: 'All',
  },
  {
    id: 2,
    value: 'xr_technology',
    name: 'XR Technology',
  },
  {
    id: 3,
    value: 'metaverse',
    name: 'Metaverse',
  },
  {
    id: 4,
    value: 'ai',
    name: 'Artificial Intelligence',
  },
  {
    id: 5,
    value: 'business',
    name: 'Business',
  },
];

const podcasts = [
  {
    id: 1,
    link: 'https://www.youtube.com/watch?v=bKGuoHRUEiM',
    title: 'From Cad to Mixed Reality: Conversion of 3D Models to 3D Holograms',
    ft: 'Bhagyesh Patel',
    length: '28:28',
    category: 'xr_technology',
    image: 'https://s3.ajnavidya.com/ajnalens/podcasts/from%20CAD%20TO%203DHOLOGRAM.JPG',
  },
  {
    id: 2,
    link: 'https://www.youtube.com/watch?v=ro_GdvPYJ10',
    title: 'Life in 2030: Autonomous Cars to Human-AI collaboration',
    ft: 'Gaurav Singh',
    length: '41:47',
    category: 'ai',
    image: 'https://s3.ajnavidya.com/ajnalens/podcasts/Autonomous%20Cars%20to%20Human-AI%20collaboration.jpg',
  },
  {
    // id: 3 -> img needs to change
    id: 3,
    link: 'https://www.youtube.com/watch?v=miGfmBvRzyo',
    title: 'Computer Vision in Artificial Intelligence: In Theory & Real Life',
    ft: 'Saurabh Pandey',
    length: '49:36',
    category: 'ai',
    image: 'https://s3.ajnavidya.com/ajnalens/podcasts/Human%20AI%20Collaboration.jpg',
  },
  {
    id: 4,
    link: 'https://www.youtube.com/watch?v=_I6bS5_lifQ',
    title: 'Augmented Reality & the future | Rise of AR in India',
    ft: 'Divyanshu Varshney',
    length: '35:29',
    category: 'xr_technology',
    image: 'https://s3.ajnavidya.com/ajnalens/podcasts/Rise%20of%20ar%20in%20inda.jpg',
  },
  {
    id: 5,
    link: 'https://www.youtube.com/watch?v=ikCF05_SIiM',
    title: 'Introduction to emerging XR Technologies and Global Trends',
    ft: 'Eddie Avil',
    length: '53:24',
    category: 'xr_technology',
    image: 'https://s3.ajnavidya.com/ajnalens/podcasts/emerging%20xr%20technologies.jpg',
  },
  {
    id: 6,
    link: 'https://www.youtube.com/watch?v=5HXN9CvUBiQ',
    title: 'XR technologies Blur lines between virtual world and reality: Future of Immersive Technologies',
    ft: 'Abhishek Gupta',
    length: '41:35',
    category: 'xr_technology',
    image: 'https://s3.ajnavidya.com/ajnalens/podcasts/Future%20of%20immersive%20technologies.jpg',
  },
];

const PodcastSection = ({ filterName, data }) => {
  if (data.length) {
    return (
      <div className={styles.podcastContainer}>
        <h3 className={styles.podcastHeader}>{filterName}</h3>
        <div className={styles.podcasts}>
          {data.map((podcast) => (
            <PodCard
              key={`podcast-${podcast.id}`}
              title={podcast.title}
              ft={podcast.ft}
              link={podcast.link}
              length={podcast.length}
              image={podcast.image}
              category={filterName}
            />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className={styles.podcastContainer}>
      <h3 className={styles.podcastHeader}>{filterName}</h3>
      <div className={styles.noPod}>No podcasts to show</div>
    </div>
  );
};

const AllPodcast = () => {
  const [selectedFilter, setSelectedFilter] = useState(1);
  const [filteredPodcasts, setFilteredPodcasts] = useState([
    {
      filterName: '',
      data: [],
    },
  ]);

  const clickHandler = (id) => {
    setSelectedFilter(id);
  };

  const filterPodcasts = (filterId, podcasts) => {
    if (filterId === 1) {
      const result = [];
      for (let filter of filters) {
        if (filter.value === 'all') {
          continue;
        }
        const value = filter.value;
        const name = filter.name;

        const res = podcasts.filter((item) => item.category === value);

        result.push({
          filterName: name,
          data: res,
        });
      }
      setFilteredPodcasts(result);
    } else {
      const result = [];
      const filter = filters.find((item) => item.id === filterId);

      const res = podcasts.filter((item) => item.category === filter.value);

      result.push({
        filterName: filter.name,
        data: res,
      });

      setFilteredPodcasts(result);
    }
  };

  useEffect(() => {
    filterPodcasts(selectedFilter, podcasts);
  }, [selectedFilter]);

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>All Podcast</h2>
      <div className={styles.filters}>
        {filters.map((filter) => (
          <PillBox
            key={`filter-${filter.id}`}
            value={filter.value}
            name={filter.name}
            id={filter.id}
            onClick={clickHandler}
            selected={selectedFilter}
          />
        ))}
      </div>
      {filteredPodcasts.map((item, idx) => (
        <PodcastSection key={`podcastSection-${idx}`} filterName={item.filterName} data={item.data} />
      ))}
    </section>
  );
};

export default AllPodcast;
