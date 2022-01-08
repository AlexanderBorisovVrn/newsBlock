import React from 'react';

import {buttons,list,item,decorBorder,btn,none} from './ButtonsGroup.module.scss'

const ButtonsGroup = ({children,isDecorBorder=false}) => {
   return (
    <div className={buttons}>
      <ul className={list}>
          {
            children.map((button,idx)=>{
              return <li className={item} key={idx}>
                <div className={btn}>{button}</div>
                <div className={isDecorBorder?decorBorder:none}></div>
              </li>
            })
          }
      </ul>
    </div>
  );
}

export default ButtonsGroup;
