import React from 'react';
import styles from './select.module.scss'

const Select = ({options,callback}) => {
  const {select}= styles;
 return (
    <div>
      <select  className={select} onChange={(e)=>callback(e.target)}>
        {
          options.map((option,idx)=><option
             key={idx}
             disabled={option.disabled}
             value={option.value}
             >{option.name}
             </option>)
        }
      </select>
    </div>
  );
}

export default Select;
