import React from 'react';
import {useDispatch} from 'react-redux';
import {setCategory} from './../../reducers/querySlice';
import {Link} from 'react-router-dom';
import {nav,links,item} from './navBar.module.scss'

const NavBar = ({navItems}) => {
  const dispatch = useDispatch()
  return (
    <nav className={nav}>
    {navItems.map((link, idx) => {
      return (
        <div
          className={item}
          key={idx}
          onClick={() => {
          dispatch(setCategory(link))
        }}>
          <Link to={`/${link}`} className={links}>
            <span>{link}</span>
          </Link>
        </div>
      )
    })}
  </nav>
  );
}

export default NavBar;
