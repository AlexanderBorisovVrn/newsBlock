import React from 'react';
import './header.scss';
import Auth from '../buttons/auth/auth';
import Select from '../UI/select/select'
import Search from '../UI/search/search';
import LogoImg from '../logo-img/logo-img'
import {Link} from 'react-router-dom';
import ButtonsGroup from '../buttons-group/buttons-group';
import HeaderToggle from '../header-toggle/header-toggle';

const buttonsList = [ < Search />, < Auth />
]

const options = [
  {
    disabled: false,
    value: 'TOT',
    name: 'T0t'
  }
]

const Header = () => {
  return (
    <header className='header'>
      <div className='header__wrap'>
        <div className='header__logo'>
          <Link to='/' className='header__link'>
            <LogoImg/>
          </Link>
        </div>
        <div className='header__select'>
          <Select options={options}/>
        </div>
        <div className='header__toggle'>
          <HeaderToggle/>
        </div>
        <div className='header__buttons'>
          <ButtonsGroup buttonsList={buttonsList} isDecorBorder={true}/>
        </div>
      </div>

    </header>
  )
}

export default Header;