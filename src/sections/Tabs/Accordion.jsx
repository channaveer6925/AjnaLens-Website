import React, { useState } from 'react';
import styled from 'styled-components';
import style from './accordion.css';
import dropIcon from '../../asets/defence/image5.png';

const tabs = [
  {
    title: 'Mission Planing',
    content: (
      <>
        <p>
          Anticipating threats and responding decisively represents a major challenge for military decision-makers. With
          the advancement in technologies, mission planning can become faster and more accurate than ever, minimizing
          the resources needed for effective delivery. AjnaLens' Holographic Sandbox enables users to visualize
          battlefields by using head-mounted displays (HMDs), eliminating the need to build sandbox manually, thereby
          saving time and money.
        </p>
      </>
    ),
  },
  {
    title: 'Enhanced Navigation',
    content: (
      <p>
        On-field operations are often affected by a lack of live navigation cues in unknown terrains or indoor scenarios
        and deterioration of visibility in adverse conditions. AjnaESAS enables the crew to eliminate blind spots in the
        darkest, most obscured conditions. It provides the crew with a 360° field of view from inside the tank (or any
        armored vehicle), increasing survivability and mobility, thereby turning situational awareness into a
        situational advantage.
      </p>
    ),
  },
  {
    title: 'Guided Assembly',
    content: (
      <p>
        Assembly, repair and maintenance are one of the major components of the success of defense systems. Risk
        mitigation is essential, and while engineers may be experts, human error is inevitable. AjnaBolt removes all of
        the guesswork from the operation. It gives mechanics the ability to know the exact size and location of where
        every bolt should be placed, without ever having to take their eyes off of the task at hand
      </p>
    ),
  },
  {
    title: 'Advanced Training',
    content: (
      <p>
        Conventional mission training is time-consuming, costly and suffers from difficulty in simulating all real
        combat scenarios. With the use of an AR/VR system, soldiers can be trained in a more immersive way, putting them
        into more physically and mentally stressful operational environments. Our team aims to provide all training
        environments with open architecture and an intuitive interface. The platform ensures that various environments
        having different complexities in terms of combat operations are integrated to prepare warfighters for
        multi-domain battles.
      </p>
    ),
  },
];

const AccordionSection = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background: #fff;
`;
const Container = styled.div`
  width: 100%;
  top: 30%;
`;
const Wrap = styled.div`
  background: #2e2e2e;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
  border-bottom: 1px solid #ebebeb;
`;

const Dropdown = styled.div`
  background: #2e2e2e;
  color: #00ffb9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #ebebeb;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0.04em;
  color: #ffffff;
  p {
    font-size: 1rem;
    padding: 1rem 0rem;
  }
  h3 {
    font-size: 1rem;
    padding: 1rem 0.5rem;
  }
`;

const ColoredHeading = styled.div`
  color: #a966ff;
  font-weight: 600;
  font-size: 24px;
  letter-spacing: 0.04em;
  padding: 1rem 0;
`;

const NormalHeading = styled.div`
  color: 'white';
  font-weight: 600;
  font-size: 24px;
  letter-spacing: 0.04em;
  padding: 1rem 0;
`;
const Accordion = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };
  return (
    <div className={style.mainContainer}>
      <AccordionSection>
        <Container>
          {tabs.map((item, index) => {
            return (
              <>
                <Wrap onClick={() => toggle(index)}>
                  {clicked === index ? (
                    <>
                      <ColoredHeading>{item.title}</ColoredHeading>
                      {/* icon */}
                      <img src={dropIcon} style={{ rotate: '180deg',transition:'0.5s' }} alt="dropdown" />
                    </>
                  ) : (
                    <>
                      <NormalHeading>{item.title}</NormalHeading>
                      <img src={dropIcon} alt="dropdown" />
                      {/* icon */}
                    </>
                  )}
                </Wrap>
                {clicked === index ? <Dropdown>{item.content}</Dropdown> : null}
              </>
            );
          })}
        </Container>
      </AccordionSection>
    </div>
  );
};

export default Accordion;
