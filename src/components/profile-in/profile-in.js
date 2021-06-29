import React, {useRef} from 'react';
import './profile-in.scss';
import {onForm} from '../../actions';
import {useHover} from '../hooks';
import {useDispatch, useSelector} from 'react-redux';
import {withRouter} from 'react-router-dom';

const ProfileIn = ({history}) => {
  const ref = useRef();
  const onHover = useHover(ref);
  const dispatch = useDispatch();
  const {isLogged} = useSelector(state => state.login);
  const onLogginForm = () => {
    !isLogged
      ? dispatch(onForm())
      : history.push('/profile/')
  }
  return (
    <div className='profile-in' ref={ref}>
      <div className='profile-in__wrapper'>
        <div className='profile-in__name'>
          <span>василь</span>
        </div>
        <div className='profile-in__img-wrap'>
          <img
            alt=''
            className='profile-in__img'
            src='https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80'/>
        </div>
      </div>
      <div className={onHover
        ? 'sign'
        : 'hide'}>
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
export default withRouter(ProfileIn);