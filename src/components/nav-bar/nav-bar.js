import React from 'react';
import {useDispatch} from 'react-redux';
import {setCategory} from '../../reducers/querySlice';
import {Link} from 'react-router-dom';
import {nav, links, item, list,label} from './navBar.module.scss';
import { AuthPanel } from '../auth';
import { useResize } from '../hooks/useResize';

const NavBar = () => {
  const dispatch = useDispatch();
  const size = useResize();//device width 
  const newsTags = [
    'business',
    'entertainment',
    'health',
    'science',
    'sports',
    'technology'
  ]

  const navItems = newsTags.map((link, idx) => {
    return (
      <li
        className={item}
        key={idx}
        onClick={() => {
        dispatch(setCategory(link))
      }}>
        <Link to={`/${link}`} className={links}>
          <span className={label}>{link}</span>
        </Link>
      </li>
    )
  })

  const mobileAuthPanel = size<3?<AuthPanel/>:null;
  
    return <nav className={nav}>
        <ul className={list}>
          {navItems}
        </ul>
        {mobileAuthPanel}
      </nav>


}

export default NavBar;
