import React, {useEffect} from 'react';
import './auth.scss';
import {useDispatch, useSelector} from 'react-redux';
import {AuthPanel} from '..';
import {useResize} from '../../hooks/useResize';
import {setAuthPanelVisibility} from '../../../reducers/authSlice';

const Auth = () => {
  const dispatch = useDispatch();
  const size = useResize();
  const {isAuthPanelVisible,isAuth,user} = useSelector(state => state.authSlice);
  const openPanel = () => {
    if (isAuthPanelVisible) {
      dispatch(setAuthPanelVisibility(false))
    } else {
      dispatch(setAuthPanelVisibility(true))
    }
  };
  const openUserPanel = ()=>{
    dispatch(setAuthPanelVisibility(true))
  }
  useEffect(() => {
    dispatch(setAuthPanelVisibility(false));
  }, [size]);

  const btnIn = (
    <button className='auth__btn' onClick={openPanel}>
      <span>Войти</span>
    </button>
  )
  const userButton = (
    <button className='auth__btn' onClick={openUserPanel}>
      <span>{user}</span>
    </button>
  )

  return (
    <div className='auth'>
      <div className='auth__inner'>
        {isAuth
          ? userButton
          : btnIn}
      </div>
      {isAuthPanelVisible
        ? <AuthPanel/>
        : null}
    </div>
  )
}
export default Auth;