import React from 'react';
import TestimonialsContainer from '../containers/testimonials-container/testimonials-container';
import styles from './profile-about.module.scss';

const ProfileAbout = () => {
  const {
    profileAbout,
    inner,
    infoTitle,
    title,
    text,
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
            <p className={text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, quidem
              consectetur modi maiores error aliquid laboriosam laudantium totam. Quos, dicta
              excepturi.
            </p>
            <p className={text}>
              Ab quasi a vero inventore numquam dolore provident exercitationem dicta error
              eveniet asperiores aperiam consequatur labore, quas amet perferendis harum animi
              aut debitis dolorem, fuga incidunt. Numquam, quia harum.
            </p>
          </div>
          <div className={block}>
            <h2 className={infoTitle}>Testimotionals</h2>
            <TestimonialsContainer/>
          </div>

        </section>

      </div>
    </div>
  );
};

export default ProfileAbout;