import React, { useState } from 'react';
import './autorization.scss'

const Autorization = () => {
  const [isHide,setHide]=useState('hide')
const clazz = `autorization ${isHide}`
  return (
    <section className={clazz}>
      <div className='autorization__inner'>
        <form className='autorization__form'>
          <h1 className='autorization__title'>Вход</h1>
          <input placeholder='Username' className='autorization__name'/>
          <input placeholder='Password' className='autorization__password'/>
          <div className='autorization__remember'>
            <input type='checkbox' id='remember-me'/>
            <label  htmlFor='remember-me' className='remember-me'>Запомнить меня</label>
          </div>
          <button type='button' className='autorization__btn'>Войти</button>
        </form>
  
      </div>
    </section>
  )
}



export default Autorization;