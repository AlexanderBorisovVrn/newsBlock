import React from 'react';
import {
  wrap,
  f,
  g,
  h,
  animaF,
  animaH,
  animaG
} from './header-toggle.module.scss'

const HeaderToggle = ({isOpen}) => {

  function addAnimaClass(clazz, add) {
    if (isOpen) {
      return [clazz, add].join(' ')
    };
    return clazz
  }

  return (
    <div
      className={wrap}
      onClick={() => {
    }}>
      <div className={addAnimaClass(f, animaF)}></div>
      <div className={addAnimaClass(g, animaG)}></div>
      <div className={addAnimaClass(h, animaH)}></div>
    </div>
  );
}

export default HeaderToggle;
