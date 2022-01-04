import React, {useState,useEffect, useRef} from 'react';
import {useDispatch} from 'react-redux';
import './Login.scss';
import Popup from '../../components/popup/popup';
import CheckBox from '../../components/UI/checkbox/checkbox';

const Login = () => {
  const dispatch = useDispatch();
  const userRef = useRef('');
  const passRef = useRef('');
  
  const submit = (e)=>{
    e.preventDefault();
    console.log('submit');
    passRef.current.value='';
    userRef.current.value=''
  }

  return <Popup isOpened={true}>
    <section className='autorization'>
      <div className='autorization__inner'>
        <form className='autorization__form'
        onSubmit={submit}
        >
          <div className='autorization__form-top'>
            <h1 className='autorization__title'>Вход</h1>
            {/* <span className='close' onClick={() => dispatch(hideForm())}>&#215;</span> */}
          </div>
          <input
            ref={userRef}
            value={userRef.current.value}
            required
            placeholder='Username'
            className='autorization__name'
            type='name'/>
          <input
            ref={passRef}
            value={passRef.current.value}
            required
            type='password'
            placeholder='Password'
            className='autorization__password'/>
          <div className='autorization__remember'>
            <CheckBox name='Запомнить меня' callback={() => console.log('remember me')}/>
          </div>
          <span style={{
            fontSize: '10px'
          }}>Пароли в users.json</span>
          <button type='submit' className='autorization__btn'>Войти</button>
        </form>
      </div>
    </section>
  </Popup>
}

export default Login;