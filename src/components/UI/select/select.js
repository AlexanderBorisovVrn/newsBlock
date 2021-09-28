import React from 'react';
import styles from './select.module.scss'

const Select = ({options}) => {
  const {select}= styles;
  return (
    <div>
      <select className={select}>
        {
          options.map(option=><option
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
