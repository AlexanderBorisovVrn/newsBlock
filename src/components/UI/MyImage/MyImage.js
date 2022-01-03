import React from 'react';
import fallBackImg from './placeholder-image.png';
import {useCheckImgSource} from '../../hooks/checkImgSrc';

const MyImage = ({
  src,
  ...props
}) => {
  const imgSource = useCheckImgSource(src, fallBackImg)
  return <img alt='' src={imgSource} {...props}/>;
}

export default MyImage;
