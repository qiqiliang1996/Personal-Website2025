import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/ez100.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/dashboard.jpg';

const portfolioData = [
  {
    id: 1,
    image: IMG1,
    title: '[React Native - Frontend] EZ100 Online Shopping Mobile App',
    github: 'https://github.com/qiqiliang1996',
    demo: 'https://play.google.com/store/apps/details?id=com.ez100shop',
  },
  {
    id: 2,
    image: IMG2,
    title: '[React.js - Frontend] Game-Hub Website',
    github: 'https://github.com/qiqiliang1996/QiqiGameHub2025',
    demo: 'https://game-nuw2nifx3-kikis-projects-c50f8a1b.vercel.app/',
  },
  {
    id: 3,
    image: IMG3,
    title: '[React.js - Frontend] Qiqi User Dashboard',
    github: 'https://github.com/qiqiliang1996/AdminDashboard',
    demo: 'https://react-admin-dashboard-1iv6zyou9-kikis-projects-c50f8a1b.vercel.app/',
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
