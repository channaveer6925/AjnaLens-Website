import {
  AllPodcasts,
  BehindTheMic,
  FeaturedPodcasts,
  OurGuests,
  PodcastsHeroSection,
  WhatPeopleSay,
} from '../../sections';
import styles from './podcasts.module.css';
import CompanyLogoImg from '../../asets/TataMotors.svg';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import { useLayoutEffect } from 'react';
const data = [
  {
    id: 1,
    testimonial:
      'Extended reality is the direction that I think is far more interesting and promising - for technology and, really, for humanity alike. I truly think that AjnaLens is now building the best backend solution for the met frontend industry of all time They have already proven their man developing very high-quality AR products for the defence sector.',
    author: 'Amey Belorkar, VP at IDBI Capital Markets & Securities Ltd',
    companyLogo: CompanyLogoImg,
  },
  {
    id: 2,
    testimonial:
      'I met team Ajnalens in 2016 and the vision was on the drawing board. I saw the team had dreams to make the vision into reality. I invested in the team believing in their ability to adapt and willingness to learn and change. And that stands out as of the biggest strengths. The future knowledge work is remote and AjnaLens is accelerating this transition with its vibrant team.',
    author: 'Jay Jesrani',
    companyLogo: CompanyLogoImg,
  },
  {
    id: 3,
    testimonial:
      'Technology has always revolutionised the way we work, live and play; consider computers, smartphones and more. I truly believe that augmented reality is the next frontier in computing and is already on the AR will shape how humans communicate and collaborate. Having watched this space closely, AjnaLens is now at its inflation point and is about to follow an exponential growth trajectory due to the traction we have seen in the Indian market. I have complete faith in the AjnaLens Team that they will create this future for the world, starting from India',
    author: 'Chirayu Khimji, Khimji Ramdas Group',
    companyLogo: CompanyLogoImg,
  },
];
const Podcasts = () => {
  useDocumentTitle('Podcast');
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={`podcasts-page ${styles.podcastsPage}`}>
      <PodcastsHeroSection />
      <FeaturedPodcasts />
      <AllPodcasts />
      <BehindTheMic />
      <OurGuests />
      <WhatPeopleSay data={data} />
    </div>
  );
};

export default Podcasts;
