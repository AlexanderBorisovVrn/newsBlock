import React, {useState} from 'react';
import './auth.scss';
import {useDispatch} from 'react-redux';
import { AuthPanel } from '..';

const Auth = () => {
  const dispatch = useDispatch();
  const [visibility, setVisibility] = useState(false);
  const onClick =()=>{setVisibility(!visibility)}
  return (
    <div className='auth' >
      <div className='auth__inner'>
        <div className='auth__txt' onClick={onClick}>
          <span>Войти</span>
        </div>
      </div>
      {visibility
        ? <AuthPanel/>
        : null}
    </div>
  )
}
export default Auth;