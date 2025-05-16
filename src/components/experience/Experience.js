import React from 'react';
import './experience.css';
import { BsPatchCheck } from 'react-icons/bs';

const checkIcon = <BsPatchCheck className='experience__details__icon' />;
const experiencedText = 'Experienced';

const experienceDataFrontend = [
  {
    icon: checkIcon,
    title: 'JavaScript',
    smallText: experiencedText,
  },
  {
    icon: checkIcon,
    title: 'TypeScript',
    smallText: experiencedText,
  },
  {
    icon: checkIcon,
    title: 'React',
    smallText: experiencedText,
  },
  {
    icon: checkIcon,
    title: 'Redux',
    smallText: experiencedText,
  },

  {
    icon: checkIcon,
    title: 'Bootstrap',
    smallText: experiencedText,
  },
  {
    icon: checkIcon,
    title: 'MUI',
    smallText: experiencedText,
  },
  {
    icon: checkIcon,
    title: 'HTML',
    smallText: experiencedText,
  },
  {
    icon: checkIcon,
    title: 'CSS',
    smallText: experiencedText,
  },
];

const experienceDataBackend = [
  {
    icon: checkIcon,
    title: 'Java',
    smallText: experiencedText,
  },
  {
    icon: checkIcon,
    title: 'Spring Boot',
    smallText: experiencedText,
  },
  {
    icon: checkIcon,
    title: 'REST API',
    smallText: experiencedText,
  },
  {
    icon: checkIcon,
    title: 'SQL',
    smallText: experiencedText,
  },
  {
    icon: checkIcon,
    title: 'Node.js',
    smallText: experiencedText,
  },

  {
    icon: checkIcon,
    title: 'Express.js',
    smallText: experiencedText,
  },
  {
    icon: checkIcon,
    title: 'MongoDB',
    smallText: experiencedText,
  },

  {
    icon: checkIcon,
    title: 'GraphQL',
    smallText: experiencedText,
  },
];

export default function Experience() {
  return (
    <section id='experiences'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            {experienceDataFrontend.map(({ icon, title, smallText }) => (
              <article className='experience__details' key={title}>
                {icon}
                <div>
                  <h4>{title}</h4>
                  <small className='text-light'>{smallText}</small>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className='experience__backend'>
          <h3>Backend Development</h3>
          <div className='experience__content'>
            {experienceDataBackend.map(({ icon, title, smallText }) => (
              <article className='experience__details' key={title}>
                {icon}
                <div style={{}}>
                  <h4>{title}</h4>
                  <small className='text-light'>{smallText}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
