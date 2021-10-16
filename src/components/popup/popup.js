import React from 'react';
import Portal from '../portal/portal';

const Popup = ({children,onClose,isOpened}) => {
  if(!isOpened){
    return null
  }
  return (
   <Portal>
     <div className='popup' role='dialog'>
       <div className='content'>
         {children}
       </div>
     </div>
   </Portal>
  );
}

export default Popup;
