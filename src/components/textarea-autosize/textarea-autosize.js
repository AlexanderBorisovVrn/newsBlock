import React from 'react';
import {content} from './textareaAutosize.module.scss';

const TextareaAutosize = ({placeholder=''}) => {
  return (
      <div
        onInput={(e)=>console.log(e.target.textContent)}
          contentEditable
          className={content}
          data-placeholder={placeholder}></div>
  );
}

export default TextareaAutosize;
