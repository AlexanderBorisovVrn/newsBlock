import React from 'react';
import './buttons-group.scss';
import Search from '../buttons/search/search';
import Auth from '../buttons/auth/auth';

const ButtonsGroup = () => {
  return (
    <div className='buttons-group'>
      <ul className='buttons-group__list'>
        <li className='buttons-group__item'><Search/></li>
        <li className='buttons-group__item'><Auth/></li>
      </ul>
    </div>
  );
}

export default ButtonsGroup;
