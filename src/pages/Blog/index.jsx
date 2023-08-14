import React, { useLayoutEffect, useRef, useState } from 'react';
import AllBlog from '../../sections/AllBlogs';
import RecentPost from '../../sections/RecentsPosts';
import styles from './style.module.css';
import searchIcon from '../../asets/seIcon.png';
import blogImg from '../../asets/blogImg.png';
import useDocumentTitle from '../../hooks/useDocumentTitle';
const Blog = () => {
  useDocumentTitle('Blogs');
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [filterby, setFilterBy] = useState('');
  const inputSec = useRef();
  const filters = [
    {
      id: 1,
      tag: 'XR Technology',
    },
    {
      id: 2,
      tag: 'Food For Thoughts',
    },
    {
      id: 3,
      tag: 'Gaming',
    },
    {
      id: 4,
      tag: 'Newsroom',
    },
    {
      id: 5,
      tag: 'Metaverse',
    },
    {
      id: 6,
      tag: 'Recently Post',
    },
    {
      id: 7,
      tag: 'Artificial Intelligence',
    },
    {
      id: 8,
      tag: 'Business',
    },
  ];

  const blogData = [
    {
      image: 'https://s3.ajnavidya.com/ajnalens/blogs/blog-images/CES_Blog%20Post_1.png',
      section: 'XR Technology',
      category: 'XR TECHNOLOGY',
      heading: ' CES Innovation Award Honoree-AjnaLens',
      description:
        "We are thrilled to share that AjnaLens has been named a CES Innovation Award Honoree for its Industry's Most Advanced True Mixed Reality Headset- AjnaXR. The prestigious recognition honours AjnaLens' extraordinary design and engineering in the XR category.",
      date: '3 January 2023',
      readTime: '2 mins read',
      link: 'CES-2023',
    },
    {
      image: 'https://s3.ajnavidya.com/ajnalens/blogs/blog-images/NFT.png',
      section: 'XR Technology',
      category: 'XR TECHNOLOGY',
      heading: '  NFT: What it is and how does it work?',
      description:
        'Non-fungible tokens or NFTs are digital assets ledged on a blockchain, carrying unique identification codes and metadata to create distinction among them.',
      date: '28 November 2022',
      readTime: '2 mins read',
      link: 'NFT',
    },
    {
      image: 'https://s3.ajnavidya.com/ajnalens/blogs/blog-images/Metaverse.png',
      section: 'Metaverse',
      category: 'Metaverse',
      heading: '  Demystifying the technology of future: Metaverse explained',
      description:
        'Metaverse is an advanced network of 3D simulated virtual worlds based on social connection, operable using extended reality technology.',
      date: '22 November 2022',
      readTime: '5 mins read',
      link: 'Demistyfying%20%20Metaverse',
    },
  ];

  const [filteredData, setFilteredData] = useState(blogData);

  const handleSearchOnEnter = (e) => {
    if (e.keyCode === 13) {
      if (inputSec.current.value != '') {
        const condition = new RegExp(inputSec.current.value, 'i');
        var result = filters.filter(function (el) {
          return condition.exec(el.tag);
        });
        setFilterBy(result[0].tag);
        const filteredData = blogData.filter((el) => {
          return el.section.toLocaleLowerCase().trim() == result[0].tag.toLocaleLowerCase().trim();
        });
        setFilteredData(filteredData);
        window.scrollTo(0, 736);
      } else {
        setFilteredData(blogData);
        setFilterBy('');
      }
    }
  };
  const handleSearch = (idx) => {
    const filtertag = filters[idx].tag.toLocaleLowerCase();
    inputSec.current.value = filters[idx].tag;
    setFilterBy(filters[idx].tag);

    const filteredData = blogData.filter((el) => {
      return el.section.toLocaleLowerCase().trim() == filtertag.trim();
    });
    setFilteredData(filteredData);
    window.scrollTo(0, 736);
  };

  return (
    <div className={`blogs ${styles.blogContainer}`}>
      <section className={styles.filter}>
        <h1 className={styles.blogHeading}>Blogs</h1>
        <div className={styles.filterContent}>
          <div className={styles.searchBar}>
            <div>
              <img src={searchIcon} alt="icon" />
            </div>
            <input type="text" className={styles.searchInput} ref={inputSec} onKeyDown={handleSearchOnEnter} />
          </div>
          <div className={styles.tags}>
            {filters?.map((el, idx) => (
              <p key={idx} onClick={() => handleSearch(idx)}>
                {el.tag}
              </p>
            ))}
          </div>
        </div>
        <p></p>
      </section>

      {/* <RecentPost /> */}
      <AllBlog allBlogData={filteredData} section={filterby} />
    </div>
  );
};

export default Blog;
