import HeroSection from './sections/HeroSection';
import Section2 from './sections/Section2';
import Section3 from './sections/Section3';
import Section4 from './sections/Section4';
import Section5 from './sections/Section5';
import Resolution from './sections/Resolution';
import Section6 from './sections/Section6';
import { useEffect, useLayoutEffect } from 'react';
import styles from './index.module.css';
import XRProductPhone from './XRProductPhone';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import { useLocation } from 'react-router-dom';

function AjnaXR() {
  const location = useLocation();
  useDocumentTitle(`AjnaXR World's best Mixed Reality Headset | Best VR Passthrough Device`);
  useLayoutEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);
  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash?.slice(1));
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  useEffect(() => {
    const load = localStorage.getItem('load');
    if (!load) {
      localStorage.setItem('load', true);
      window.location.reload();
    }
  }, []);

  return (
    <>
      <div id="product-page" className={styles.container}>
        <HeroSection />
        <Section2 />
        <Section3 />
        <Section4 />
        <div style={{ height: '10vh', backgroundColor: 'black' }} />
        <Resolution />
        <div style={{ height: '10vh', backgroundColor: 'black' }} />
        <Section5 />
        <Section6 />
      </div>
      <div className={styles.phoneContainer}>
        <XRProductPhone />
      </div>
    </>
  );
}

export default AjnaXR;
