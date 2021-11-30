import React from 'react';
import './header.scss';
import Auth from '../buttons/auth/auth';
import Select from '../UI/select/select'
import Search from '../UI/search/search';
import {Link} from 'react-router-dom';
import LogoImg from '../logo-img/logo-img';
import ButtonsGroup from '../buttons-group/buttons-group';
import NavBar from '../nav-bar/nav-bar';

const buttonsList = [ < Search />, < Auth />
]

const options = [{
  disabled:false,
  value:'TOT',
  name:'T0t'
}]

const navItems = [
  'business',
  'entertainment',
  'health',
  'science',
  'sports',
  'technology'
]
const Header = () => {
  return (
    <header className='header'>
      <div className='wrap'>
        <div className='header__logo'>
          <Link to='/' className='header__link'>
            <LogoImg/>
          </Link>
        </div>
        <div className='nav'>
          <NavBar navItems={navItems}/>
        </div>
        <div className='header__more'>
          <Select
            options={options}
           />
        </div>
        <div className='header__buttons'>
        <ButtonsGroup buttonsList={buttonsList} isDecorBorder={true}/>
        </div>
      </div>

    </header>
  )
}

export default Header;