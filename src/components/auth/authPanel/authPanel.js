import React from 'react';
import { useDispatch } from 'react-redux';
import { setFormVisibility } from '../../../reducers/authSlice';
import './authPanel.scss'

const AuthPanel = () => {
  const dispatch = useDispatch();
const onClick = ()=>{
  dispatch(setFormVisibility(true))
}

    return (
      <div className='sign'>
        <button type='button' className='sign__up'>
          <span>регистрация</span>
        </button>
        <button type='button' className='sign__in' onClick={onClick}>
          <span>войти</span>
        </button>
      </div>
    )
}

export default AuthPanel;
