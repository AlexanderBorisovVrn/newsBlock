import React from 'react';
import './header.scss';
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
        <button className='profile'>
          <div className='profile__wrapper'>
            <div className='profile__name'>
              <span>василь</span>
            </div>
            <div className='profile__img-wrap'>
              <img
                alt=''
                className='profile__img'
                src='https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80'/>
            </div>
          </div>
          <div className={profileInHover}>
            <button type='button' className='profile__sign-up'>
              <span>Регистрация</span>
            </button>
            <button type='button' className='profile__sign-in'>
              <span>войти</span>
            </button>
          </div>
        </button>
      </div>
    </header>
  )
}

export default Header;