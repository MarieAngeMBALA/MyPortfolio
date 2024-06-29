import React, { useEffect, useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { github, pineapple, pineappleHover } from '../assets';
import { projects } from '../constants';
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';        
import '../assets/css/responsive.css'; 
import '../assets/css/font-awesome.css';
import devops from '../assets/projects/devops.png';
import devindus from '../assets/projects/devindus.png';
import belgium from '../assets/projects/belgium.png';
import poubelle from '../assets/projects/poubelle.png';
import java from '../assets/projects/java.png';
import code from '../assets/projects/code.png';
import lid from '../assets/projects/lid.png';
import micro from '../assets/projects/micro.png';
import mobile from '../assets/projects/mobile.png';
import portfolio from '../assets/projects/portfolio.png';
import othello from '../assets/projects/othello.png';
import coupe from '../assets/projects/coupe.png';
import mans from '../assets/projects/mans.png';
import semestre from '../assets/projects/semestre.png';
import '../assets/css/bootstrap.css';
import '../assets/css/style.css';
import '../assets/css/animate.css';
import WorkExperiences from './WorkExperiences';
import SchoolProject from './SchoolProject';
import PersonalProject from './PersonalProject';
import Competitions from './Competitions';
import Rex from './Rex';

const ProjectCard = ({
  id,
  name,
  description,
  image,
  repo,
  demo,
  index,
  active,
  handleClick,
}) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className={`relative ${
        active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
      } flex items-center justify-center min-w-[170px] 
      h-[420px] cursor-pointer card-shadow`}
      onClick={() => handleClick(id)}>
      <div
        className="absolute top-0 left-0 z-10 bg-jetLight 
      h-full w-full opacity-[0.5] rounded-[24px]"></div>

      <img
        src={image}
        alt={name}
        className="absolute w-full h-full object-cover rounded-[24px]"
      />

      {active !== id ? (
        <div className="flex items-center justify-start pr-[4.5rem]">
          <h3
            className="font-extrabold font-beckman uppercase w-[200px] h-[30px] 
        whitespace-nowrap sm:text-[27px] text-[18px] text-timberWolf tracking-[1px]
        absolute z-0 lg:bottom-[7rem] lg:rotate-[-90deg] lg:origin-[0,0]
        leading-none z-20">
            {name}
          </h3>
        </div>
      ) : (
        <>
          <div
            className="absolute bottom-0 p-8 justify-start w-full 
            flex-col bg-[rgba(122,122,122,0.5)] rounded-b-[24px] z-20">
            <div className="absolute inset-0 flex justify-end m-3">
              <div
                onClick={() => window.open(repo, '_blank')}
                className="bg-night sm:w-11 sm:h-11 w-10 h-10 rounded-full 
                  flex justify-center items-center cursor-pointer
                  sm:opacity-[0.9] opacity-[0.8]">
                <img
                  src={github}
                  alt="source code"
                  className="w-4/5 h-4/5 object-contain"
                />
              </div>
            </div>

            <h2
              className="font-bold sm:text-[32px] text-[24px] 
              text-timberWolf uppercase font-beckman sm:mt-0 -mt-[1rem]">
              {name}
            </h2>
            <p
              className="text-silver sm:text-[14px] text-[12px] 
              max-w-3xl sm:leading-[24px] leading-[18px]
              font-poppins tracking-[1px]">
              {description}
            </p>
            <button
              className="live-demo flex justify-between 
              sm:text-[16px] text-[14px] text-timberWolf 
              font-bold font-beckman items-center py-5 pl-2 pr-3 
              whitespace-nowrap gap-1 sm:w-[138px] sm:h-[50px] 
              w-[125px] h-[46px] rounded-[10px] glassmorphism 
              sm:mt-[22px] mt-[16px] hover:bg-battleGray 
              hover:text-eerieBlack transition duration-[0.2s] 
              ease-in-out"
              onClick={() => window.open(demo, '_blank')}
              onMouseOver={() => {
                document
                  .querySelector('.btn-icon')
                  .setAttribute('src', pineappleHover);
              }}
              onMouseOut={() => {
                document
                  .querySelector('.btn-icon')
                  .setAttribute('src', pineapple);
              }}>
              <img
                src={pineapple}
                alt="pineapple"
                className="btn-icon sm:w-[34px] sm:h-[34px] 
                  w-[30px] h-[30px] object-contain"
              />
              LIVE DEMO
            </button>
          </div>
        </>
      )}
    </motion.div>
  );
};

const Projects = () => {

  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('WORK EXPERIENCES');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const tabs = {
    'WORK EXPERIENCES': <WorkExperiences />,
    'SCHOOL PROJECTS': <SchoolProject />,
    'PERSONAL PROJECTS': <PersonalProject />,
    'COMPETITIONS': <Competitions />,
    'MY INTERNSHIP REX' : <Rex />
  };


  return (
    <>
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>All my Work experiences, projects and competitions I took part in. --- International Experiences</p>
        <h2 className={`${styles.sectionHeadTextLight}`}>Experiences.</h2>
      </motion.div>

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

    </div>
    </>
  );
};

export default SectionWrapper(Projects, 'projects');
