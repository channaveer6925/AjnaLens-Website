import React from 'react';
import styles from './pressImages.module.css';
import download from '../../asets/download.png';
import PressImage from '../../components/PressImage';

const PressImages = () => {
  const data = [
    {
      id: 1,
      imgUrl: 'https://s3.ajnavidya.com/ajnalens/media/ajna-logo/AjnaLens%20Logo%20+%20Test%20White.png',
    },
    {
      id: 2,
      imgUrl: 'https://s3.ajnavidya.com/ajnalens/media/ajna-logo/AjnaLens%20Logo_PNG-01%20(1).png',
    },
    {
      id: 3,
      imgUrl: 'https://s3.ajnavidya.com/ajnalens/media/ajna-logo/AjnaLens_Logo%20Lockup-13-13.png',
    },
  ];

  const vidyaData = [
    {
      id: 1,
      imgUrl: 'https://s3.ajnavidya.com/ajnalens/media/ajnavidya-logo/AjnaVidya-(Black)-Logo.png',
    },
    {
      id: 2,
      imgUrl: 'https://s3.ajnavidya.com/ajnalens/media/ajnavidya-logo/AjnaVidya-(White)-Logo-(1).png',
    },
    {
      id: 3,
      imgUrl: 'https://s3.ajnavidya.com/ajnalens/media/ajnavidya-logo/AjnaVidya-(With-BG)-Logo.png',
    },
  ];

  const xrdata = [
    {
      id: 1,
      imgUrl: 'https://s3.ajnavidya.com/ajnalens/media/ajnaxr/AjnaXr%20V5%20R.10.webp',
    },
    {
      id: 2,
      imgUrl: 'https://s3.ajnavidya.com/ajnalens/media/ajnaxr/AjnaXr%20V5%20R.22.webp',
    },
    {
      id: 3,
      imgUrl: 'https://s3.ajnavidya.com/ajnalens/media/ajnaxr/AjnaXr%20V5%20R.27.webp',
    },
    {
      id: 4,
      imgUrl: 'https://s3.ajnavidya.com/ajnalens/media/ajnaxr/AjnaXr%20V5%20R.3.webp',
    },
    {
      id: 5,
      imgUrl: 'https://s3.ajnavidya.com/ajnalens/media/ajnaxr/AjnaXr%20V5%20R.5.webp',
    },
    {
      id: 6,
      imgUrl: 'https://s3.ajnavidya.com/ajnalens/media/ajnaxr/AjnaXr%20V5%20R.8.webp',
    },
    {
      id: 7,
      imgUrl: 'https://s3.ajnavidya.com/ajnalens/media/ajnaxr/DynamicFront_AJNAXR.webp',
    },
    {
      id: 8,
      imgUrl: 'https://s3.ajnavidya.com/ajnalens/media/ajnaxr/DynamicFront2_AJNAXR%20(1).webp',
    },
    {
      id: 9,
      imgUrl: 'https://s3.ajnavidya.com/ajnalens/media/ajnaxr/DynamicFront2_AJNAXR.webp',
    },
  ];
  return (
    <section>
      <div className={styles.container}>
        {/* Heading */}
        <div className={styles.heading}>
          <div className={styles.title}>
            <p>PRESS IMAGES</p>
          </div>
          <a href="path_to_file" download="proposed_file_name" style={{ textDecoration: 'none' }}>
            <div className={styles.downloadSec}>
              <img height={18} src={download} alt="" />
              <a className={styles.downloadText}>Download brand Guideline </a>
            </div>
          </a>
        </div>
        {/* Ajnalens logo */}
        <div className={styles.ajnaLogo}>
          <div className={styles.logoTitle}>
            <p>AjnaLens Logo</p>
          </div>

          <div className={styles.logoGrid}>
            {data.map((elem) => (
              <PressImage id={elem.id} imgUrl={elem.imgUrl} />
            ))}
          </div>
        </div>

        {/* AjnaVidya logo */}

        <div className={styles.ajnaLogo}>
          <div className={styles.logoTitle}>
            <p>AjnaVidya Logos</p>
          </div>

          <div className={styles.logoGrid}>
            {vidyaData.map((elem) => (
              <PressImage id={elem.id} imgUrl={elem.imgUrl} />
            ))}
          </div>
        </div>

        {/* AjnaXR images */}
        <div className={styles.ajnaXR}>
          <div className={styles.logoTitle}>
            <p>AjnaXR Images</p>
          </div>

          <div className={styles.xrImages}>
            {xrdata.map((elem) => (
              <PressImage id={elem.id} imgUrl={elem.imgUrl} />
            ))}
          </div>
        </div>
      </div>
      <hr />
    </section>
  );
};

export default PressImages;
