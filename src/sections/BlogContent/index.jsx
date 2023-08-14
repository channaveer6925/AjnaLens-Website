import React, { useEffect, useLayoutEffect, useState } from 'react';
import styles from './blogContent.module.css';
import like from '../../asets/like.png';
import eye from '../../asets/eye.png';
import facebook from '../../asets/fbIcon.svg';
import twitter from '../../asets/twitter icon.svg';
import linkedIn from '../../asets/linkedIn icon.svg';
import linkIcon from '../../asets/link icon.svg';
import mail from '../../asets/mail.png';
import hero from '../../asets/blogHeroImage.png';
import Swiper3 from './Swiper3';
import { Link, useParams } from 'react-router-dom';
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share';
import axios from 'axios';
import useDocumentTitle from '../../hooks/useDocumentTitle';

const BlogContent = () => {
  useDocumentTitle('Blog');
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { blogId } = useParams();
  // console.log(blogId);
  const [data, setData] = useState({});
  const [emailtxt, setEmailtxt] = useState('');
  const [email, setEmail] = useState({ emailID: '' });
  const [shareLink, setShareLink] = useState('');
  let shareUrl;
  useEffect(() => {
    (async () => {
      const res = await axios.get(`https://s3.ajnavidya.com/ajnalens/blogs/blog-data/${blogId}.json`);
      setData(res.data.ContentData);
    })().catch((err) => {
      console.error(err);
    });
    setShareLink(`https://www.ajnalens.com/blogs/${blogId}`);
  }, [blogId]);

  const changeHandler = (e) => {
    // console.log(e.target.value);
    setEmailtxt(e.target.value);
  };

  const handleSubmit = () => {
    if (emailtxt !== '') {
      setEmail({ ...email, emailID: emailtxt });
      console.log('Email is set to', email);
    }
  };

  shareUrl = shareLink;

  console.log(shareLink);
  return (
    <>
      <div className={styles.heroImg}>
        <img src={hero} className={styles.heroImg1} alt="heroImg" />
      </div>
      <div className={`blog ${styles.container}`}>
        {/* date, watch and share */}
        <div className={styles.header}>
          {/* date and watch */}
          <div className={styles.firstHeader}>
            <p>
              {data.date} | {data.readtime}
            </p>
            {/* <img src={line} height="10%" alt="line" /> */}
            <p className={styles.verticle}>|</p>
            {/* watch */}
            <div className={styles.watch}>
              <img src={eye} height="20px" width="25px" alt="watch" />
              <p>{data.views}</p>
            </div>
          </div>
          {/* share on */}
          <div className={styles.share}>
            <div className={styles.shareText}>
              <p>Share this Blog:- </p>
            </div>
            <div className={styles.logos}>
              <FacebookShareButton url={shareUrl}>
                <FacebookIcon size={40} />
              </FacebookShareButton>
              <TwitterShareButton url={shareUrl}>
                <TwitterIcon size={40} />
              </TwitterShareButton>
              <LinkedinShareButton url={shareUrl}>
                <LinkedinIcon size={40} />
              </LinkedinShareButton>
            </div>
          </div>
        </div>

        {/* Main Content */}

        <div className={styles.contentBody}>
          {/* Heading */}
          <h1 className={styles.heading}>{data.blogHeading}</h1>
          {/* para */}
          <article className={styles.para1}>
            {data.para1C1}
            <br />
            {data.para1C2}
            <br />
            {data.para1C3}
          </article>
          {/* Image */}
          <div className={styles.image1}>
            <img width="100%" height="700px" src={data.image1Url} alt="img" />
            {/* Image Description */}
            <p className={styles.imgDesc}>{data.imgDesc}</p>
          </div>

          {/* para2 */}

          <article className={styles.para1}>
            {data.para2C1}
            <br />
            {data.para2C2}
            <br />
            {data.para2C3}
          </article>

          <hr className={styles.horizontal} style={{ marginTop: '2rem', marginBottom: '2rem' }} />

          {/* quote */}
          <div className={styles.quote}>
            <article>{data?.quote}</article>
          </div>

          {/* para3 */}
          <div className={styles.para3}>
            <article>
              {data?.para3C1}
              <br />
              {data?.para3C2}
              <br />
              <br />
              {data?.para3C3}
              <br />
              <br />
              {data?.para3C4}
              <br />
              <br />
              {data?.para4C1}
              <br />
              <br />
              {data?.para4C2}
              <br />
              <br />
              {data?.para5C1 && data?.para5C1}
              <br />
              <br />
              {data?.para5C2}
              <br />
              <br />
              {data?.para5C3}
              <br />
              <br />
              {/* {data?.para6C1}
              <br />
              <br />
              {data?.para6C2}
              <br />
              <br />
              {data?.para6C3}
              <br />
              <br />
              {data?.para6C4}
              <br />
              <br />
              {data?.para6C6}
              <br />
              <br />
              {data?.para6C7}
              <br />
              <br />
              {data?.para6C8}
              <br />
              <br />
              {data?.para6C9}
              <br />
              <br />
              {data?.para6C10}
              <br />
              <br /> */}
              {/* {data?.para7C1}
              <br />
              <br />
              {data?.para7C2}
              <br />
              <br />
              {data?.para7C3}
              <br />
              <br />
              {data?.para7C4}
              <br />
              <br />
              {data?.para8C1}
              <br />
              <br />
              {data?.para8C2}
              <br />
              <br />
              {data?.para9C1}
              <br />
              <br />
              {data?.para10C1}
              <br />
              <br />
              {data?.para10C2}
              <br />
              <br />
              {data?.para10C3}
              <br /> */}

              <ul>
                {data?.list1 && <li>{data?.list1}</li>}
                {data?.list2 && <li>{data?.list2}</li>}
                {data?.list3 && <li>{data?.list3}</li>}
                {data?.list4 && <li>{data?.list4}</li>}
              </ul>
            </article>
          </div>

          {/* Image2 */}
          {data?.image2Urls && (
            <div className={styles.image2}>
              <center>
                <Swiper3 data={data?.image2Urls} />
                {/* <img src={data.image2Url} alt="" /> */}
              </center>
            </div>
          )}

          {/* para4 */}
          {/* <div className={styles.para3}>
            <article>
              {data.para4C1}
              <br />
              {data.para4C2}
            </article>
          </div> */}
          <br />
          <hr />
          <br />

          {/* Footer */}
          <div className={styles.footerSec}>
            {/* Like and share */}
            <div className={styles.firstFooter}>
              {/* Like Icon */}
              <div>
                <img height="20px" width="20px" src={like} alt="like" />
              </div>
              <div className={styles.num}>
                <p>{data.likes}</p>
              </div>
            </div>
            {/* share on */}
            <div className={styles.share}>
              <div className={styles.shareText}>
                <p>Share this Blog:- </p>
              </div>
              <div className={styles.logos}>
                <FacebookShareButton url={shareUrl}>
                  <FacebookIcon size={40} />
                </FacebookShareButton>
                <TwitterShareButton url={shareUrl}>
                  <TwitterIcon size={40} />
                </TwitterShareButton>
                <LinkedinShareButton url={shareUrl}>
                  <LinkedinIcon size={40} />
                </LinkedinShareButton>
              </div>
            </div>
          </div>

          {/* subscribe */}
          {/* <div className={styles.subscribe}>
            <div className={styles.subContent}>
              <p className={styles.subHeading}>Subscribe for news later</p>
              <div className={styles.subInput}>
                <input type="text" placeholder="Enter your email address" onChange={changeHandler} />
              </div>
              
              <button className={styles.subButton} onClick={handleSubmit}>
                <img height="20%" width="20%" src={mail} alt="mail" />

                <div className={styles.subText}>Subscribe</div>
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default BlogContent;
