import React from 'react';
import './header.scss';
import Auth from '../buttons/auth/auth';
import Select from '../UI/select/select'
import Search from '../UI/search/search';
import LogoImg from '../logo-img/logo-img'
import {Link} from 'react-router-dom';
import {setNavVisibility} from '../../reducers/displayParamsSlice'
import ButtonsGroup from '../buttons-group/buttons-group';
import HeaderToggle from '../header-toggle/header-toggle';
import {useDispatch, useSelector} from 'react-redux';
import NavBar from '../nav-bar/nav-bar';

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
  const dispatch = useDispatch();
  const {isNavVisible} = useSelector(state => state.displayParams);
  let navVisibilityClass =isNavVisible?'header__nav': 'header__nav isVisible';
  return (
    <header className='header'>
      <div className='header__wrap'>
        <div className='header__logo'>
          <Link to='/' className='header__link'>
            <LogoImg/>
          </Link>
        </div>
        <div className={navVisibilityClass}>
          <NavBar/>
        </div>
        <div className='header__select'>
          <Select options={options}/>
        </div>
        <div
          className='header__toggle'
          onClick={() => {
          dispatch(setNavVisibility())
        }}>
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