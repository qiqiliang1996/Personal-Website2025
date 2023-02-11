import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/ez100.jpg';
import IMG2 from '../../assets/qiqiApp.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';

const portfolioData = [
  {
    id: 1,
    image: IMG1,
    title: '[React Native - Frontend] EZ100 Online Shopping Mobile App',
    github: 'https://github.com/qiqiliang1996',
    demo: 'https://apps.apple.com/us/app/ez100-restaurant-supplies/id1513291811',
  },
  {
    id: 2,
    image: IMG2,
    title: '[React Native - Fullstack] QiqiApp Share & Contact Mobile App',
    github: 'https://github.com/qiqiliang1996/QiqiApp-Expo-ReactNative',
    demo: 'https://play.google.com/store/apps/details?id=com.qiqiappfinal',
  },
  {
    id: 3,
    image: IMG3,
    title: '[React.js - Fullstack] Social Media Website',
    github: 'https://github.com/qiqiliang1996/2023-FullStack-Frontend',
    demo: 'https://qiqi-liang-frontend2.herokuapp.com/',
  },
];

export default function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Projects</h2>
      <div className='container portfolio__container'>
        {portfolioData.map((item) => (
          <article className='portfolio__items' key={item.id}>
            <div className='portfolio__item-image'>
              <img src={item.image} alt='portfolioImage' />
            </div>
            <h3>{item.title}</h3>
            <div className='portfolio__item-cta'>
              <a href={item.github} className='btn' target='_blank'>
                Github
              </a>
              <a href={item.demo} className='btn btn-primary' target='_blank'>
                Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
