import React from 'react';
import './header.scss';
import ProfileIn from '../profile-in';
import {Link} from 'react-router-dom';
import img from './logo.png';
import { useDispatch } from 'react-redux';
import {setCategory} from './../../actions';

const Header = () => {
  const dispatch = useDispatch();
  const links = [
    'news',
    'business',
    'entertainment',
    'health',
    'science',
    'sports',
    'technology'
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
          {links.map((link, idx) => {
            return (
              <div className='nav__item' key={idx} onClick={()=>{dispatch(setCategory(link))}}>
                <Link to='/news/' className='nav__link'>
                  <span>{link}</span>
                </Link>
              </div>
            )
          })}
        </nav>
        <ProfileIn/>
      </div>
    </header>
  )
}

export default Header;