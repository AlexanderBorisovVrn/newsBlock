import React from 'react';
import {useDispatch} from 'react-redux';
import {setCategory} from '../../reducers/querySlice';
import {Link} from 'react-router-dom';
import {nav, links, item, list,} from './navBar.module.scss';

const NavBar = () => {
  const dispatch = useDispatch();
  
  const navItems = [
    'business',
    'entertainment',
    'health',
    'science',
    'sports',
    'technology'
  ]

  const navList = navItems.map((link, idx) => {
    return (
      <li
        className={item}
        key={idx}
        onClick={() => {
        dispatch(setCategory(link))
      }}>
        <Link to={`/${link}`} className={links}>
          <span>{link}</span>
        </Link>
      </li>
    )
  })
  return (
    <nav className={nav}      >
      <ul className={list}>
        {navList}
      </ul>
    </nav>
  );
}

export default NavBar;
