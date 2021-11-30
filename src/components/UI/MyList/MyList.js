import React from 'react';
import {list,row,column} from './MyList.module.scss' 

const MyList = ({children,...props}) => {
const direction = props.row?row:column;
  return (
    <ul {...props}
    className = {[list,direction].join(' ')}
    >
      {children}
    </ul>
  );
}

export default MyList;
