import React, {useState} from 'react';
import './auth.scss';
import {onForm} from '../../../actions';
import {useHover} from '../../hooks';
import {useDispatch, useSelector} from 'react-redux';
import {withRouter} from 'react-router-dom';

const Auth = ({history}) => {
  const dispatch = useDispatch();
  const {isLogged} = useSelector(state => state.login);
  const [toggleVisibleAuth,setToggleVisibleAuth] = useState(false);
  const onLogginForm = () => {
    !isLogged
      ? dispatch(onForm())
      : history.push('/profile/')
  }
  return (
    <div className='auth'>
      <div className='auth__inner'>
        <div className='auth__txt' onClick={()=>setToggleVisibleAuth(!toggleVisibleAuth)}>
          <span>Войти</span>
        </div>
      </div>
      <div className={toggleVisibleAuth?'sign':'hide'}>
        <button type='button' className='sign__up'>
          <span>регистрация</span>
        </button>
        <button type='button' className='sign__in' onClick={onLogginForm}>
          <span>войти</span>
        </button>
      </div>
    </div>
  )
}
export default withRouter(Auth);