import React from 'react';
import {useDispatch} from 'react-redux';
import {setCategory} from '../../reducers/querySlice';
import {Link} from 'react-router-dom';
import {nav, links, item} from './navBar.module.scss';
import {MyList} from '../UI';

const NavBar = ({navItems}) => {
  const dispatch = useDispatch();

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
    <nav className={nav}>
      <MyList
      row
      >
        {navList}
      </MyList>
    </nav>
  );
}

export default NavBar;
