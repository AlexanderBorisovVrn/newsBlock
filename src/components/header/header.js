import React, {useState} from 'react';
import './header.scss';
import Profile from '../sing-buttons';
import {Link} from 'react-router-dom';
import img from './logo.png';

const Header = () => {
  const links = [
    {
      title: 'news',
      path: '/news/',
      id: 2
    }, {
      title: 'lorem',
      path: '/lorem/',
      id: 3
    }
  ]

  return (
    <header className='header'>
      <div className='wrap'>
        <div className='header__logo'>
          <Link to='/' className='header__link'>
            <img alt='' src={img} className='header__img'/>
          </Link>
        </div>
        <nav className='nav'>
          {links.map(link => {
            const {id, title, path} = link;
            return (
              <div className='nav__item' key={id}>
                <Link to={path} className='nav__link'>
                  <span>{title}</span>
                </Link>
              </div>
            )
          })}
        </nav>
        <Profile/>
      </div>
    </header>
  )
}

export default Header;