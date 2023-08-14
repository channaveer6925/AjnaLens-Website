import React from 'react';
import DefenceTabs from './DefenceTabs';


const tabs = [
  {
    title: 'Mission Planing',
    content: (
      <>
        <h3 style={{ fontSize: '20px', fontWeight: 700, letterSpacing: '0.02em' }}>
          Mission Planning 2.0 with Holographic Sandbox
        </h3>
        <p style={{ fontSize: '18px', fontWeight: 400, letterSpacing: '0.04em' }}>
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
      <p style={{ fontSize: '18px', fontWeight: 400, letterSpacing: '0.04em' }}>
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
      <p style={{ fontSize: '18px', fontWeight: 400, letterSpacing: '0.04em' }}>
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
      <p style={{ fontSize: '18px', fontWeight: 400, letterSpacing: '0.04em' }}>
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

const TabsComponent = () => {
  return (
    <div>
      <DefenceTabs tabs={tabs} />

    </div>
  );
};

export default TabsComponent;
