import React, {useRef, useState} from 'react';
import './auth.scss';
import {useHover} from '../../hooks';
import {useDispatch} from 'react-redux';
import {withRouter} from 'react-router-dom';

const Auth = () => {
  const dispatch = useDispatch();
  const ref = useRef();
  const toggleVisibleAuth = useHover(ref);
  
  return (
    <div className='auth' ref={ref}>
      <div className='auth__inner'>
        <div className='auth__txt' >
          <span>Войти</span>
        </div>
      </div>
      <div className={toggleVisibleAuth?'sign':'hide'}>
        <button type='button' className='sign__up'>
          <span>регистрация</span>
        </button>
        <button type='button' className='sign__in' >
          <span>войти</span>
        </button>
      </div>
    </div>
  )
}
export default withRouter(Auth);