import React from 'react';
import TestimonialsContainer from '../containers/testimonials-container/testimonials-container';
import styles from './profile-about.module.scss';
import AboutMe from '../aboutMe/aboutMe'
const ProfileAbout = () => {
  const {
    profileAbout,
    inner,
    infoTitle,
    title,
    info,
    block,
    triangle,
    titleWrapper,
  } = styles;

  return (
    <div className={profileAbout}>
      <div className={inner}>
        <div className={titleWrapper}>
          <h1 className={title}>About</h1>
          <div className={triangle}></div>
        </div>
        <section className={info}>
          <div className={block}>
          <h2 className={infoTitle}>I am Web Developer</h2>
          <AboutMe/>
          </div>
          <div className={block}>
            <h2 className={infoTitle}>Testimonials</h2>
            <TestimonialsContainer/>
          </div>

        </section>

      </div>
    </div>
  );
};

export default ProfileAbout;