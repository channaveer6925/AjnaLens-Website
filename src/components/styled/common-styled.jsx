import styled from 'styled-components';

export const ButtonWrapper = styled.button`
  background: #7a68e9;
  padding: 12px 24px;
  color: #fff;
  border-radius: 50px;
  border: none;
  outline: none;
  width: 130px;
  cursor: pointer;
  text-align: center;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  color: #fff;

  /* Responsive adjustments for different screen widths */
  @media screen and (max-width: 500px) {
    width: 110px;
    font-size: 12px;
    letter-spacing: 1.2px;
    line-height: 22px;
    font-weight: 300;
  }

  @media screen and (min-width: 1280px) {
    font-size: 14px;
    line-height: 18px;
  }

  @media screen and (min-width: 1540px) {
    font-size: 16px;
    line-height: 20.8px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 18px;
    line-height: 23.4px;
    padding: 1rem 2rem;
    width: auto;
  }
`;

export const ButtonWrapper2 = styled.button`
  background: #18191b;
  padding: 12px 24px;
  color: #fff;
  border-radius: 50px;
  border: none;
  outline: none;
  width: 130px;
  cursor: pointer;
  text-align: center;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  color: #fff;

  /* Responsive adjustments for different screen widths */
  @media screen and (max-width: 500px) {
    width: 110px;
    font-size: 12px;
    letter-spacing: 1.2px;
    line-height: 22px;
    font-weight: 300;
  }
  @media screen and (min-width: 1280px) {
    font-size: 14px;
    line-height: 18px;
  }

  @media screen and (min-width: 1540px) {
    font-size: 16px;
    line-height: 20.8px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 18px;
    line-height: 23.4px;
    padding: 1rem 2rem;
    width: auto;
  }
`;

export const TextBig = styled.div`
  font-family: Cairo;
  font-size: 96px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 9.6px;
  text-transform: uppercase;
  background: linear-gradient(125deg, #f0f0f0 0%, rgba(240, 240, 240, 0) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  /* Responsive adjustments for different screen widths */

  @media screen and (max-width: 500px) {
    font-size: 40px;
    line-height: 39.471px; /* 120.543% */
    letter-spacing: 3.274px;
  }
  @media screen and (min-width: 1540px) {
    font-size: 116px;
    line-height: 143.568px;
    letter-spacing: 11.6px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 140px;
    line-height: 172.028px;
    letter-spacing: 14px;
  }
`;

export const FeatureWrapper = styled.div`
  display: flex;
  padding: 26px 28px;
  width: 230px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 14px;
  border-radius: 34px;
  border: 1px solid var(--dark-mode-neutral-color-neutral-3, #242528);
  background: var(--dark-mode-neutral-color-neutral-3, #18191b);

  /* Responsive adjustments for different screen widths */

  @media screen and (max-width: 500px) {
    padding: 18px 20px;
    width: 180px;
    gap: 12px;
    border-radius: 36px;
  }
  @media screen and (min-width: 1540px) {
    padding: 30px 32px;
    width: 260px;
    gap: 12px;
    border-radius: 36px;
  }

  @media screen and (min-width: 1920px) {
    padding: 40px 36px;
    width: 280px;
    gap: 16px;
    border-radius: 40px;
  }
`;

export const FeatureWrapperText = styled.div`
  color: #fff;
  text-align: center;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 25px;

  /* Responsive adjustments for different screen widths */

  @media screen and (max-width: 500px) {
    font-size: 14px;
  }
  @media screen and (min-width: 1540px) {
    font-size: 18px;
    line-height: 29px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 20px;
    line-height: 32px;
  }
`;

export const DarkText = styled.div`
  font-family: Roboto;
  font-size: 64px;
  font-style: normal;
  font-weight: 800;
  line-height: 114.9%;
  letter-spacing: 2.56px;
  text-transform: uppercase;

  /* Background gradient styles */
  background: linear-gradient(180deg, #343434 0%, rgba(57, 57, 57, 0) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (max-width: 1920px) {
    font-size: ${(props) => props.fontSize || '64px'};
    letter-spacing: 2.56px;
    line-height: 114.9%;
  }
  @media screen and (max-width: 1540px) {
    font-size: 64px;
    letter-spacing: 2.56px;
    line-height: 114.9%;
  }

  @media screen and (max-width: 500px) {
    font-size: 24px;
    letter-spacing: 1px;
    line-height: 114.9%;
  }
`;

export const WhiteGradientText = styled.div`
  text-align: center;
  font-family: Cairo;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 52px */
  text-transform: uppercase;

  /* Background gradient styles */
  background: linear-gradient(181deg, #fff 0%, rgba(255, 255, 255, 0.16) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  /* Responsive adjustments for different screen widths */
  @media screen and (max-width: 500px) {
    font-size: 20px;
    padding: 0 0rem;
  }
  @media screen and (min-width: 1280px) {
    font-size: 40px;
    line-height: 52px;
  }

  @media screen and (min-width: 1540px) {
    font-size: 48px;
    line-height: 62.4px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 58px;
    line-height: 75.4px;
  }
`;

export const FiveKText = styled.div`
  text-align: center;
  font-family: Cairo;
  font-size: ${(props) => props.fontSize || '36px'};
  font-style: normal;
  font-weight: 900;
  line-height: 114.9%; /* 41.364px */
  letter-spacing: 0.72px;
  background: ${(props) => props.bg || 'linear-gradient(119deg, #725cff 0%, #f14cff 100%)'};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const DiopterTextsm = styled.div`
  color: #5d5d5d;
  text-align: center;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  letter-spacing: 0.64px;

  /* Responsive adjustments for mobile screens */
  @media screen and (max-width: 500px) {
    font-size: 12px;
    line-height: 160%; /* 22.4px */
    letter-spacing: 0.56px;
  }

  /* Responsive adjustments for larger screen widths */
  @media screen and (min-width: 641px) {
    font-size: 16px;
    line-height: 150%; /* 24px */
    letter-spacing: 0.64px;
  }

  @media screen and (min-width: 1540px) {
    font-size: 18px;
    line-height: 162.5%; /* 29.25px */
    letter-spacing: 0.72px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 20px;
    line-height: 180%; /* 36px */
    letter-spacing: 0.8px;
  }
`;

export const TextMD = styled.div`
  color: #aeaeae;
  font-family: Roboto;
  font-size: 16.791px;
  font-style: normal;
  font-weight: 600;
  line-height: 114.9%; /* 19.292px */
  letter-spacing: 0.672px;
  text-transform: uppercase;

  /* Responsive adjustments for mobile screens */
  @media screen and (max-width: 500px) {
    font-size: 12px;
    line-height: 125.1%; /* 18.75px */
    letter-spacing: 0.6px;
    padding: 0 8rem;
    text-align: center;
  }
  @media screen and (max-width: 400px) {
    font-size: 12px;
    line-height: 125.1%; /* 18.75px */
    letter-spacing: 0.6px;
    padding: 0 4rem;
    text-align: center;
  }

  /* Responsive adjustments for larger screen widths */
  @media screen and (min-width: 641px) {
    font-size: 16.791px;
    line-height: 114.9%; /* 19.292px */
    letter-spacing: 0.672px;
  }

  @media screen and (min-width: 1540px) {
    font-size: 18px;
    line-height: 123.2%; /* 22.1296px */
    letter-spacing: 0.72px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 20px;
    line-height: 132.33%; /* 26.99172px */
    letter-spacing: 0.8px;
  }
`;

export const PlatformText = styled.div`
  text-align: center;
  font-family: Cairo;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 52px */
  text-transform: uppercase;
  background: linear-gradient(181deg, #fff 0%, rgba(255, 255, 255, 0.16) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  /* Responsive adjustments for mobile screens */
  @media screen and (max-width: 500px) {
    font-size: 18px;
    line-height: 143.333%; /* 51.76px */
    padding: 0 5rem;
  }

  /* Responsive adjustments for larger screen widths */
  @media screen and (min-width: 641px) {
    font-size: 40px;
    line-height: 130%; /* 52px */
  }

  @media screen and (min-width: 1540px) {
    font-size: 45px;
    line-height: 139.444%; /* 62.92px */
  }

  @media screen and (min-width: 1920px) {
    font-size: 50px;
    line-height: 147.5%; /* 73.22px */
  }
`;

export const FooterTitle = styled.div`
  color: #fff;
  text-align: left;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 114.9%; /* 27.576px */
  letter-spacing: 0.96px;
  margin-bottom: 12px;
`;

export const FooterElemText = styled.div`
  color: rgba(255, 255, 255, 0.5);
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 200%; /* 18.384px */
  letter-spacing: 0.64px;
`;

// SE Components

export const SEText1 = styled.div`
  font-family: Cairo;
  font-size: 111.831px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 11.183px;
  text-transform: uppercase;
  background: linear-gradient(180deg, #f0f0f0 0%, rgba(240, 240, 240, 0) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  /* Responsive adjustments for larger screen widths */
  @media screen and (max-width: 500px) {
    font-size: 40px;
    line-height: 130%; /* 52px */
    text-align: center;
    line-height: 56.577px; /* 157.159% */
    letter-spacing: 3.6px;
  }
`;

export const SEText2 = styled.div`
  font-family: Cairo;
  font-size: 129.132px;
  font-style: normal;
  font-weight: 700;
  line-height: 207.734px; /* 160.87% */
  letter-spacing: 12.913px;
  text-transform: uppercase;
  background: linear-gradient(107deg, rgba(240, 240, 240, 0.4) 0%, rgba(240, 240, 240, 0) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media screen and (max-width: 500px) {
    font-family: Cairo;
    font-size: 36px;
    font-style: normal;
    font-weight: 900;
    line-height: 56.577px; /* 157.159% */
    letter-spacing: 3.6px;
    text-transform: uppercase;
  }
`;

export const SEText3 = styled.div`
  text-align: center;
  leading-trim: both;
  text-edge: cap;
  font-family: Cairo;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 52px */
  text-transform: uppercase;
  background: var(--g-2, linear-gradient(148deg, #fff 0%, rgba(255, 255, 255, 0) 100%));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media screen and (max-width: 500px) {
    font-size: 20px;
    line-height: 130%; /* 52px */
  }
`;

export const SEText3mini = styled.div`
  color: #5d5d5d;
  text-align: center;
  leading-trim: both;
  text-edge: cap;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 20.8px */
  text-transform: uppercase;
  @media screen and (max-width: 500px) {
    font-size: 12px;
    line-height: 130%; /* 52px */
    padding: 0 6rem;
  }
`;
