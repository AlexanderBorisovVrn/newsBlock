import React from 'react';
import Buttonloader from './buttonLoader';

const MyButton = ({children,loading=false,...props}) => {
const isLoadingButton = loading?<Buttonloader/>:children;
  return (
    <button {...props} style={{borderRadius:'5px'}}>
      {isLoadingButton}
    </button>
  );
}

export default MyButton;
