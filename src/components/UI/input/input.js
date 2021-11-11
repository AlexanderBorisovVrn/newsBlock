import React from 'react';
import styles from './Input.module.scss';

const MyInput = (props) => {
    return (
      <input
        {...props}
        className={styles.myInput}
       />
  )
}

export default MyInput;
