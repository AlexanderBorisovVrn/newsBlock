import React, {useState} from 'react';
import styles from './checkbox.module.scss'

const CheckBox = ({name}) => {
  const [isChecked,
    setIsChecked] = useState(false);
  const {checkbox, wrap, label} = styles;
  const checkMark = isChecked
    ? '✔'
    : '';
  return (
    <div className={wrap}>
      <span
        className={checkbox}
        role="checkbox"
        aria-checked="true"
        tabIndex="0"
        aria-labelledby
        ={label}
        onClick={() => setIsChecked(!isChecked)}>{checkMark}</span>
      <label className={label}><input type='checkbox'/>{name}</label>
    </div>
  )
}

export default CheckBox;