import React from 'react';
import style from './Crew.module.css';
import Nav from '../Nav';
import Title from '../Title';
import Douglas from '../../assets/crew/image-douglas-hurley.webp';
import Mark from '../../assets/crew/image-mark-shuttleworth.webp';
import Victor from '../../assets/crew/image-victor-glover.webp';
import Anousheh from '../../assets/crew/image-anousheh-ansari.webp';

const Crew = () => {
  const [activeItem, setActiveItem] = React.useState(0);
  const members = [
    {
      position: 'Commander',
      name: 'DOUGLAS HURLEY',
      desc: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
      photo: Douglas,
    },
    {
      position: 'Mission Specialist',
      name: 'MARK SHUTTLEWORTH',
      desc: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
      photo: Mark,
    },
    {
      position: 'PILOT',
      name: 'VICTOR GLOVER',
      desc: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.',
      photo: Victor,
    },
    {
      position: 'Flight Engineer',
      name: 'Anousheh Ansari',
      desc: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
      photo: Anousheh,
    },
  ];

  return (
    <div className={style.container}>
      <Nav active={2} />
      <div className={style.subContainer}>
        <Title number={'02'}>MEET YOUR CREW</Title>
        <div className={style.mainContainer}>
          <div className={style.leftDiv}>
            <div className={style.info}>
              <h3 className={style.position}>{members[activeItem].position}</h3>
              <h2 className={style.name}>{members[activeItem].name}</h2>
              <p className={style.desc}>{members[activeItem].desc}</p>
            </div>
            <nav className={style.navDiv}>
              <ul className={style.nav}>
                {members.map((member, index) => (
                  <li
                    key={index}
                    onClick={() => setActiveItem(index)}
                    className={`${style.navItem} ${
                      activeItem === index ? style.active : ''
                    }`}
                  ></li>
                ))}
              </ul>
            </nav>
          </div>
          <div className={style.photoDiv}>
            <img src={members[activeItem].photo} alt="foto do tripulante" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crew;
