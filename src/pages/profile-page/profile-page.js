import React from 'react';
import ProfileFace from '../../components/profile-face';
import ProfileAbout from '../../components/profile-about';
import {onForm} from '../../actions';
import './profile-page.scss';
import {useSelector, useDispatch} from 'react-redux';
import { Redirect } from 'react-router-dom';

const ProfilePage = () => {
  const dispatch = useDispatch();
  const {isLogged} = useSelector(state => state.login)
  if (isLogged) {
    return (
      <div className='profile-page'>
        <div className='wrap'>
          <div className='profile-page__inner'>
            <ProfileFace/>
            <ProfileAbout/>
          </div>
        </div>
      </div>
    );
  }else{
    dispatch(onForm())
    return <Redirect to='/'/>
  }
};

export default ProfilePage;