import React, { useLayoutEffect, useState } from 'react';
import style from './ourStory.module.css';
import ourjourney from '../../asets/ourjourney.svg';
import JoinMission from '../../components/JoinMission';
import useDocumentTitle from '../../hooks/useDocumentTitle';

const OurStory = () => {
  useDocumentTitle('Story of AjnaLens: Augmenting Human Intelligence');
  const [viewless, setViewless] = useState(false);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={style.container}>
      <div className={style.bannerImage}>
        <div className={style.img1}>
          <img
            width="100%"
            height="100%"
            src="https://s3.ajnavidya.com/ajnalens/ourstory/Ajna%20Chakra%20Vision%20behind%20AjnaLens.jpg"
            alt="BannaerImage"
          />
        </div>
      </div>
      <div className={style.ourstory}>
        <div className={style.ourstoryTxt}>
          <p>Our Story</p>
        </div>
        <div className={style.howallits}>
          <p>How it all started</p>
        </div>
        <article className={style.ourStoryartical}>
          Inspired and motivated by the capabilities of a human to evolve and do things beyond imagination, AjnaLens was
          born. Ajna represents the sixth primary chakra, or the third eye, whereas Lens stands for next-generation
          wearable technology. The two, when put together, can transform human lives, empowering and enabling them to
          unleash their potential and reach the highest version of themselves. And that is what forms the base of
          everything that we have done or will do. AjnaLens' AR glasses were born as a catalyst to outperform in work
          and personal lives. What initially started as a revolutionary tool for the defence sector proved invaluable
          and expanded into enterprise and training sectors. The make-in-India, for-the-world vision emanated in our
          experts' minds, creating newer avenues of innovation and growth in the tech space. Pushing our own limits and
          setting standards, we built the industry’s first metaverse training platform, redefining the entire learning
          ecosystem. AjnaLens seeks to lead by example, making immersive learning the new form of skill training. Our
          technology has proven especially beneficial across all sectors (enterprise, defence, educational, etc.), and
          we constantly strive to push the boundaries through our advanced hardware and customised software solutions.
          The future is now, and AjnaLens creates a new technological frontier, transforming societies for the better.
        </article>
      </div>
      {/* founders */}
      <div className={style.founders}>
        <div className={style.founderTxt}>
          <p>FOUNDERS</p>
        </div>
        <div className={style.meetfounders}>
          <p>Meet our founders</p>
        </div>
        {/* flex wrap */}
        <div className={style.founderCont}>
          <div className={style.founder1}>
            <div className={style.founderImg}>
              <img src="https://s3.ajnavidya.com/ajnalens/ourstory/Pankaj%20Raut.png" alt="founder3" />
            </div>
            <div className={style.nameposition}>
              <p className={style.name}>Pankaj Raut</p>
              <p className={style.position}>Co-Founder, CEO</p>
            </div>
            <div className={style.line}></div>
            <div className={style.desc}>
              <p>
                Pankaj is the Co-founder and CEO of AjnaLens (Dimension NXG). Heading the marketing and business
                development activities with his expertise, he is driven by the vision to create grassroots-level impact.
                He wears an innate desire to facilitate positive change in people's lives, building a world where every
                individual is self-sustainable and capable of fulfilling their own basic needs.
              </p>
            </div>
          </div>
          {/* 2nd */}
          <div className={style.founder1}>
            <div className={style.founderImg}>
              <img src="https://s3.ajnavidya.com/ajnalens/ourstory/Abhishek%20Tomar.png" alt="founder3" />
            </div>
            <div className={style.nameposition}>
              <p className={style.name}>Abhishek Tomar</p>
              <p className={style.position}>Co-Founder, CTO</p>
            </div>
            <div className={style.line}></div>
            <div className={style.desc}>
              <p>
                Abhishek is the Co-founder and CTO of AjnaLens (Dimension NXG). His skillset specialises in computer
                vision & computer graphics, and his AR+AI work has been featured in award-winning films & computer
                games. He is the spiritual core techie behind all IPs & various algorithms deployed on our wearables.
              </p>
            </div>
          </div>

          <div className={style.founder1}>
            <div className={style.founderImg}>
              <img src="https://s3.ajnavidya.com/ajnalens/ourstory/Abhijit%20Patil.png" alt="founder1" />
            </div>
            <div className={style.nameposition}>
              <p className={style.name}>Abhijit Patil</p>
              <p className={style.position}>Co-Founder, COO</p>
            </div>
            <div className={style.line}></div>
            <div className={style.desc}>
              <p>
                Abhijit is the Co-founder and Chief Operating Officer of AjnaLens (Dimension NXG) and serves on its
                Board of Directors. As COO of India's leading AI-powered Mixed Reality company, he leads a talented
                workforce of industrious employees with his diverse industry and functional expertise and is committed
                to driving business, profit and market share growth.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={style.ourjourney}>
        <div className={style.timeline}>TIMELINE</div>
        <div className={style.sofar}>Our journey so far</div>
        <div className={style.journeyImgCont}>
          <div className={style.deskjourneyImg}>
            <img src="https://s3.ajnavidya.com/ajnalens/ourstory/time-line-desktop.png" alt="" />
          </div>
          {viewless ? <div className={style.pathImag}></div> : <div className={style.pathImag1}></div>}
        </div>
        <div className={style.viewlesBtn} style={viewless ? { marginTop: '-100px' } : { marginTop: '2rem' }}>
          <button onClick={() => setViewless(!viewless)} className={style.viewbutton}>
            {viewless ? <div>View Less Timeline</div> : <div>View Full Timeline</div>}
          </button>
        </div>
      </div>
      <JoinMission ButtonText="Search open roles" link="/careers" />
    </div>
  );
};

export default OurStory;
