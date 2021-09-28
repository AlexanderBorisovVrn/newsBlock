import React from 'react';
import styles from './Input.module.scss';

const MyInput = ({setInputValue,...props}) => {
    return (
    <div className={styles.wrap}>
      <input
        {...props}
        className={styles.myInput}
       />
    </div>
  )
}

export default MyInput;
