import {useState, useEffect} from 'react';

//1 - Phones and small smartphones
//2 - Small tablets and large smartphones (landscape view)
//3 - Small tablets (portrait view)
//4 -  Tablets and small desktops
//5 - Large tablets and desktops


const getWidth = () => {
  const {innerWidth: size} = window;
  switch (true) {
    case size < 576:
      return 1;
    case size >= 576 && size < 768:
      return 2;
    case size >= 768 && size < 992:
      return 3;
    case size >= 992 && size < 1200:
      return 4;
    case size >= 1200:
      return 5;
    default:
      return ;
  }
}

export function useResize() {
  const [windowDimensions,
    setWindowDimensions] = useState(getWidth());
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWidth());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowDimensions
}