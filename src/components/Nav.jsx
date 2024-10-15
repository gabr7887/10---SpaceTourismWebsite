import React from 'react';
import logo from '../assets/shared/logo.svg';
import style from './Nav.module.css';

const Nav = ({ active }) => {
  const [activeMenu, setActiveMenu] = React.useState(false);

  return (
    <div className={style.container}>
      <div className={style.logoDiv}>
        <img src={logo} alt="Logo marca" />
      </div>
      <div className={style.detailDiv}>
        <p className={style.detail}> </p>
      </div>
      <div
        className={style.hamburgerMenuDiv}
        onClick={() => {
          setActiveMenu(true);
        }}
      >
        <p className={style.menuBar}> </p>
        <p className={style.menuBar}> </p>
        <p className={style.menuBar}> </p>
      </div>
      <nav className={`${style.ulBg} ${activeMenu ? style.activeMenu : ''}`}>
        <div
          className={style.closeIcon}
          onClick={() => {
            setActiveMenu(false);
          }}
        >
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
          <li className={active === 1 ? style.active : ''}>01 - DESTINATION</li>
          <li className={active === 2 ? style.active : ''}>02 - CREW</li>
          <li className={active === 3 ? style.active : ''}>03 - TECHNOLOGY</li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
