import React from 'react';
import style from './Title.module.css';

const Title = ({ number, children, className }) => {
  return (
    <h1 className={style.title}>
      <span>{number}</span> {children}
    </h1>
  );
};

export default Title;
