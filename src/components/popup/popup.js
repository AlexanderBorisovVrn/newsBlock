import React from 'react';
import Portal from '../portal/portal';

const Popup = ({children, isOpened, target}) => {
  if (!isOpened) {
    return null
  }
  return (
    <Portal target={target}>
      <div className='content'>
        {children}
      </div>
    </Portal>
  );
}

export default Popup;
