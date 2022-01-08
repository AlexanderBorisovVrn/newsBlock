import React from 'react';
import './authPanel.scss'

const AuthPanel = () => {
    return (
      <div className='sign'>
        <button type='button' className='sign__up'>
          <span>регистрация</span>
        </button>
        <button type='button' className='sign__in'>
          <span>войти</span>
        </button>
      </div>
    )
}

export default AuthPanel;
