import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setFormVisibility,setAuthPanelVisibility, logOut} from '../../../reducers/authSlice';
import './authPanel.scss'

const AuthPanel = () => {
  const dispatch = useDispatch();
  const {isAuth}=useSelector(state=>state.authSlice)
  const onClick = () => {
    dispatch(setAuthPanelVisibility(false))
    if(!isAuth){
      dispatch(setFormVisibility(true));
     }else{
      dispatch(logOut())}
  }

  const panel = isAuth
  ?(<>
    <button type='button' className='sign__btn large' onClick={onClick}>
      <span>Выйти</span>
    </button>
  </>)
  :(<>
      <button type='button' className='sign__btn sign__orange'>
        <span>регистрация</span>
      </button>
      <button type='button' className='sign__btn' onClick={onClick}>
        <span>войти</span>
      </button>
    </>)
 

  
  return (
    <div className='sign'>
     {panel}
    </div>
  )
}

export default AuthPanel;
