import React from 'react';
import style from './Destination.module.css';
import Nav from '../Nav';
import Europa from '../../assets/destination/image-europa.webp';
import Mars from '../../assets/destination/image-mars.webp';
import Moon from '../../assets/destination/image-moon.webp';
import Titan from '../../assets/destination/image-titan.webp';
import Title from '../Title';

const Destination = () => {
  const [activeItem, setActiveItem] = React.useState(0);
  const itens = [
    {
      photo: Moon,
      title: 'Moon',
      text: "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      distancia: '384,400 km',
      tempo: '3 days',
    },
    {
      photo: Mars,
      title: 'Mars',
      text: "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!",
      distancia: '225 MIL. km',
      tempo: '9 months',
    },
    {
      photo: Europa,
      title: 'Europa',
      text: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      distancia: '628 MIL. km',
      tempo: '3 years',
    },
    {
      photo: Titan,
      title: 'Titan',
      text: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
      distancia: '1.6 BIL. km',
      tempo: '7 years',
    },
  ];

  return (
    <div className={style.container}>
      <Nav active={1} />
      <div className={style.subContainer}>
        <Title number={'01'}>PICK YOUR DESTINATION</Title>
        <div className={style.mainContainer}>
          <div className={style.photoDiv}>
            <img src={itens[activeItem].photo} alt="foto do astro celeste" />
          </div>
          <div className={style.right}>
            <ul className={style.nav}>
              {itens.map((item, index) => (
                <li
                  key={index}
                  onClick={() => setActiveItem(index)}
                  className={`${style.navItem} ${
                    activeItem === index ? style.active : ''
                  }`}
                >
                  {item.title}
                </li>
              ))}
            </ul>
            <div className={style.content}>
              <h1 className={style.itemTitle}>{itens[activeItem].title}</h1>
              <p className={style.itemText}>{itens[activeItem].text}</p>
              <div className={style.infoDiv}>
                <div className={style.infoSubDiv}>
                  <h3 className={style.infoTitle}>AVG. DISTANCE</h3>
                  <span className={style.infoValue}>
                    {itens[activeItem].distancia}
                  </span>
                </div>
                <div className={style.infoSubDiv}>
                  <h3 className={style.infoTitle}>EST. TRAVEL TIME</h3>
                  <span className={style.infoValue}>
                    {itens[activeItem].tempo}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
