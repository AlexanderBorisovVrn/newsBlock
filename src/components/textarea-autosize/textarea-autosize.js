import React from 'react';
import {content} from './textareaAutosize.module.scss';

const TextareaAutosize = ({placeholder=''}) => {
  return (
      <div
        onInput={(e)=>{return}}
          contentEditable
          className={content}
          data-placeholder={placeholder}></div>
  );
}

export default TextareaAutosize;
