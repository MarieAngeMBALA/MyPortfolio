import React, { useState } from 'react';
import { SectionWrapper } from '../hoc';
import WorkExperiences from './WorkExperiences';

const MyTabs = () => {
  const [activeTab, setActiveTab] = useState('work');

  const tabs = {
    work: <WorkExperiences />,
    school: "Contenu pour School Projects",
    personal: "Contenu pour Personal Projects",
    competitions: "Contenu pour Competitions"
  };

  return (
    <div>
      <div className="tab-titles">
        {Object.keys(tabs).map(key => (
          <button
            key={key}
            className={activeTab === key ? 'active' : ''}
            onClick={() => setActiveTab(key)}
          >
            {key.charAt(0).toUpperCase() + key.slice(1).replace('_', ' ')}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {tabs[activeTab]}
      </div>
    </div>
  );
};

export default SectionWrapper(MyTabs,'');
