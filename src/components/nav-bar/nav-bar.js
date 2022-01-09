import React from 'react';
import {useDispatch} from 'react-redux';
import {setCategory} from '../../reducers/querySlice';
import {Link} from 'react-router-dom';
import {nav, links, item, list} from './navBar.module.scss';
import { AuthPanel } from '../auth';
import { useResize } from '../hooks/useResize';

const NavBar = () => {
  const dispatch = useDispatch();
  const size = useResize();//device width 
  const navItems = [
    'business',
    'entertainment',
    'health',
    'science',
    'sports',
    'technology'
  ]

  const items = navItems.map((link, idx) => {
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
  
    return <nav className={nav}>
        <ul className={list}>
          {items}
        </ul>
        {size<3?<AuthPanel/>:null}
      </nav>


}

export default NavBar;
