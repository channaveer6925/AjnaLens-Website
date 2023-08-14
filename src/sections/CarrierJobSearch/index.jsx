import React, { useRef, useState } from 'react';
import searchIcon from '../../asets/searchIcon.png';
import CarrierJob from '../CarrierJobSec';
import JobItem from '../CarrierJobSec/JobItem';
import styles from './styles.module.css';
const JobSearch = () => {
  const jobData = [
    {
      section: 'Technical',
      roles: [
        { jobRole: 'C++ Developer', link: 'C++%20Developer.json' },
        { jobRole: 'Android Framwork Developer (ASOP)', link: 'Android%20Framework%20Developer%20(AOSP).json' },
      ],
    },
    {
      section: 'Design',
      roles: [{ jobRole: 'UI/UX Designer', link: 'UIUX%20Designer.json' }],
    },
    {
      section: 'Marketing',
      roles: [
        { jobRole: 'Senior Marketing Specialist', link: 'Senior%20Marketing%20Specialist.json' },
        { jobRole: 'Social Media Marketing Specialist', link: 'Social%20Media%20Marketing%20Specialist.json' },
      ],
    },
    {
      section: 'Business',
      roles: [
        { jobRole: 'Business Development Associate', link: 'Business%20Development%20Associate.json' },
        { jobRole: 'Logistics Executive', link: 'Logistics%20Executive.json' },
      ],
    },
  ];

  const jobSearch = useRef();
  const [filteredJobsData, setFilteredJobsData] = useState([]);
  const handleJobSearch = (e) => {
    if (e.keyCode === 13 && jobSearch.current.value) {
      const condition = new RegExp(jobSearch.current.value, 'i');
      const resultData = jobData.map((el) => {
        const role = el.roles;
        let result = role.filter((item) => {
          return condition.exec(item.jobRole);
        });
        return result;
      });

      const jobs = resultData.filter((el) => {
        return el.length > 0;
      });
      setFilteredJobsData(jobs[0]);
    }
  };
  return (
    <section>
      <div className={styles.searchSec}>
        <input
          type="text"
          className={styles.inputsec}
          placeholder="Job title E.g Unity developer"
          ref={jobSearch}
          onKeyDown={handleJobSearch}
        />
        <img src={searchIcon} alt="search" className={styles.searchIcon} />
      </div>
      {/* <JobItem jobs={filteredJobsData}/> */}
      {filteredJobsData?.length > 0 ? <JobItem jobs={filteredJobsData} /> : <CarrierJob jobData={jobData} />}
    </section>
  );
};

export default JobSearch;
