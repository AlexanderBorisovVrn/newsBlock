import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './Login.scss';
import {logIn, setFormVisibility, setAuth, setUser} from '../../reducers/authSlice';
import CheckBox from '../../components/UI/checkbox/checkbox';
import {newsError} from '../../reducers/fetchDataSlice';
import img from '../../icons/296990.svg'

const Login = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const {isFormVisible} = state.authSlice;
  const {error} = state.fetchData;
  const [username,
    setUsername] = useState('');
  const [password,
    setPassword] = useState('');
  const setVisibility = () => dispatch(setFormVisibility(false))

  const changeUsername = (e) => {
    dispatch(newsError(false))
    setUsername(e.target.value)
  };
  const changePassword = (e) => {
    dispatch(newsError(false))
    setPassword(e.target.value)
  };
  const onSubmit = () => {
    dispatch(logIn(username, password))

  }

  useEffect(() => {
    let username = localStorage.getItem('username');
    setUsername('')
    setPassword('')
    if (username) {
      dispatch(setUser(username))
      dispatch(setAuth(true))
    }
   }, []);

  return isFormVisible
    ? (
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
              onChange={changeUsername}
              value={username}
              required
              placeholder='Username'
              className='autorization__name'
              type='name'/>
            <input
              onChange={changePassword}
              value={password}
              required
              type='password'
              placeholder='Password'
              className='autorization__password'/>
            <div className='autorization__remember'>
              <CheckBox name='Запомнить меня' callback={() => console.log('remember me')}/>
            </div>
            <span
              style={{
              fontSize: '12px',
              color: 'red'
            }}>{error}</span>
            <button type='submit' className='autorization__btn'>
              Войти
            </button>
          </form>
        </div>
      </section>
    )
    : null
}

export default Login;