import React from 'react';
import styled from 'styled-components';

import lightestVR from '../assets/images/LightestVR.png';

const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: -50vh;
`;

const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  p {
    font-weight: 300;
    font-size: 24px;
    line-height: 114.9%;

    letter-spacing: 0.04rem;
    color: #0a0a0a;
    display: flex;
    justify-content: center;
    text-align: center;
    margin-bottom: 4px;
  }

  h1 {
    color: #7000ff;
    font-style: normal;
    font-weight: 300;
    font-size: 72px;
    line-height: 114.9%;
    letter-spacing: 0.02rem;
    color: #7000ff;
    margin-bottom: 10px;
  }

  h1 span {
    color: #e2ccff;
  }
`;

const ImageContainer = styled.div`
  display: block;
  overflow: hidden;
  width: 60%;
  margin-bottom: 10px;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

const WeightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;

  div {
    border: 1px solid #000;
    border-radius: 10px;
    padding: 8px;
  }
`;

const Section3 = () => {
  return (
    <Section>
      <HeadingContainer>
        <p>HUMAN-FIRST DESIGN</p>
        <h1>
          <span>Lighter</span>&nbsp;than the lightest
        </h1>
      </HeadingContainer>
      <ImageContainer>
        <img src="https://s3.ajnavidya.com/ajnalens/ajnaxr/floating/Floating_2.gif" alt="Lighter than the lightest" />
      </ImageContainer>
      <WeightContainer>
        <span>Weight</span>
        <div>~ 400g</div>
      </WeightContainer>
      <HeadingContainer style={{ marginTop: '180px' }}>
        <h1>A Premium Comfort</h1>
        <p style={{ width: '90%', fontSize: '22px' }}>
          Breathable, sweat proof face mask that makes wearing headsets comfortable for long hours
        </p>
      </HeadingContainer>
      <ImageContainer>
        <img
          src="https://s3.ajnavidya.com/ajnalens/ajnaxr/floating/Eye%20pad%20detach-720.gif"
          alt="A Premium Comfort"
        />
      </ImageContainer>
      <HeadingContainer style={{ marginTop: '180px' }}>
        <h1>Crafted to fit naturally</h1>
        <p style={{ width: '60%', fontSize: '22px', marginTop: '60px' }}>
          With optics at the front and batteries at the back, the headset perfectly balances the weight. With the
          adjustable head strap, the headset fits so well that it feels like a natural extension of your body.
        </p>
      </HeadingContainer>
      <ImageContainer>
        <img
          src="https://s3.ajnavidya.com/ajnalens/ajnaxr/floating/scaleajnaxrback%201080.gif"
          alt="Crafted to fit naturally"
        />
      </ImageContainer>
    </Section>
  );
};

export default Section3;
