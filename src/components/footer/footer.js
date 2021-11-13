import React from 'react';
import Socials from '../socials/socials';
import {footer, inner, footerLogo} from './footer.module.scss';

const Footer = () => {
  return <footer className={footer}>
    <div className={inner}>
      <div className={footerLogo}>
        <span>Stekay stek.2021 &#169;</span>
      </div>
      <Socials/>
    </div>
  </footer>
}

export default Footer;