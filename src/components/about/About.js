import './about.css';
import ME from '../../assets/me-about.jpg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

const aboutData = [
  {
    section: '#experiences',
    icon: <FaAward className='about__icon' />,
    title: 'Experience',
    smallText: '3 Years Development Experience',
  },
  {
    section: '#testimonials',
    icon: <FiUsers className='about__icon' />,
    title: 'Feedback',
    smallText: 'Reviews from Collegues',
  },
  {
    section: '#portfolio',
    icon: <VscFolderLibrary className='about__icon' />,
    title: 'Projects',
    smallText: '4+ Completed',
  },
];

export default function About() {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='About Image' />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            {aboutData.map(({ section, icon, title, smallText }) => (
              <a href={section} key={section}>
                <article className='about__card'>
                  {icon}
                  <h5>{title}</h5>
                  <small>{smallText}</small>
                </article>
              </a>
            ))}
          </div>

          <div className='about__intro'>
            <p>
              My name is Qiqi Liang, I am a software engineer currently working
              as a <em> React Frontend Developer </em> in Acuity.Inc.
            </p>
            <p>
              My current job primary responsibility is to develop and enhance
              the webApps using <em> React and GraphQL </em>
              for The Department of Homeland Security.
            </p>

            <p>
              I previously deployed an shopping webApp{' '}
              <a href='https://www.ez100.com/' target='_blank'>
                EZ100.com
              </a>{' '}
              using <em>Ract and Redux</em> for my former company, Easy
              Hundred.Inc.
            </p>
          </div>

          <a href='#contact' className='btn btn-primary'>
            LEt's Talk
          </a>
        </div>
      </div>
    </section>
  );
}
