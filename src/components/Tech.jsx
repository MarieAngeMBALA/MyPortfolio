import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';
import image1 from './images/Portfolio/01.jpg';
import image2 from './images/Portfolio/02.jpg';
import image3 from './images/Portfolio/03.jpg';
import image4 from './images/Portfolio/04.jpg';
import image5 from './images/Portfolio/05.jpg';
import image6 from './images/Portfolio/06.jpg';
import fleche from '../assets/tech/fleche.png';
import flecheAvant from '../assets/tech/flecheAvant.png';

const images = [
  { src: image1, category: 'IA', description: 'IBM Data Science Professional' },
  { src: image2, category: 'trading', description: 'CFA' },
  { src: image3, category: 'data', description: 'Apache Spark Developer' },
  { src: image4, category: 'data', description: 'Confluent Kafka' },
  { src: image5, category: 'IA', description: 'Google Professional Machine Learning Engineer' },
  { src: image6, category: 'trading', description: 'Algorithmic Trading & Quantitative Analysis Using Python' },
];

const competences = [
  { category: 'CLOUD COMPUTING', description: 'Expertise in cloud services and architectures (AWS, Azure, Google Cloud, OVH) .................................................................................  Deploy scalable solutions and reduce infrastructure costs ..................................................................................' },
  { category: 'PROJECT MANAGEMENT', 
    description: 'Agile and Scrum methodologies ..................................................................................... Good knowledge of AzurDevops and JIRA ..................................................................................... Writing reports and specifications ..................................................................................... Team management ..................................................................................... Identification and Analysis of risks ..................................................................................... ' },
  { category: 'COMPLEX ALGORITHMS', description: '>>Understanding data structures(stacks etc..) .................................................................................... >>Solid grounding in advanced mathematics .................................................................................... >>Sorting and graphing algorithms ....................................................................................' },
  { category: 'INTERPERSONAL SKILLS', 
    description: '>>Team Work .................................................................................... >>Time and Conflict management .................................................................................... >>Fluid communication ....................................................................................' },
  { category: 'PROGRAMMING & CODING', description: '>>Python .................................................................................. >>C++, Java, C#, Kotlin, React .................................................................................. >>Prolog, SQL ................................................................................. >>Matlab .................................................................................. >>C, Assembly ................................................................................. >>Web Programming ..................................................................................' },
  { category: 'EMBEDDED SYSTEMS', description: '>>Microcontrollers & Microprocessors ............................................................................... >>RTOS (Real-Time Operating Systems) ............................................................................ >>Reading technical documentation .................................................................................. >>Labview, HAL ..................................................................................... >>communication protocol .................................................................................' },
];


const Tech = () => {
  const [filter, setFilter] = useState('all');

  const handleFilterClick = (e, category) => {
    e.preventDefault();
    setFilter(category);
  };

  const filteredImages = images.filter(img => filter === 'all' || img.category === filter);

  const variants = {
    hidden: { opacity: 0, scale: 0.95, transition: { duration: 0.3 } },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, scale: 1.05, transition: { duration: 0.3 } }
  };

  const [index, setIndex] = useState(0);

  const handleNext = () => {
    if (index < competences.length - 3) {
      setIndex(current => current + 1);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex(current => current - 1);
    }
  };



  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>my skills and certifications</p>
        <h2 className={styles.sectionHeadTextLight}>Portfolio.</h2>
      </motion.div>

      <section id="portfolio">
        <div className="text-center">
          <div class="heading">
            <h2>CERTIFICATIONS</h2>
            <div class="line"></div>
            <p><span><strong>I</strong></span>n order to deepen my knowledge and acquire new skills, I have taken a number of certifications</p>
          </div>
          <ul className="portfolio-filter">
            <li><a href="#" onClick={(e) => handleFilterClick(e, 'all')} className={filter === 'all' ? 'active' : ''}>All</a></li>
            <li><a href="#" onClick={(e) => handleFilterClick(e, 'IA')} className={filter === 'IA' ? 'active' : ''}>IA and Data Science</a></li>
            <li><a href="#" onClick={(e) => handleFilterClick(e, 'data')} className={filter === 'data' ? 'active' : ''}>Real-time Data Analysis</a></li>
            <li><a href="#" onClick={(e) => handleFilterClick(e, 'trading')} className={filter === 'trading' ? 'active' : ''}>Finance & Algorithmic trading</a></li>
          </ul>
        </div>
        <div className="portfolio-items">
          <AnimatePresence>
            {filteredImages.map((img, index) => (
              <motion.div
                key={img.src}
                variants={variants}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
                className="portfolio-item"
              >
                <div className="portfolio-item-inner">
                  <img className="img-responsive" src={img.src} alt={`Item ${index + 1}`} />
                  <div className="portfolio-info">
                    <h6>CERTIFICATION-{index + 1}</h6>
                    <p>{img.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

<br/>
      <div class="headings">
            <h2>RELEVANTS SKILLS</h2>
            <div class="lines"></div>
            <p><span><strong>A</strong></span>ll my experience and certifications have given me many skills.</p>
       </div> 

      <section style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        position: 'relative',
        width: '100%', // Assurez-vous que le conteneur est assez large
        height: '550px' // Hauteur minimale pour éviter le chevauchement
      }}>
       
      <button onClick={handlePrev} disabled={index === 0} style={{
        position: 'absolute', 
        left: 0,
        top: '50%', 
        transform: 'translateY(-50%)',
        zIndex: 1000
      }}>
        <img src={flecheAvant} alt="Previous" style={{ width: '50px', height: '50px' }}/>
      </button>
      <AnimatePresence initial={false}>
        {competences.slice(index, index + 3).map((comp, i) => (
          <motion.div
            key={comp.category}
            initial={{ x: i === 2 ? 100 : -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1, scale: i === 1 ? 1.2 : 1 }} // Mise en avant du cadre du milieu
            exit={{ x: i === 0 ? -100 : 100, opacity: 0 }}
            transition={{
              x: { type: 'spring', stiffness: 90, damping: 10 },
              opacity: { duration: 0.8 }
            }}
            style={{
              margin: '0 10px',
              width: i === 1 ? '375px' : '375px', // Largeur ajustée pour le cadre du milieu
              height: i === 1 ? '430px' : '470px', // Hauteur ajustée pour le cadre du milieu
              position: 'absolute',
              left: `${i * 400}px`, // Positionnement ajusté pour un espacement uniforme
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'black',
              backgroundColor: 'white',
              boxShadow: '0 0 40px rgba(0,0,0,0.1)',
              zIndex: i === 1 ? 3 : 1 // z-index plus élevé pour le cadre du milieu
            }}
          >
            <h5 style={{color: '#DAA520', fontSize:'22px', fontWeight:'bold'}}>{comp.category}</h5>
            <br />
            <h1>{comp.description}</h1>
          </motion.div>
        ))}
      </AnimatePresence>
      <button onClick={handleNext} disabled={index === competences.length - 3} style={{
        position: 'absolute', 
        right: 0,
        top: '50%', 
        transform: 'translateY(-50%)',
        zIndex: 1000
      }}>
        <img src={fleche} alt="Next" style={{ width: '50px', height: '50px' }} />
      </button>
    </section>



    </>
  );
};

export default SectionWrapper(Tech, 'portfolio');
