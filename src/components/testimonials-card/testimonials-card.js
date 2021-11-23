import React from 'react';
import styles from './testimonials-card.module.scss';
import Avatar from '../../components/avatar/avatar'


const TestimonialsCard = (props) => {
  const {
    inner,
    imgWrap,
    userName,
    userInfo,
    userOrg,
    text,
    textWrap,
    userWrapper,
  } = styles;
  return (
    <section className={inner}>
      <div className={textWrap}>
        <p className={text}>
          {props.text}
        </p>

        <div className={userWrapper}>
          <div className={imgWrap}>
            <Avatar />
          </div>
          <div className={userInfo}>
            <p className={userName}>{props.userName}</p>
            <p className={userOrg}>{props.userOrg}</p>
          </div>
        </div>
      </div>

    </section>
  );
}

export default TestimonialsCard;
