import React from 'react';
import {hideForm} from '../../actions';
import {useDispatch,useSelector} from 'react-redux';
import './autorization.scss'

const Autorization = () => {
  const dispatch = useDispatch();
const {formVisibility}=useSelector(state=>state.login);
  const clazz = `autorization ${formVisibility
    ? null
    : 'hide'}`
  return (
    <section className={clazz}>
      <div className='autorization__inner'>
        <form className='autorization__form'>
          <div className='autorization__form-head'>
            <h1 className='autorization__title'>Вход</h1>
            <span className='close' onClick={()=>dispatch(hideForm())}>&#215;</span>
          </div>
          <input placeholder='Username' className='autorization__name'/>
          <input placeholder='Password' className='autorization__password'/>
          <div className='autorization__remember'>
            <input type='checkbox' id='remember-me'/>
            <label htmlFor='remember-me' className='remember-me'>Запомнить меня</label>
          </div>
          <button type='submit' className='autorization__btn'>Войти</button>

        </form>
      </div>
    </section>
  )
}

export default Autorization;