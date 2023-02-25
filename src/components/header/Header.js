import './header.css';
import CTA from './CTA';
import ME from '../../assets/me.png';
import HeaderSocials from './HeaderSocials';

export default function Header() {
  return (
    <header>
      <div className='container header__container'>
        <h2>Qiqi Liang</h2>
        <h5 className='text-light'>Frontend Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className='me'>
          <img src={ME} alt='me' />
        </div>
        <a href='#contact' className='scroll__down'>
          Scroll Down
        </a>
      </div>
    </header>
  );
}
