import {useEffect, useState} from 'react';

export default function useHover(ref) {
  const [isHovering,
    setHovering] = useState(false);
  const on = () => setHovering(true);
  const off = () => setHovering(false);
  

  useEffect(() => {
    if (!ref.current) {
      return
    }
    const node = ref.current;
    node.addEventListener('mouseenter', on);
    node.addEventListener('mouseleave', off);
    return () => {
      node.removeEventListener('click', off);
      node.removeEventListener('mouseleave', on);

    };
  }, [ref]);

  return isHovering;
}

