import React from 'react';
import {wrap,img} from './logo-img.module.scss';
import logo from './logo.png';
const LogoImg = () => {
  return (
    <div className={wrap}>
      <img alt='logo' src = {logo} className = {img}/>
    </div>
  );
}

export default LogoImg;
