import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {setCategory} from '../../reducers/querySlice';
import {Link} from 'react-router-dom';
import {nav, links, item, list,} from './navBar.module.scss';

const NavBar = () => {
  const dispatch = useDispatch();
  const {headerNavVisibility}=useSelector(state=>state.displayParams);

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
    <nav className={nav}
     style={{display:headerNavVisibility
      ?'block'
      :'none'
    }}>
      <ul className={list}>
        {navList}
      </ul>
    </nav>
  );
}

export default NavBar;
