import React from 'react';
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";
import styles from './testimonials-card.module.scss';
import svg from '../../icons/296990.svg';

const Svg = (props) => {
  return (<img {...props}/>);
}

const TestimonialsCard = () => {
  const {
    inner,
    imgWrap,
    userName,
    userInfo,
    userFrom,
    text,
    textWrap,
    userWrapper,
    title
  } = styles;
  return (
    <section className={inner}>
      <h2 className={title}>Testimotional</h2>
      <div className={textWrap}>
        <p className={text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Mauris venenatis eros eget risus consequat pharetra. Suspendisse potenti.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Mauris venenatis eros eget risus consequat pharetra. Suspendisse potenti.
         </p>

         <div className={userWrapper}>
        <div className={imgWrap}>
          <Svg
            src={svg}
            alt='avatar'
            style={{
            width: '100%',
            height: '100%',
            padding: '5px',
            borderRadius: '50%',
            backgroundColor: 'skyblue',
            border:'2px solid rgba(128, 128, 128, 0.356)'
          }}/>
        </div>
        <div className={userInfo}>
          <p className={userName}>Jerry Inc</p>
          <p className={userFrom}>WaterProof dec.</p>
        </div>
      </div>
      </div>

      

    </section>
  );
}

export default TestimonialsCard;
