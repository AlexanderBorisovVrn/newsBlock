import React from 'react';

const MyButton = ({children,loading=false,...props}) => {
// const isLoadingButton = loading?
  return (
    <button {...props}>
      {children}
    </button>
  );
}

export default MyButton;
