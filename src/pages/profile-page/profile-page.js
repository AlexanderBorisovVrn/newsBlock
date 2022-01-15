import React from 'react';
import ProfileFace from '../../components/profile-face';
import ProfileAbout from '../../components/profile-about';
import './profile-page.scss';
import Contacts from '../../components/contacts/contacts';

const ProfilePage = () => {
  return (
    <div className='profile-page'>
        <div className='profile-page__inner'>
          <ProfileFace/>
          <ProfileAbout/>
          <Contacts/>
        </div>
      </div>
  );

};

export default ProfilePage;