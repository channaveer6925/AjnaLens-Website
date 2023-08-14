import React from 'react';
import styles from './styles.module.css';
import recentImg from '../../asets/recentPostImg.png';
import blogImg from '../../asets/blogImg.png';
const RecentPost = () => {
  const recentPostData = [
    {
      image: 'https://s3.ajnavidya.com/ajnalens/blogs/blog-images/CES_Blog%20Post_1.png',
      category: 'XR TECHNOLOGY',
      heading: ' CES Innovation Award Honoree-AjnaLens ',
      description:
        "We are thrilled to share that AjnaLens has been named a CES Innovation Award Honoree for its Industry's Most Advanced True Mixed Reality Headset- AjnaXR. The prestigious recognition honours AjnaLens' extraordinary design and engineering in the XR category.",
      date: '3 January 2023',
      readTime: '2 mins read',
      link: 'CES-2023.json',
    },
    {
      image: recentImg,
      category: 'XR TECHNOLOGY',
      heading: 'NFT: What it is and how does it work?',
      date: '31 Martch 2022',
      readTime: '10 mins read',
    },
    {
      image: recentImg,
      category: 'XR TECHNOLOGY',
      heading: 'NFT: What it is and how does it work?',
      date: '31 Martch 2022',
      readTime: '10 mins read',
    },
    {
      image: recentImg,
      category: 'XR TECHNOLOGY',
      heading: 'NFT: What it is and how does it work?',
      date: '31 Martch 2022',
      readTime: '10 mins read',
    },
    {
      image: recentImg,
      category: 'XR TECHNOLOGY',
      heading: 'NFT: What it is and how does it work?',
      date: '31 Martch 2022',
      readTime: '10 mins read',
    },
    {
      image: recentImg,
      category: 'XR TECHNOLOGY',
      heading: 'NFT: What it is and how does it work?',
      date: '31 Martch 2022',
      readTime: '10 mins read',
    },
    {
      image: recentImg,
      category: 'XR TECHNOLOGY',
      heading: 'NFT: What it is and how does it work?',
      date: '31 Martch 2022',
      readTime: '10 mins read',
    },
  ];

  const sliceText = (text) => {
    if (text.length >= 46) {
      const sliced = text.slice(0, 45);
      return `${sliced} ...`;
    }
    return text;
  };

  return (
    <section className={styles.recentPost}>
      <h4>RECENT POST</h4>
      <div className={styles.posts}>
        {recentPostData?.map((item, idx) => (
          <div className={styles.cards} key={idx}>
            <div className={styles.imgSec}>
              <img src={item.image} alt="" />
            </div>
            <div className={styles.details}>
              <p>{item.category}</p>
              <h2>{sliceText(item.heading)}</h2>
              <div className={styles.postDetails}>
                <p>{item.date}</p>
                <p>{item.readTime}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentPost;
