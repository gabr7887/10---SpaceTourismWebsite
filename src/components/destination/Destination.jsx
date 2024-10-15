import React from 'react';
import style from './Destination.module.css';
import Nav from '../Nav';
import Europa from '../../assets/destination/image-europa.webp';
import Mars from '../../assets/destination/image-mars.webp';
import Moon from '../../assets/destination/image-moon.webp';
import Titan from '../../assets/destination/image-titan.webp';

const Destination = () => {
  const [activeItem, setActiveItem] = React.useState(0);
  const itens = [
    {
      photo: Moon,
      title: 'Moon',
      index: 0,
    },
    {
      photo: Mars,
      title: 'Mars',
      index: 1,
    },
    {
      photo: Europa,
      title: 'Europa',
      index: 2,
    },
    {
      photo: Titan,
      title: 'Titan',
      index: 3,
    },
  ];

  return (
    <div className={style.container}>
      <Nav active={1} />
      <div className={style.subContainer}>
        <h1 className={style.title}>
          <span>01</span> PICK YOUR DESTINATION
        </h1>
        <div className={style.mainContainer}>
          <div className={style.photoDiv}></div>
          <ul className={style.nav}>
            {itens.map((item) => (
              <li key={item.index} className={style.navItem}>
                {item.title}
              </li>
            ))}
          </ul>
          <div className={style.content}></div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
