import React from 'react';
import {avatar} from './avatar.module.scss'
import svg from '../../icons/296990.svg';

const Avatar = ({src=svg,...props}) => {
  return (
 <img {...props} alt = 'avatar' src={src} className={avatar}/>
  );
}

export default Avatar;

