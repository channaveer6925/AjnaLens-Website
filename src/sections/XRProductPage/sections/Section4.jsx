import gsap from 'gsap';
import { useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';

import betterDisplay from '../assets/images/BetterDisplay.png';
import higherRes from '../assets/images/HigherRes.png';
import muchMore from '../assets/images/MuchMore.png';
import features from '../assets/images/Features.png';
import clarity from '../assets/images/clarity.gif';

const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const HeadingContainer = styled.h1`
  width: 60%;
  text-align: center;
  margin-bottom: 45px;
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 114.9%;
  letter-spacing: 0.02rem;

  color: #5d5d5d;
`;

const ChangingTextContainer = styled.div`
  width: 60%;
  height: 90px;
  display: flex;
  justify-content: center;
  overflow: hidden;

  img {
    height: 100%;
    object-fit: cover;
  }
`;

const ImageContainer = styled.div`
  width: 70%;
  overflow: hidden;
  display: block;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

const Section4 = () => {
  const sectionRef = useRef();
  const imgRef = useRef();
  const featureImgRef = useRef();

  useLayoutEffect(() => {
    const Elem = sectionRef.current;
    const imageEl = imgRef.current;

    let updaterFn = (image) => {
      Elem.style.backgroundColor = 'white';
      if (image === ' ') {
        imageEl.style.display = 'none';
      } else {
        imageEl.style.display = 'block';
        imageEl.src = image;
      }
    };

    let lastUpdate = () => {
      Elem.style.backgroundColor = 'white';
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

    let t4 = gsap
      .timeline({
        scrollTrigger: {
          trigger: Elem,
          start: 'top top',
          end: `+=${Elem.offsetWidth + 1000}`,
          scrub: 1,
          // markers: true,
        },
      })
      .set(Elem, { transformOrigin: 'center bottom' })
      .to(Elem, {
        onStart: updaterFn,
        onStartParams: [' '],
        onReverseComplete: updaterFn,
        onReverseCompleteParams: [' '],
      })
      .to(Elem, {
        onStart: updaterFn,
        onStartParams: [betterDisplay],
        onReverseComplete: updaterFn,
        onReverseCompleteParams: [' '],
      })
      .fromTo(
        imageEl,
        {
          y: '+=100',
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
        onStartParams: [betterDisplay],
        onReverseComplete: updaterFn,
        onReverseCompleteParams: [betterDisplay],
      })
      .to(imageEl, {
        y: '-=100',
        opacity: 0,
        scale: 0,
      })
      .to(Elem, {
        onStart: updaterFn,
        onStartParams: [higherRes],
        onReverseComplete: updaterFn,
        onReverseCompleteParams: [betterDisplay],
      })
      .fromTo(
        imageEl,
        {
          y: '+=100',
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
        onStartParams: [higherRes],
        onReverseComplete: updaterFn,
        onReverseCompleteParams: [higherRes],
      })
      .to(imageEl, {
        y: '-=100',
        opacity: 0,
        scale: 0,
      })
      .to(Elem, {
        onStart: updaterFn,
        onStartParams: [clarity],
        onReverseComplete: updaterFn,
        onReverseCompleteParams: [higherRes],
      })
      .fromTo(
        imageEl,
        {
          y: '+=100',
          opacity: 0,
          scale: 0,
        },
        {
          y: '0',
          opacity: 1,
          scale: 7,
        }
      )
      .to(Elem, {
        onStart: updaterFn,
        onStartParams: [clarity],
        onReverseComplete: updaterFn,
        onReverseCompleteParams: [clarity],
      })
      .to(imageEl, {
        y: '-=100',
        opacity: 0,
        scale: 0,
      })
      .to(Elem, {
        onStart: updaterFn,
        onStartParams: [muchMore],
        onReverseComplete: updaterFn,
        onReverseCompleteParams: [clarity],
      })
      .fromTo(
        imageEl,
        {
          y: '+=100',
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
        onStartParams: [muchMore],
        onReverseComplete: updaterFn,
        onReverseCompleteParams: [muchMore],
      })
      .to(imageEl, {
        y: '-=100',
        opacity: 0,
        scale: 0,
      });
    //   .to(Elem, {
    //     onStart: lastUpdate,
    //     // onStartParams: [muchMore],
    //     onReverseComplete: lastUpdate,
    //     onReverseCompleteParams: [improvedClarity],
    //   });

    return () => {
      if (t4) t4.kill();
    };
  }, []);

  return (
    <Section ref={sectionRef}>
      <HeadingContainer>Incredible capabilities packed in surprisingly small space</HeadingContainer>
      <ChangingTextContainer>
        <img src={''} alt="features" ref={imgRef} style={{ display: 'none' }} />
      </ChangingTextContainer>
      <ImageContainer>
        <img
          src="https://s3.ajnavidya.com/ajnalens/ajnaxr/floating/diisect%201080.gif"
          alt="ajna xr"
          ref={featureImgRef}
        />
      </ImageContainer>
    </Section>
  );
};

export default Section4;
