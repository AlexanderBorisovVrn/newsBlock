import React, {useState,useEffect} from 'react';
import './auth.scss';
import {useDispatch} from 'react-redux';
import { AuthPanel } from '..';
import { useResize } from '../../hooks/useResize';

const Auth = () => {
  const dispatch = useDispatch();
  const size = useResize();
  const [visibility, setVisibility] = useState(false);
  const onClick =()=>{setVisibility(!visibility)};
  useEffect(() => {
    setVisibility(false)
  }, [size]);
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