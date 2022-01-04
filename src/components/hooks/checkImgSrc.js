import {useEffect, useState} from 'react';
//производит проверку ссылки
//создаем объект изображения
//задать src
//через слушатель событий проверить возможность загрузки
//установить  в imgSrc либо src либо fallBack
//возвращает ссылку на ресурс

export function useCheckImgSource(src, fallBack) {
  const [imgSrc,
    setImgSrc] = useState();
 
  const validSrc = () => {
    setImgSrc(src)
  }
  const fallBackSrc = () => {
    setImgSrc(fallBack)
  }

  useEffect(() => {
    let img = new Image();
    img.src = src;
    img.addEventListener('load', validSrc)
    img.addEventListener('error', fallBackSrc)

    return () => {
      img.removeEventListener('load', validSrc)
      img.removeEventListener('error', fallBackSrc)
    }
  }, [src])
  return imgSrc
}
