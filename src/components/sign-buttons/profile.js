import React, {useState, useRef, useEffect} from 'react';
import './profile.scss'

const useHover = (ref) => {
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
    node.addEventListener('mouseleave', off)
    return () => {
      node.removeEventListener('mouseleave', off)
      node.removeEventListener('mouseenter', on);
    };
  }, []);
  return isHovering;
}

const Profile = () => {
  const ref = useRef();
  const onHover = useHover(ref);

  return (
    <div className='profile' ref={ref}>
      <div className='profile__wrapper' >
        <div className='profile__name'>
          <span>василь</span>
        </div>
        <div className='profile__img-wrap'>
          <img
            alt=''
            className='profile__img'
            src='https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80'/>
        </div>
      </div>
      <div className={onHover?'sign':'hide'}>
        <button type='button' className='sign__up'>
          <span>Регистрация</span>
        </button>
        <button type='button' className='sign__in'>
          <span>войти</span>
        </button>
      </div>
    </div>
  )
}
export default Profile;