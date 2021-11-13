import React from 'react';
import logo from './logo.png';
import {wrap,img} from './logo-img.module.scss';

const LogoImg = () => {
  return (
    <picture className={wrap}>
      <img alt='logo' src = {logo} className = {img}/>
    </picture>
  );
}

export default LogoImg;
