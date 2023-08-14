import React, { useState } from 'react';
import InNewsComp from '../../components/InNews';
import styles from './InNews.module.css';
import filter from '../../asets/filterImage.png';
import SwiperComp from './Swiper';

const InNews = () => {
  let data = [
    {
      id: 1,
      imgUrl: 'https://s3.ajnavidya.com/ajnalens/media/news-logo/The%20echonomy.jpg',
      title: "India's first AR headset gets ready to take on Microsoft, Apple & Magic Leap",
      date: '21 Mar 2018',
      month: 'Mar',
      year: 2018,
      url: 'https://economictimes.indiatimes.com/small-biz/startups/features/dimension-nxg-ajnalens-indias-first-ar-headset-gets-ready-to-take-on-microsoft-apple-magic-leap/articleshow/63392259.cms?from=mdr',
    },
    {
      id: 2,
      imgUrl: 'https://s3.ajnavidya.com/ajnalens/media/news-logo/Idia%20Today.jpg',
      title: 'Planning to pursue a course in Metaverse Creation? Here’s a complete guide',
      date: '02 Dec 2022',
      month: 'Dec',
      year: 2022,
      url: 'https://www.indiatoday.in/education-today/jobs-and-careers/story/planning-to-pursue-a-course-in-metaverse-creation-heres-a-complete-guide-2304028-2022-12-01',
    },
    {
      id: 3,
      imgUrl: 'https://s3.ajnavidya.com/ajnalens/media/news-logo/The%20Hindu.jpg',
      title: 'News from the world of Education: August 3, 2022',
      date: '03 Aug 2022',
      month: 'Aug',
      year: 2022,
      url: 'https://www.thehindu.com/education/news-from-the-world-of-education-august-3-2022/article65720203.ece',
    },
    {
      id: 4,
      imgUrl: 'https://s3.ajnavidya.com/ajnalens/media/news-logo/INC%2042.jpg',
      title: 'Vijay Shekhar Sharma-Backed Extended Reality Startup AjnaLens Secures Pre-Series A Funding ',
      date: '28 Feb 2022',
      month: 'Feb',
      year: 2022,
      url: 'https://inc42.com/buzz/vijay-shekhar-sharma-backed-extended-reality-startup-ajnalens-secures-pre-series-a-funding/',
    },
    {
      id: 5,
      imgUrl: 'https://s3.ajnavidya.com/ajnalens/media/news-logo/Business%20Insider.jpg',
      title: 'AjnaLens raises $1.5 mn from Maharashtra Defence and Aerospace Venture Fund, others',
      date: '26 Feb 2020',
      month: 'Feb',
      year: 2020,
      url: 'https://www.businessinsider.in/business/news/ajnalens-raises-1-5-mn-from-maharashtra-defence-and-aerospace-venture-fund-others/articleshow/74322255.cms',
    },
    {
      id: 6,
      imgUrl: 'https://s3.ajnavidya.com/ajnalens/media/news-logo/Financial%20Express.jpg',
      title: 'AjnaLens launches Ajna Creators Programme to make youth future-ready for careers in Metaverse',
      date: '28 July 2019',
      month: 'July',
      year: 2022,
      url: 'https://www.financialexpress.com/education-2/ajnalens-launches-ajna-creators-programme-to-make-youth-future-ready-for-careers-in-metaverse/2609222/',
    },
    {
      id: 7,
      imgUrl: 'https://s3.ajnavidya.com/ajnalens/media/news-logo/Enterprinure.jpg',
      title: 'Tech Giants Bet Big On Metaverse Hardware',
      date: '12 July 2022',
      month: 'July',
      year: 2022,
      url: 'https://www.entrepreneur.com/article/431142',
    },
    {
      id: 8,
      imgUrl: 'https://s3.ajnavidya.com/ajnalens/media/news-logo/Business%20Standards.jpg',
      title:
        'Contributing to Metaverse Revolution in India, Leading Extended Reality Innovator, AjnaLens, Raises Rs 12 Crore',
      date: '02 Mar 2022',
      month: 'Mar',
      year: 2022,
      url: 'https://www.business-standard.com/content/press-releases-ani/contributing-to-metaverse-revolution-in-india-leading-extended-reality-innovator-ajnalens-raises-rs-12-crore-122030201275_1.html',
    },
    {
      id: 9,
      imgUrl: 'https://s3.ajnavidya.com/ajnalens/media/news-logo/Vccircle.jpg',
      title: 'Vijay Shekhar Sharma-Backed AjnaLens Nets Funding From Lets Ventures, Angels, Others',
      date: '28 Feb 2022',
      month: 'Feb',
      year: 2022,
      url: 'https://www.vccircle.com/vijay-shekhar-sharma-backed-ajnalens-nets-funding-from-lets-ventures-angels-others',
    },
    {
      id: 10,
      imgUrl: 'https://s3.ajnavidya.com/ajnalens/media/news-logo/Mashable.jpg',
      title: 'Indian Startup Makes AR Glasses That’ll Keep COVID-19 In Check',
      date: '04 June 2020',
      month: 'June',
      year: 2020,
      url: 'https://in.mashable.com/tech/14527/indian-startup-makes-ar-glasses-thatll-keep-covid-19-in-check',
    },
    {
      id: 11,
      imgUrl: 'https://s3.ajnavidya.com/ajnalens/media/news-logo/Chronical.jpg',
      title: "Mumbai-based startup creates India's own AR headset",
      date: '31 Jan 2018',
      month: 'Jan',
      year: 2018,
      url: 'https://www.deccanchronicle.com/technology/in-other-news/310118/indias-anjalens-headset-to-make-ar-more-accessible.html',
    },
    {
      id: 12,
      imgUrl: 'https://s3.ajnavidya.com/ajnalens/media/news-logo/Express%20computer.jpg',
      title: 'This Startup Has Built Smart Glasses That Helps Fight COVID',
      date: '11 June 2020',
      month: 'June',
      year: 2020,
      url: 'https://www.expresscomputer.in/news/this-startup-has-built-smart-glasses-that-helps-fight-covid/57695/',
    },
    {
      id: 13,
      imgUrl: 'https://s3.ajnavidya.com/ajnalens/media/news-logo/Your%20Story.jpg',
      title: 'AR/VR hardware startup AjnaLens raises $1M from MHD group, others',
      date: '05 Nov 2020',
      month: 'Nov',
      year: 2020,
      url: 'https://yourstory.com/2020/11/funding-alert-ar-vr-hardware-startup-ajnalens-mdh-group',
    },
    {
      id: 14,
      imgUrl: 'https://s3.ajnavidya.com/ajnalens/media/news-logo/Daily%20hunt.jpg',
      title: 'AR/VR hardware startup AjnaLens raises $1M from MHD group, others',
      date: '05 Nov 2020',
      month: 'Nov',
      year: 2020,
      url: 'https://m.dailyhunt.in/news/nepal/english/yourstory-epaper-yourstory/funding+alert+ar+vr+hardware+startup+ajnalens+raises+1m+from+mhd+group+others-newsid-n227160250',
    },
  ];

  const [filterData, setFilterData] = useState(data);
  const [yearValue, setYearValue] = useState('allYears');
  const [monthValue, setMonthValue] = useState('allMonths');
  const [filteryearData, setFilterYearData] = useState([]);
  const onChangeYear = (e) => {
    setYearValue(e.target.value);
    if (e.target.value == 'allYears') {
      setFilterData(data);
    } else {
      let newItem = data.filter((el) => {
        if (el.year == e.target.value) {
          return el;
        }
      });
      setFilterYearData(newItem);
      setFilterData(newItem);
    }
  };
  const onChangeMonth = (e) => {
    setMonthValue(e.target.value);
    if (e.target.value == 'allMonths') {
      filteryearData.length === 0 ? setFilterData(data) : setFilterData(filteryearData);
    } else if (e.target.value != 'allMonths' && yearValue != 'allYears') {
      let newItem = data.filter((el) => el.month == e.target.value && el.year == yearValue);
      setFilterData(newItem);
    } else if (yearValue == 'allYears' && e.target.value == 'allMonths') {
      let newItem = filterData.filter((el) => el.month == e.target.value);
      setFilterData(newItem);
    } else if (e.target.value == 'allMonths') {
    }
  };

  return (
    <section className="inNewsSection">
      <div className={styles.container}>
        {/* heading */}
        <div className={styles.title}>
          <p>In News</p>
        </div>

        {/* Filter */}
        <div className={styles.filter}>
          <div>
            <img height="20px" width="20px" src={filter} alt="filter" />
          </div>
          {/* filter by years */}
          <div>
            <select className={styles.years} defaultValue="allYears" onChange={onChangeYear}>
              <option value="allYears">All Years</option>
              <option value="2014">2014</option>
              <option value="2015">2015</option>
              <option value="2016">2016</option>
              <option value="2017">2017</option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
            </select>
          </div>

          {/* filter by Months */}

          <div>
            <select className={styles.years} defaultValue="allMonths" onChange={onChangeMonth}>
              <option value="allMonths">All Months</option>
              <option value="Jan">Jan</option>
              <option value="Feb">Feb</option>
              <option value="Mar">Mar</option>
              <option value="Apr">Apr</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="Aug">Aug</option>
              <option value="Sep">Sep</option>
              <option value="Oct">Oct</option>
              <option value="Nov">Nov</option>
              <option value="Dec">Dec</option>
            </select>
          </div>
        </div>

        {/* News Grid */}
        <div className={styles.newsGrid}>
          {filterData.map((elem) => (
            <InNewsComp id={elem.id} title={elem.title} date={elem.date} imgUrl={elem.imgUrl} url={elem.url} />
          ))}
        </div>

        {/* Carousal in Mobile view */}

        <div className={styles.swiper}>
          <SwiperComp data={data} />
        </div>
      </div>
    </section>
  );
};

export default InNews;
