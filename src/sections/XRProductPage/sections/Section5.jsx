import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import styled from 'styled-components';

import diopter from '../assets/images/DiopterLens.png';
import ajnaXr from '../assets/images/AjnaXROnTable.png';
import qualcommXr2 from '../assets/images/QualcommXR2.png';
import unlocked from '../assets/images/UnlockedState.png';
import locked from '../assets/images/LockedState.png';

const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  position: relative;
  padding-top: 75px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: #7000ff;
    font-style: normal;
    font-weight: 300;
    font-size: 48px;
    line-height: 114.9%;

    letter-spacing: 0.02rem;

    margin-bottom: 36px;
  }

  p {
    font-weight: 600;
    font-size: 21.6px;
    line-height: 114.9%;

    letter-spacing: 0.04rem;
    color: #0a0a0a;
    margin-bottom: 22px;
  }
`;

const ImageContainer = styled.div`
  display: block;
  overflow: hidden;
  width: 50%;

  img {
    width: 100%;
    height: 650px;
    object-fit: cover;
  }

  @media (max-width: 1540px) {
    width: 60%;
    img {
      height: 400px;
    }
  }
`;

const ImageContainer2 = styled.div`
  display: block;
  overflow: hidden;
  width: 40%;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

const ContentContainer = styled.p`
  width: 60%;
  text-align: center;
  font-weight: 400;
  font-size: 20.868px;
  line-height: 150%;
  color: #5d5d5d;
  margin-bottom: 50px;
`;

const FsImageContainer = styled.section`
  width: 100%;
  height: calc(100vh - 65px);
  overflow: hidden;
  background-color: #000;
  position: relative;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

const NamasteHeadingContainer = styled.div`
  position: absolute;
  top: 160px;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  p {
    color: #aeaeae;
    margin-bottom: 12px;
    font-size: 24px;
    line-height: 114.9%;
    letter-spacing: 0.04rem;
    text-transform: uppercase;
  }

  h1 {
    color: #fff;
    font-size: 64px;
    font-family: 'Roboto';
    font-weight: 300;
  }
`;

const Section2 = styled.section`
  width: 100%;
  min-height: 100vh;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 1540px) {
    min-height: 107vh;
  }
`;
// @media (max-width: 768px)

const DataSafeHeading = styled.h1`
  width: 100%;
  font-style: normal;
  font-weight: 300;
  font-size: 80px;
  line-height: 114.9%;

  letter-spacing: 0.02rem;

  color: #484848;
  margin-bottom: 24px;
  text-align: center;

  span {
    color: #000000;
    font-weight: 700;
  }
`;

const LastLine = styled.p`
  text-align: center;
  font-weight: 600;
  font-size: 20px;
  line-height: 114.9%;
  letter-spacing: 0.04rem;

  color: #050505;
  margin-bottom: 120px;
`;

const Section5 = () => {
  const sectionRef = useRef();
  const section2Ref = useRef();
  const headingRef = useRef();
  const imageRef = useRef();
  const featureImgRef = useRef();

  useLayoutEffect(() => {
    const Elem = sectionRef.current;
    const headingEl = headingRef.current;
    const featureImgEl = featureImgRef.current;

    let updaterFn = (headingText, image) => {
      if (headingText === ' ') {
        headingEl.innerText = ' ';
        // headingEl.style.display = "none";
      } else if (image === ' ') {
        featureImgEl.style.opacity = 0;
      } else {
        headingEl.style.display = 'block';
        headingEl.innerText = headingText;
        featureImgEl.src = image;
      }
    };

    // Pin the section
    gsap.to(Elem, {
      scrollTrigger: {
        trigger: Elem,
        start: 'top top',
        end: `+=${Elem.offsetWidth + 1000}`,
        scrub: 1,
        pin: true,
        pinSpacing: true,
        // markers: true,
      },
    });

    let t5 = gsap
      .timeline({
        scrollTrigger: {
          trigger: Elem,
          start: 'top top',
          end: `+=${Elem.offsetWidth + 1000}`,
          scrub: 1,
        },
      })
      .to(Elem, {
        onStart: updaterFn,
        onStartParams: ['DIOPTER LENSES', 'https://s3.ajnavidya.com/ajnalens/ajnaxr/floating/Diopter.gif'],
        onReverseComplete: updaterFn,
        onReverseCompleteParams: ['DIOPTER LENSES', 'https://s3.ajnavidya.com/ajnalens/ajnaxr/floating/Diopter.gif'],
      })
      .fromTo(
        headingEl,
        {
          y: '+=50',
          opacity: 0,
          scale: 0,
        },
        {
          y: '0',
          opacity: 1,
          scale: 1,
        }
      )
      .to(Elem, {
        onStart: updaterFn,
        onStartParams: ['DIOPTER LENSES', 'https://s3.ajnavidya.com/ajnalens/ajnaxr/floating/Diopter.gif'],
        onReverseComplete: updaterFn,
        onReverseCompleteParams: ['DIOPTER LENSES', 'https://s3.ajnavidya.com/ajnalens/ajnaxr/floating/Diopter.gif'],
      })
      .to(headingEl, {
        y: '-=100',
        opacity: 0,
        scale: 0,
      })
      .to(featureImgEl, {
        opacity: 0,
      })
      .to(Elem, {
        onStart: updaterFn,
        onStartParams: ['IPD Adjustment', 'https://s3.ajnavidya.com/ajnalens/ajnaxr/floating/IPD.gif'],
        onReverseComplete: updaterFn,
        onReverseCompleteParams: ['DIOPTER LENSES', 'https://s3.ajnavidya.com/ajnalens/ajnaxr/floating/Diopter.gif'],
      })
      .fromTo(
        headingEl,
        {
          y: '+=50',
          opacity: 0,
          scale: 0,
        },
        {
          y: '0',
          opacity: 1,
          scale: 1,
        }
      )
      .to(featureImgEl, {
        opacity: 1,
        scale: 1.1,
      })
      .to(Elem, {
        onStart: updaterFn,
        onStartParams: ['IPD Adjustment', 'https://s3.ajnavidya.com/ajnalens/ajnaxr/floating/IPD.gif'],
        onReverseComplete: updaterFn,
        onReverseCompleteParams: ['IPD Adjustment', 'https://s3.ajnavidya.com/ajnalens/ajnaxr/floating/IPD.gif'],
      })
      .to(headingEl, {
        opacity: 1,
        scale: 1,
      });

    return () => {
      if (t5) t5.kill();
    };
  }, []);

  useLayoutEffect(() => {
    const sectionEl = section2Ref.current;
    const imageEl = imageRef.current;

    const updateFn = (image) => {
      if (image === ' ') {
        imageEl.style.display = 'none';
      } else {
        imageEl.style.display = 'block';
        imageEl.src = image;
      }
    };

    // Pin the section
    gsap.to(sectionEl, {
      scrollTrigger: {
        trigger: sectionEl,
        start: 'top top',
        end: `+=${sectionEl.offsetWidth + 1000}`,
        scrub: 1,
        pin: true,
        pinSpacing: true,
        // markers: true,
      },
    });

    let t52 = gsap
      .timeline({
        scrollTrigger: {
          trigger: sectionEl,
          start: 'top top',
          end: `+=${sectionEl.offsetWidth + 1000}`,
          scrub: 1,
        },
      })
      .to(sectionEl, {
        onStart: updateFn,
        onStartParams: [unlocked],
        onReverseComplete: updateFn,
        onReverseCompleteParams: [unlocked],
      })
      .to(sectionEl, {
        onStart: updateFn,
        onStartParams: [locked],
        onReverseComplete: updateFn,
        onReverseCompleteParams: [unlocked],
      });

    return () => {
      if (t52) t52.kill();
    };
  }, []);

  return (
    <>
      <Section ref={sectionRef}>
        <HeadingContainer>
          <p>Adaptable to Your Eyes</p>
          <h1 ref={headingRef}>DIOPTER LENSES</h1>
        </HeadingContainer>
        <ContentContainer>
          64% of the adults wear prescription glasses. Wearing headsets is uncomfortable. The world needs headsets that
          are user-friendly. One that they can wear, without adding an extra layer
        </ContentContainer>
        <ImageContainer>
          <img
            src="https://s3.ajnavidya.com/ajnalens/ajnaxr/floating/Diopter.gif"
            alt="ajna xr diopter lenses and ipd adjustment"
            ref={featureImgRef}
          />
        </ImageContainer>
      </Section>
      <FsImageContainer>
        <video style={{ objectFit: 'cover' }} autoPlay loop muted>
          <source src="https://s3.ajnavidya.com/ajnalens/ajnaxr/ColourPassthroughVideo.mp4" type="video/mp4" />
        </video>
      </FsImageContainer>
      <FsImageContainer>
        <NamasteHeadingContainer>
          <p>DESIGNED TO ELEVATE YOUR PERFORMANCE</p>
          <h1>
            Say&nbsp;
            <span style={{ fontWeight: 700, fontFamily: 'Comfortaa' }}>Namaste</span>
            &nbsp;to Qualcomm XR2
          </h1>
        </NamasteHeadingContainer>
        <img src={qualcommXr2} alt="Say Namaste to Qualcomm XR2" />
      </FsImageContainer>
      <div style={{ height: '30vh' }} />
      <Section2 ref={section2Ref}>
        <DataSafeHeading>
          Your Data is&nbsp;<span>SAFE</span>&nbsp;with us
        </DataSafeHeading>
        <ContentContainer style={{ marginBottom: '24px' }}>
          Data privacy is not something you have to ask. It is yours and you have sole rights over it. We know, we
          understand and we protect it at the highest level possible
        </ContentContainer>
        <LastLine>No Social Sign-in Required | No Personal Data Shared</LastLine>
        <ImageContainer2>
          <img src={unlocked} alt="Locked data" ref={imageRef} />
        </ImageContainer2>
      </Section2>
    </>
  );
};

export default Section5;
