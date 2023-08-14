/* eslint-disable react-hooks/exhaustive-deps */
import gsap from 'gsap';
import React from 'react';
import { useRef, useLayoutEffect } from 'react';
import styled from 'styled-components';
import { useContext } from 'react';
import { ColorContext } from '../context/ColorContext';
import { useEffect } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';

import ajnaXR1 from '../assets/images/1.png';
import ajnaXR2 from '../assets/images/2.png';

const Section = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const Left = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  background-color: rgba(155, 181, 206, 0.8);
  position: relative;

  @media screen and (max-width: 48em) {
    width: 100%;
  }
`;
const Right = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  background-color: rgba(155, 181, 206, 0.4);
  position: relative;

  @media screen and (max-width: 48em) {
    display: none;
  }
`;

const Center = styled.div`
  width: 100%;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-90deg);
  font-size: var(--fontxxl);
  text-transform: uppercase;
  filter: brightness(0.85);

  @media screen and (max-width: 48em) {
    top: 2rem;
    transform: translate(-50%, 0%) rotate(0deg);
  }
`;

const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: #7000ff;
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 114.9%;

    letter-spacing: 0.02rem;

    margin-bottom: 44px;
  }

  p {
    font-weight: 300;
    font-size: 21.6px;
    line-height: 114.9%;

    letter-spacing: 0.04em;
    color: #0a0a0a;
  }
`;

const ImageContainer = styled.div`
  display: block;
  overflow: hidden;
  width: 60%;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

const Section2 = () => {
  gsap.registerPlugin(ScrollTrigger);
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subHeadingRef = useRef(null);
  const imageRef = useRef(null);

  //   const { currentColor, changeColorContext } = useContext(ColorContext);

  //   useEffect(() => {
  // let rightElem = rightRef.current;
  // let leftElem = leftRef.current;
  // let textElem = textRef.current;
  // textElem.innerText = currentColor.text;
  // textElem.style.color = currentColor.color;
  // rightElem.style.backgroundColor = `rgba(${currentColor.rgbColor}, 0.4)`;
  // leftElem.style.backgroundColor = `rgba(${currentColor.rgbColor}, 0.8)`;
  //   }, [currentColor]);

  useLayoutEffect(() => {
    let Elem = sectionRef.current;
    let headingEl = headingRef.current;
    let subHeadingEl = subHeadingRef.current;
    let imageEl = imageRef.current;

    let updaterFn = ({ subHeadingText, headingText, image }) => {
      if (headingText) {
        if (headingText === ' ') {
          headingEl.style.display = 'none';
        } else {
          headingEl.style.display = 'unset';
          headingEl.innerText = headingText;
        }
      }
      if (subHeadingText) {
        if (subHeadingText === ' ') {
          subHeadingEl.style.display = 'none';
        } else {
          subHeadingEl.style.display = 'unset';
          subHeadingEl.innerText = subHeadingText;
        }
      }
      if (image) {
        if (image === ' ') {
          imageEl.style.display = 'none';
        } else {
          imageEl.style.display = 'unset';
          imageEl.src = image;
        }
      }
      //   const colorObj = {
      //     color,
      //     text,
      //     rgbColor,
      //   };
      //   changeColorContext(colorObj);
    };

    // pin the section
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

    let t2 = gsap
      .timeline({
        scrollTrigger: {
          trigger: Elem,
          start: 'top center',
          end: `+=${Elem.offsetWidth + 1000}`,
          scrub: 1,
        },
      })
      .set(Elem, { transformOrigin: 'center bottom' })
      .fromTo(
        Elem,
        {
          opacity: 0,
          scale: 0,
        },
        {
          opacity: 1,
          scale: 1,
        }
      )
      .to(Elem, {
        onStart: updaterFn,
        onStartParams: [
          {
            headingText: 'An Essential Tool to Master Skills Faster',
            subHeadingText: "AjnaXR, World's Most Advanced True Mixed Reality Headset",
            image: ajnaXR1,
          },
        ],
        onReverseComplete: updaterFn,
        onReverseCompleteParams: [
          {
            headingText: 'An Essential Tool to Master Skills Faster',
            subHeadingText: "AjnaXR, World's Most Advanced True Mixed Reality Headset",
            image: ajnaXR1,
          },
        ],
      })
      .to(Elem, {
        opacity: 0,
      })
      .to(Elem, {
        opacity: 1,
        onStart: updaterFn,
        onStartParams: [
          {
            headingText: 'Experience reality like never before',
            subHeadingText: 'Ultra Low Latency   |   High Resolution   |   Lightweight   |   Colored Pass Through',
            image: ajnaXR2,
          },
        ],
        onReverseComplete: updaterFn,
        onReverseCompleteParams: [
          {
            headingText: 'An Essential Tool to Master Skills Faster',
            subHeadingText: "AjnaXR, World's Most Advanced True Mixed Reality Headset",
            image: ajnaXR1,
          },
        ],
      })
      .to(Elem, {
        scale: 0,
        transformOrigin: 'center bottom',
      })
      .to(Elem, {
        onStart: updaterFn,
        onStartParams: [
          {
            headingText: ' ',
            subHeadingText: ' ',
            image: ' ',
          },
        ],
        onReverseComplete: updaterFn,
        onReverseCompleteParams: [
          {
            headingText: 'Experience reality like never before',
            subHeadingText: 'Ultra Low Latency   |   High Resolution   |   Lightweight   |   Colored Pass Through',
            image: ajnaXR2,
          },
        ],
      });
    //   .to(Elem, {
    //     onStart: updaterFn,
    //     onStartParams: [{ image: ajnaXR2 }],
    //     onReverseComplete: updaterFn,
    //     onReverseCompleteParams: [{ image: ajnaXR1 }],
    //   });
    //   .to(Elem, {
    //     onStart: updateColor,
    //     onStartParams: ["#574f6f", "Deep Purple", "87, 79, 111"],
    //     onReverseComplete: updateColor,
    //     onReverseCompleteParams: ["#574f6f", "Deep Purple", "87, 79, 111"],
    //   })
    //   .to(Elem, {
    //     onStart: updateColor,
    //     onStartParams: ["#A50011", "Red", "165, 0, 17"],
    //     onReverseComplete: updateColor,
    //     onReverseCompleteParams: ["#A50011", "Red", "165, 0, 17"],
    //   })
    //   .to(Elem, {
    //     onStart: updateColor,
    //     onStartParams: ["#215E7C", "Blue", "33, 94, 124"],
    //     onReverseComplete: updateColor,
    //     onReverseCompleteParams: ["#215E7C", "Blue", "33, 94, 124"],
    //   });

    return () => {
      // ScrollTrigger.killAll();
      if (t2) t2.kill();
    };
  }, []);

  return (
    <Section ref={sectionRef}>
      <HeadingContainer>
        <h1 ref={headingRef}>An Essential Tool to Master Skills Faster</h1>
        <p ref={subHeadingRef}>AjnaXR, World's Most Advanced True Mixed Reality Headset</p>
      </HeadingContainer>
      <ImageContainer>
        <img
          src={ajnaXR1}
          alt="ajna xr"
          //   style={{ width: "100%", objectFit: "cover" }}
          ref={imageRef}
        />
      </ImageContainer>
      {/* <Left ref={leftRef} />
      <Center ref={textRef} />
      <Right ref={rightRef} /> */}
      {/* <Canvas camera={{ fov: 6.5 }}>
          <ambientLight intensity={1.25} />
          <directionalLight intensity={0.4} />
          <Suspense fallback={null}>
            <Model2 />
          </Suspense> */}
      {/* <OrbitControls /> */}
      {/* </Canvas> */}
      {/* </Right> */}
    </Section>
  );
};

export default Section2;
