import React,{useState,useEffect} from 'react';
import {wrap,f,g,h,animaF,animaH,animaG} from './header-toggle.module.scss'

const HeaderToggle = () => {
  const [onOpen, setOnOpen] = useState(false);
  function addAnimaClass(clazz,add) {
    if(onOpen){ return [clazz,add].join(' ')};
    return clazz
  }
  useEffect(() => {
  
  }, [onOpen]);

  return (
      <div 
      className={wrap}
      onClick={()=>setOnOpen(!onOpen)}
      >
        <div className={addAnimaClass(f,animaF)}></div>
        <div className={addAnimaClass(g,animaG)}></div>
        <div className={addAnimaClass(h,animaH)}></div>
      </div>
  );
}

export default HeaderToggle;
