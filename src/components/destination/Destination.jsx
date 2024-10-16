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
      text: "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      index: 0,
    },
    {
      photo: Mars,
      title: 'Mars',
      text: "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!",
      index: 1,
    },
    {
      photo: Europa,
      title: 'Europa',
      text: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      index: 2,
    },
    {
      photo: Titan,
      title: 'Titan',
      text: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
      index: 3,
    },
  ];

  function handleItem(index) {
    setActiveItem(index);
  }

  return (
    <div className={style.container}>
      <Nav active={1} />
      <div className={style.subContainer}>
        <h1 className={style.title}>
          <span>01</span> PICK YOUR DESTINATION
        </h1>
        <div className={style.mainContainer}>
          <div className={style.photoDiv}>
            <img src={itens[activeItem].photo} alt="foto do astro celeste" />
          </div>
          <ul className={style.nav}>
            {itens.map((item) => (
              <li
                key={item.index}
                onClick={() => handleItem(item.index)}
                className={`${style.navItem} ${
                  activeItem === item.index ? style.active : ''
                }`}
              >
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
