import {useState, useEffect} from 'react';



const getWidth = () => {
  const {innerWidth: size} = window;
  switch (true) {
    case size < 576:
      return 'min';
    case size >= 576 && size < 768:
      return 'sm';
    case size >= 768 && size < 992:
      return 'md';
    case size >= 992 && size < 1200:
      return 'lg';
    case size >= 1200:
      return 'xl';
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