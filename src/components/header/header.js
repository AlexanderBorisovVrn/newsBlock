import React from 'react';
import './header.scss';
import Auth from '../buttons/auth/auth';
import Search from '../UI/search/search';
import {Link} from 'react-router-dom';
import LogoImg from '../logo-img/logo-img';
import ButtonsGroup from '../buttons-group/buttons-group';
import NavBar from '../nav-bar/nav-bar';


const buttonsList=[
  <Search/>,
  <Auth/>
]

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
        <NavBar navItems = {navItems}/>
        <ButtonsGroup buttonsList={buttonsList} isDecorBorder={true}/>
      </div>
    </header>
  )
}

export default Header;