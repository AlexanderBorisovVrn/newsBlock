import React from 'react';
import styles from './testimonials-card.module.scss';
import svg from '../../icons/296990.svg';

const Avatar = (props) => {
  return (<img {...props}/>);
}

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
            <Avatar
              src={svg}
              alt='avatar'
              style={{
              width: '100%',
              height: '100%',
              padding: '5px',
              borderRadius: '50%',
              backgroundColor: 'skyblue',
              border: '2px solid rgba(128, 128, 128, 0.356)',
            }}/>
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
