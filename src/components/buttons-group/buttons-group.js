import React from 'react';
import Auth from '../buttons/auth/auth';
import Search from '../UI/search/search';
import styles from './ButtonsGroup.module.scss'

const ButtonsGroup = () => {
  const {buttons,list,item,decorBorder,btn}=styles;
  const buttonsList=[
    <Search/>,
    <Auth/>
  ]
  return (
    <div className={buttons}>
      <ul className={list}>
          {
            buttonsList.map(button=>{
              return <li className={item}>
                <div className={btn}>{button}</div>
                <div className={decorBorder}></div>
              </li>
            })
          }
      </ul>
    </div>
  );
}

export default ButtonsGroup;
