import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/movies.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/dashboard.jpg';

const portfolioData = [
  {
    id: 1,
    image: IMG1,
    title: '[Fullstack - Java, SpringBoot, React] Qiqi Movie Theater',
    github: 'https://github.com/qiqiliang1996',
    demo: 'https://movies-frontend2025.vercel.app/',
  },
  {
    id: 2,
    image: IMG2,
    title: '[Frontend - React] Game-Hub Website',
    github: 'https://github.com/qiqiliang1996/',
    demo: 'https://game-hub-kikis-projects-c50f8a1b.vercel.app//',
  },
  {
    id: 3,
    image: IMG3,
    title: '[Frontend - React] Qiqi User Dashboard',
    github: 'https://github.com/qiqiliang1996/',
    demo: 'https://react-admin-dashboard-alpha-eight.vercel.app/',
  },
];

export default function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Projects (All Deployed)</h2>
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
