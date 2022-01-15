import React from 'react';
import ButtonsGroup from '../buttons-group/buttons-group';
import {icon,link} from './socials.module.scss';
import fb from '../../icons/loon-icon fb.svg';
import vk from '../../icons/loon-icon vk.svg';

const Socials = () => {
  const buttons = [
    {
      title: 'fb',
      src: fb,
      href: 'http://fb.com'
    }, {
      title: 'vk',
      src: vk,
      href: 'http://vk.com'
    }
  
  ]
  const buttonsList = buttons.map(({title, src, href},idx) =>
    <a href={href} className={link} target='_blanc' key={idx}>
      <img alt={title} src={src} className={icon}/>
    </a>
)

  return <ButtonsGroup>
    {buttonsList}
  </ButtonsGroup>
}

export default Socials;
