import React from 'react';
import { textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import trading from '../assets/personal/trading.png';
import musique from '../assets/personal/musique.png';


const HobbiesCard = ({ image, title, date, excerpt, author, commentCount }) => {
    return (
      <div style={{
        width: '300px',
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        margin: '20px',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <img src={image} alt={title} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
        <div style={{ padding: '10px' }}>
          <div style={{ fontSize: '14px', color: '#666', marginBottom: '5px' }}>{date.toUpperCase()}</div>
          <h3 style={{ fontSize: '20px', margin: '0 0 10px 0', color: 'purple', fontWeight: 'bold' }}>{title}</h3>
          <p style={{ fontSize: '15px', color: '#333', marginBottom: '4px' }}>{excerpt}</p>
        </div>
      </div>
    );
  };

const Hobbies = () => {
  const blogPosts = [
    {
      image: trading,
      title: 'Trading',
      date: 'Since 2019',
      excerpt: 'Trading is my passion and i have been doing it every day for 5 years.',
    },
    {
      image: musique,
      title: 'Music',
      date: 'Since 2022',
      excerpt: 'For a while now, i have really enjoyed playing the guitar and piano. It helps me concentrate while having fun.',
    },
   
    // Ajoutez d'autres articles si nécessaire
  ];

  return (
    <>
    
    <div>
        <motion.div variants={textVariant()}>
            <p className={`${styles.sectionSubText} `}>These hobbies are the ones I love most of all</p>
            <h2 className={styles.sectionHeadTextLight} >My Favorite Hobbies.</h2>
        </motion.div>
    </div>
    <div style={{ display: 'flex',  flexWrap: 'wrap' }}>
      {blogPosts.map((post, index) => (
        <HobbiesCard key={index} {...post} />
      ))}
    </div>
    </>
  );
};

export default SectionWrapper(Hobbies,'hobbies');
