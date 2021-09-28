import React from 'react';
import './buttons-group.scss';
import Auth from '../buttons/auth/auth';
import Search from '../UI/search/search';

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
