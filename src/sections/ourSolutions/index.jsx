import React from 'react';
import style from './ourSolutions.module.css';
import tank1 from '../../asets/defence/defTank1.png';
import image4 from '../../asets/defence/image4.png';
import descImage2 from '../../asets/defence/Image2.png';
import descImage3 from '../../asets/defence/Image3.png';
import TabsComponent from '../Tabs';
import Accordion from '../Tabs/Accordion';

const OurSolutions = () => {
  return (
    <div>
      <div className={style.container}>
        {/* sec0 */}
        <div className={style.headingSec}>
          <h1 className={style.heading}>
            New-age Defense System Powered By <span style={{ color: '#A966FF' }}>Mixed Reality and AI</span>
          </h1>
        </div>

        <div className={style.sec1}>
          <div className={style.sec0Img}>
            <img src={image4} alt="New-age Defense System Powered By Mixed Reality and AI" />
          </div>

          <div className={style.sec0Desc}>
            <article className={style.sec1DescContent}>
              In a crisis situation, cognitive overload can occur when there is an information excess and a lack of
              clarity. Our defence solutions can combat the challenges and enable military personnel to make
              well-informed decisions faster by heightening human intelligence.
              <br />
              <br />
              Our modular designs improve mission effectiveness by reinforcing the existing defence systems. Designed
              with military-grade materials, our products work in adverse weather conditions and improve soldiers’
              battlefield awareness.
            </article>
          </div>
        </div>

        {/* our Solutions */}
        <div className={style.OurSolutionsHeading}>
          <h1 className={style.heading}>Our Solutions</h1>
        </div>
        {/* sec1 */}
        <div className={style.sec1}>
          <div className={style.sec1Img}>
            <img src={tank1} alt="Enhanced situational awareness technology" />
          </div>
          <div className={style.sec1Desc}>
            <h1 className={style.sec1DescHeading}>Enhanced Situational Awareness System</h1>
            <article className={style.sec1DescContent}>
              Ajna Enhanced Situational Awareness System (AjnaESAS) utilizes Artificial Intelligence and Augmented
              Reality technology to navigate vehicles through challenging terrains by eliminating blind spots and
              providing clear imagery even in the most obscured conditions. AjnaESAS comprises an intricate camera
              system and an AR Head-Mounted display, equipping the driver with a 360-degree horizontal view. It is a
              pragmatic, ultra-modern tech that can be customized to suit the mission and vehicle type.
            </article>
          </div>
        </div>

        {/* sec2 */}
        <div className={style.sec2}>
          <div className={style.sec1Desc}>
            <h1 className={style.sec1DescHeading}>Upgrade Weapon Systems With Mixed Reality</h1>
            <article className={style.sec1DescContent}>
              AjnaBolt improves weapon systems with features like thermal sensors, friendly and enemy detection (IFF),
              Lidar, Blue Force Tracking, and many more. Fair-weather weapons can be effectively upgraded to all-weather
              weapons, providing visual assistance in locating, locking, and engaging targets. AjnaBolt facilitates
              decisive responses with more precision, enhancing mission efficiency.
            </article>
          </div>
          <div className={style.sec1Img}>
            <img src={descImage2} alt="Upgrade Weapon Systems With Mixed Reality" />
          </div>
        </div>

        {/* sec3 */}
        <div className={style.sec31}>
          <h1 className={style.sec31Heading}>Upgrade Forces</h1>
          <article className={style.sec31Desc}>
            AjnaLens’ military systems equipped with AI and AR technology enhances human decision-making capabilities
            and performance, reinforcing mission effectiveness. Our systems are designed to provide soldiers and special
            forces with advanced lethality, thereby increasing survivability and mission capability. It improves the
            soldiers’ battlefield awareness, eases loadout, and enables them to accomplish the mission more efficiently.
          </article>
        </div>

        {/* sec4 */}
        <div className={style.sec32}>
          <div className={style.sec32Img}>
            <img src={descImage3} alt="Mixed reality for defence mission" />
          </div>
          {/* tabs */}
          <div className={style.mainTab}>
            {/* desktop view */}

            <div className={style.tabsComponent}>
              <TabsComponent />
            </div>

            {/* mobile Accordian */}

            <div className={style.accordion}>
              <Accordion />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurSolutions;
