import React from 'react';
import useMedia from '../../hooks/useMedia';
import Nav from '../Nav';
import style from './Technology.module.css';
import Title from '../Title';
import launchMobile from '../../assets/technology/image-launch-vehicle-landscape.jpg';
import launch from '../../assets/technology/image-launch-vehicle-portrait.jpg';
import capsuleMobile from '../../assets/technology/image-space-capsule-landscape.jpg';
import capsule from '../../assets/technology/image-space-capsule-portrait.jpg';
import spaceportMobile from '../../assets/technology/image-spaceport-landscape.jpg';
import spaceport from '../../assets/technology/image-spaceport-portrait.jpg';

const Technology = () => {
  const portrait = useMedia('(max-width: 768px)');
  const [activeItem, setActiveItem] = React.useState(0);
  const itens = [
    {
      title: 'LAUNCH VEHICLE',
      text: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
      photo: launch,
      mobile: launchMobile,
    },
    {
      title: 'SPACEPORT',
      text: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth's rotation for launch.",
      photo: capsule,
      mobile: capsuleMobile,
    },
    {
      title: 'SPACE CAPSULE',
      text: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
      photo: spaceport,
      mobile: spaceportMobile,
    },
  ];

  return (
    <div className={style.container}>
      <Nav active={3} />
      <div className={style.subContainer}>
        <Title number={'03'}>SPACE LAUNCH 101</Title>
        <div className={style.mainContainer}>
          <div className={style.leftDiv}>
            <nav className={style.navDiv}>
              <ul className={style.nav}>
                {itens.map((item, index) => (
                  <li
                    key={index}
                    className={`${style.navItem} ${
                      activeItem === index ? style.active : ''
                    }`}
                    onClick={() => setActiveItem(index)}
                  >
                    {index + 1}
                  </li>
                ))}
              </ul>
            </nav>
            <div className={style.contentDiv}>
              <h3 className={style.subTitle}>THE TERMINOLOGY…</h3>
              <h2 className={style.title}>{itens[activeItem].title}</h2>
              <p className={style.desc}>{itens[activeItem].text}</p>
            </div>
          </div>
          <div className={style.photoDiv}>
            <img
              src={
                portrait ? itens[activeItem].mobile : itens[activeItem].photo
              }
              alt="serviço foto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
