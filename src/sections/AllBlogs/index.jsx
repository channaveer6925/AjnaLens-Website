import React from 'react';
import { Link } from 'react-router-dom';
import blogImg from '../../asets/blogImg.png';
import styles from './styles.module.css';
const AllBlog = ({ allBlogData, section }) => {
  const title = section || 'All Blogs';

  const sliceText = (text) => {
    if (text.length >= 45) {
      const sliced = text.slice(0, 44);
      return `${sliced} ...`;
    }
    return text;
  };

  return (
    <section className={styles.allBlogSection}>
      <h4>{title}</h4>
      <div className={styles.allblog}>
        {allBlogData?.map((item, idx) => (
          <Link to={`${item.link}`}>
            <div className={styles.blogCard} key={idx}>
              <div className={styles.imgSec}>
                <img height="100%" width="100%" src={item.image} alt="img" />
              </div>
              <div className={styles.detail}>
                <p className={styles.category}> {item.category}</p>
                <h2 className={styles.heading}> {sliceText(item.heading)}</h2>
                <p className={styles.description}>{item.description}</p>
                <div className={styles.blogTime}>
                  <p>{item.date}</p>
                  <p>{item.readTime}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default AllBlog;
