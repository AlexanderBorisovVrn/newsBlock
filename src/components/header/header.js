import React, {useEffect} from 'react';
import './header.scss';
import Auth from '../auth/authButton/auth';
import Search from '../UI/search/search';
import LogoImg from '../logo-img/logo-img'
import {Link} from 'react-router-dom';
import {setNavVisibility} from '../../reducers/displayParamsSlice'
import ButtonsGroup from '../buttons-group/buttons-group';
import HeaderToggle from '../header-toggle/header-toggle';
import {useDispatch, useSelector} from 'react-redux';
import NavBar from '../nav-bar/nav-bar';
import {useResize} from '../hooks/useResize';

const Header = () => {
  const dispatch = useDispatch();
  const size = useResize()
  const {isNavVisible} = useSelector(state => state.displayParams);
  useEffect(() => {
    dispatch(setNavVisibility(false));
  }, [size])

  const onClick = () => {
    if (isNavVisible) {
      dispatch(setNavVisibility(false))
    } else {
      dispatch(setNavVisibility(true))
    }
  }
  let navVisibilityClass = isNavVisible
    ? 'header__nav'
    : 'header__nav isVisible';

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
        <div className='header__toggle' onClick={onClick}>
          <HeaderToggle isOpen={isNavVisible}/>
        </div>
        <div className='header__buttons'>
          <ButtonsGroup isDecorBorder={true}>
            < Search/>
            < Auth/>
          </ButtonsGroup>
        </div>
      </div>

    </header>
  )
}

export default Header;