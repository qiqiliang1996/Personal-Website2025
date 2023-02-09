import React from 'react';
import { BsLinkedin, BsGithub, BsYoutube } from 'react-icons/bs';

export default function HeaderSocials() {
  return (
    <div className='header__socials'>
      <a href='https://github.com/qiqiliang1996' target='__blank'>
        <BsGithub size={0} />
      </a>
      <a
        href='https://www.linkedin.com/in/qiqi-liang-7399441bb/'
        target='__blank'
      >
        <BsLinkedin size={0} />
      </a>
      <a href='https://www.youtube.com/@qiqiliang7793' target='__blank'>
        <BsYoutube size={0} />
      </a>
    </div>
  );
}
