import React from 'react';
import './profile-face.scss';

const ProfileFace = () => {

  const imgSrc = 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80'
  return (
    <div className='profile-face'>
      <div className='profile-face__inner'>
        <div className='profile-face__img-wrap'>
          <img alt='' className='profile-face__img' src={imgSrc}/>
        </div>
        <div className='profile-face__name'>
          <p  className='profile-face__firstname'>Bвановичинский</p>
          <p className='profile-face__lastname'>иван</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileFace;