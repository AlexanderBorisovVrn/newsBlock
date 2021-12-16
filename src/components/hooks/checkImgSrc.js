import {useEffect, useState} from 'react';

export function useCheckImgSource(src, fallBack) {
  const [imgSrc,
    setImgSrc] = useState();
    let img = new Image();
    img.src = src;
    const validSrc =()=>{setImgSrc(src)}
    const fallBackSrc =()=>{setImgSrc(fallBack)}

  useEffect(() => {
    img.addEventListener('load',validSrc)
    img.addEventListener('error',fallBackSrc)

    return ()=>{
      img.removeEventListener('load',validSrc)
      img.removeEventListener('error',fallBackSrc)
    }
  },[src])
  return imgSrc
}
