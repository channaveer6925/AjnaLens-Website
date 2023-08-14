import React from 'react';
import { FooterElemText, FooterTitle } from '../styled/common-styled';
import styles from './footerV2.module.css';

export const FooterVersion2 = () => {
  return (
    <div className={styles.footerContainer}>
      <div>
        <FooterTitle>Products</FooterTitle>
        <FooterElemText style={{ marginTop: '5px' }}>Ajna Creator Program</FooterElemText>
        <FooterElemText>Ajna Developer Hub</FooterElemText>
        <FooterElemText>AjnaVidya</FooterElemText>
        <FooterElemText>Work Station</FooterElemText>
        <FooterElemText>Publisher Hub</FooterElemText>
        <FooterElemText>Talent Platform</FooterElemText>
        <hr />
        <FooterElemText>AjnaXR</FooterElemText>
        <FooterElemText>AjnaXR SE</FooterElemText>
        <FooterElemText>AjnaXR PRO</FooterElemText>
      </div>

      <div>
        <FooterTitle>Solution</FooterTitle>
        <FooterElemText>Defense</FooterElemText>
        <FooterElemText>Enterprise</FooterElemText>
        <FooterElemText>Skilling & Training</FooterElemText>
      </div>

      <div>
        <FooterTitle>For Students</FooterTitle>
        <FooterElemText>Ajna Creator Program</FooterElemText>
        <FooterElemText>Work Station</FooterElemText>
        <FooterElemText>AjnaVidya</FooterElemText>
      </div>

      <div>
        <div>
          <FooterTitle>For Developers</FooterTitle>
          <FooterElemText>Ajna Developer Hub</FooterElemText>
          <FooterElemText>Work Station</FooterElemText>
          <FooterElemText>Publisher Hub</FooterElemText>
          <FooterElemText>AjnaVidya</FooterElemText>
          <FooterElemText>Talent Platform</FooterElemText>
        </div>
        <div style={{ marginTop: '2rem' }}>
          <FooterTitle>For Business</FooterTitle>
          <FooterElemText>Ajna Developer Hub</FooterElemText>
          <FooterElemText>Publisher Hub</FooterElemText>
          <FooterElemText>AjnaVidya</FooterElemText>
          <FooterElemText>Talent Platform</FooterElemText>
        </div>
      </div>

      <div>
        <div>
          <FooterTitle>Resources</FooterTitle>
          <FooterElemText>Podcast</FooterElemText>
          <FooterElemText>Blog</FooterElemText>
        </div>
        <div style={{ marginTop: '2rem' }}>
          <FooterTitle>Company</FooterTitle>
          <FooterElemText>Porpuse</FooterElemText>
          <FooterElemText>About us</FooterElemText>
          <FooterElemText>Our Story</FooterElemText>
          <FooterElemText>Media</FooterElemText>
          <FooterElemText>Careers</FooterElemText>
        </div>
      </div>
    </div>
  );
};
