import React, {useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './Login.scss';
import {logIn, setFormVisibility} from '../../reducers/authSlice';
import Popup from '../../components/popup/popup';
import CheckBox from '../../components/UI/checkbox/checkbox';

const Login = () => {
  const dispatch = useDispatch();
  const {isFormVisible} = useSelector(state => state.authSlice);
  const userRef = useRef();
  const passRef = useRef();
  const setVisibility = () => dispatch(setFormVisibility(false))

  const onSubmit = () => {
    let username = userRef.current.value;
    let password = passRef.current.value;
    dispatch(logIn(username, password))
    username = '';
    password = ''
  }
  return <Popup isOpened={isFormVisible}>
    <section className='autorization'>
      <div className='autorization__inner'>
        <form
          className='autorization__form'
          onSubmit={(e) => {
          e.preventDefault();
          onSubmit()
        }}>
          <div className='autorization__form-top'>
            <h1 className='autorization__title'>Вход</h1>
            <span className='close' onClick={setVisibility}>&#215;</span>
          </div>
          <input
            ref={userRef}
            defaultValue={''}
            required
            placeholder='Username'
            className='autorization__name'
            type='name'/>
          <input
            ref={passRef}
            defaultValue={''}
            required
            type='password'
            placeholder='Password'
            className='autorization__password'/>
          <div className='autorization__remember'>
            <CheckBox name='Запомнить меня' callback={() => console.log('remember me')}/>
          </div>
          <span style={{
            fontSize: '10px'
          }}>user:123</span>
          <button type='submit' className='autorization__btn'>Войти</button>
        </form>
      </div>
    </section>
  </Popup>
}

export default Login;