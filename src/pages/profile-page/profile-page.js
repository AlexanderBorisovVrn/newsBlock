import React from 'react';
import ProfileFace from '../../components/profile-face';
import ProfileAbout from '../../components/profile-about';
import './profile-page.scss';

const ProfilePage = () => {
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

};

export default ProfilePage;