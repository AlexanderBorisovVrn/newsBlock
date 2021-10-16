import React from 'react';
import {useRef} from 'react';
import {hideForm, onLoggedIn} from '../../actions';
import {useDispatch, useSelector} from 'react-redux';
import './autorization.scss';
import Popup from '../../components/popup/popup';
import CheckBox from '../../components/UI/checkbox/checkbox';

const Autorization = () => {
  const dispatch = useDispatch();
  const { formVisibility,isLogged} = useSelector(state => state.login);
  const usernameRef = useRef();
  const passwordRef = useRef();
  const logginIn = (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    if (username === localStorage.getItem('username') && password === localStorage.getItem('password')) {
      dispatch(onLoggedIn())
    }
  }

  const form = (
    <section className='autorization'>
      <div className='autorization__inner'>
        <form className='autorization__form'>
          <div className='autorization__form-head'>
            <h1 className='autorization__title'>Вход</h1>
            <span className='close' onClick={() => dispatch(hideForm())}>&#215;</span>
          </div>
          <input placeholder='Username' className='autorization__name' ref={usernameRef}/>
          <input
            type='password'
            placeholder='Password'
            className='autorization__password'
            ref={passwordRef}/>
          <div className='autorization__remember'>
            <CheckBox name='Запомнить меня'/>
          </div>
          <button type='submit' className='autorization__btn' onClick={logginIn}>Войти</button>
        </form>
      </div>
    </section>
  )
  return <Popup children={form} isOpened={formVisibility}/>
}

export default Autorization;