import React from 'react';
import logo from './assets/shared/logo.svg';
import style from './Nav.module.css';

const Nav = ({ active }) => {
  return (
    <div className={style.container}>
      <div className={style.logoDiv}>
        <img src={logo} alt="Logo marca" />
      </div>
      <div className={style.detailDiv}>
        <p className={style.detail}> </p>
      </div>
      <div className={style.hamburgerMenuDiv}>
        <p className={style.menuBar}> </p>
        <p className={style.menuBar}> </p>
        <p className={style.menuBar}> </p>
      </div>
      <nav className={style.ulBg}>
        <div className={style.closeIcon}>
          <p className={style.closeBar1}> </p>
          <p className={style.closeBar2}> </p>
        </div>
        <ul className={style.navItems}>
          <li className={active === 0 ? style.active : ''}>
            {active === 0 &&
            window.innerWidth >= 530 &&
            window.innerWidth <= 768
              ? 'HOME'
              : '00 - HOME'}
          </li>
          <li className={active === 1 ? style.active : ''}>
            <p>01 - DESTINATION</p>
          </li>
          <li className={active === 2 ? style.active : ''}>
            <p>02 - CREW</p>
          </li>
          <li className={active === 3 ? style.active : ''}>
            <p>03 - TECHNOLOGY</p>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
