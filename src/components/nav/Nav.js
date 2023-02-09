import { useState } from 'react';
import './nav.css';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';

const navData = [
  { section: '#', icon: <AiOutlineHome /> },
  { section: '#about', icon: <AiOutlineUser /> },
  { section: '#experiences', icon: <BiBook /> },
  { section: '#contact', icon: <BiMessageSquareDetail /> },
];

export default function Nav() {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      {navData.map(({ section, icon }) => (
        <a
          href={section}
          onClick={() => {
            setActiveNav(section);
          }}
          className={activeNav === section ? 'active' : ''}
        >
          {icon}
        </a>
      ))}
    </nav>
  );
}
