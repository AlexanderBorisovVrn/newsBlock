import React from 'react';
import ProfileFace from '../../components/profile-face';
import ProfileAbout from '../../components/profile-about';
import Footer from '../../components/footer/footer'
import './profile-page.scss';

const ProfilePage = () => {
  return (
    <div className='profile-page'>
        <div className='profile-page__inner'>
          <ProfileFace/>
          <ProfileAbout/>
          <Footer/>
        </div>
      </div>
  );

};

export default ProfilePage;