import React from 'react';
import Nav from './Nav';
import style from './Home.module.css';

const Home = () => {
  return (
    <div className={style.container}>
      <Nav active={0} />
      <div className={style.subContainer}>
        <div className={style.content}>
          <span>SO, YOU WANT TO TRAVEL TO</span>
          <h1>SPACE</h1>
          <p>
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className={style.explore}>
          <p>explore</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
