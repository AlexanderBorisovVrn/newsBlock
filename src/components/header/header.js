import React from 'react';
import './header.scss';
import Auth from '../buttons/auth/auth';
import Search from '../UI/search/search';
import {Link} from 'react-router-dom';
import LogoImg from '../logo-img/logo-img';
import {useDispatch} from 'react-redux';
import {setCategory} from './../../reducers/querySlice';
import ButtonsGroup from '../buttons-group/buttons-group';


const buttonsList=[
  <Search/>,
  <Auth/>
]

const links = [
  'business',
  'entertainment',
  'health',
  'science',
  'sports',
  'technology'
]
const Header = () => {
  const dispatch = useDispatch();



  return (
    <header className='header'>
      <div className='wrap'>
        <div className='header__logo'>
          <Link to='/' className='header__link'>
            <LogoImg/>
          </Link>
        </div>
        <nav className='nav'>
          {links.map((link, idx) => {
            return (
              <div
                className='nav__item'
                key={idx}
                onClick={() => {
                dispatch(setCategory(link))
              }}>
                <Link to={`/${link}`} className='nav__link'>
                  <span>{link}</span>
                </Link>
              </div>
            )
          })}
        </nav>
        <ButtonsGroup buttonsList={buttonsList} isDecorBorder={true}/>
      </div>
    </header>
  )
}

export default Header;