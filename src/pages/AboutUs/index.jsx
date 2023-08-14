import {
  AboutIncubators,
  AboutInvestors,
  AboutKeyHighlights,
  AboutUsHero,
  AboutUsMission,
  AboutUsPurpose,
} from '../../sections';
import styles from './aboutUs.module.css';
import CompanyLogoImg from '../../asets/TataMotors.svg';
import JoinMission from '../../components/JoinMission';
import { Reveal } from 'react-awesome-reveal';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import SupportEcosystem from '../../sections/SupportEcosystem/index';
import { useLayoutEffect } from 'react';

const slideData = [
  {
    img: 'https://s3.ajnavidya.com/ajnalens/about-us/key-highlights/Abhijit%20Receiving%20Graham%20Bell%20Innovation%20Award.JPG',
    // caption: 'Show casing the product to Dr. APJ Abdul Kalam',
  },
  {
    img: 'https://s3.ajnavidya.com/ajnalens/about-us/key-highlights/Abhijit%20with%20APJ%20Sir.jpg',
    caption: 'Abhjith with President of India Shri APJ Abdul Kalam',
    //   'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nulla.',
  },
  {
    img: 'https://s3.ajnavidya.com/ajnalens/about-us/key-highlights/Abhijit%20with%20CII%20award.jpg',
    // caption: 'Lorem ipsum dolor sit amet consectetur.',
  },
  {
    img: 'https://s3.ajnavidya.com/ajnalens/about-us/key-highlights/Abhishek%20Tomar.JPG',
    // caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    img: 'https://s3.ajnavidya.com/ajnalens/about-us/key-highlights/Business%20Outlook.jpg',
    // caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    img: 'https://s3.ajnavidya.com/ajnalens/about-us/key-highlights/Defexpo_Launch_PMmodi.PNG',
    caption: 'Indian prime Minister at Ajnalens',
  },
  {
    img: 'https://s3.ajnavidya.com/ajnalens/about-us/key-highlights/Defexpo_MoU.jpeg',
    // caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    img: 'https://s3.ajnavidya.com/ajnalens/about-us/key-highlights/Frost%20and%20Sullivan%20award.jpeg',
    // caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    img: 'https://s3.ajnavidya.com/ajnalens/about-us/key-highlights/Maharashtra%20Startup%20Award.JPG',
    // caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    img: 'https://s3.ajnavidya.com/ajnalens/about-us/key-highlights/PM%20Ajnalens.jpg',
    caption: 'PM trying India’s first ar Headset',
  },
  {
    img: 'https://s3.ajnavidya.com/ajnalens/about-us/key-highlights/Presenting%20at%20ARVR%20Conference.jpg',
    // caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    img: 'https://s3.ajnavidya.com/ajnalens/about-us/key-highlights/Raksha%20Mantri_AeroIndia2021.jpeg',
    caption: 'Indian Defence trying India’s First AR glasses',
  },
];
const testimonialData = [
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

const AboutUs = () => {
  useDocumentTitle('About AjnaLens');
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className={styles.container}>
        <AboutUsHero />
        <Reveal keyframes={styles.fadeInUp} delay={200} duration={900} triggerOnce>
          <AboutUsMission />
        </Reveal>
        <AboutUsPurpose />
        <AboutKeyHighlights slides={slideData} />
        <AboutInvestors data={testimonialData} page="aboutus" />
        {/* Support ecosystem section */}
      </div>
      <SupportEcosystem />
      <JoinMission ButtonText="Join us" link="/careers" />
    </>
  );
};

export default AboutUs;
