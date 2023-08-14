import React, { useState } from 'react';
import './defenceTabs.css';

const DefenceTabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="tabs">  
      <ul className="tab-list">
        {tabs.map((tab, index) => (
          <li key={index} className={index === activeTab ? 'active' : ''} onClick={() => setActiveTab(index)}>
            {tab.title}
          </li>
        ))}
      </ul>
      <div className="tab-content">{tabs[activeTab].content}</div>
    </div>
  );
};

export default DefenceTabs;
