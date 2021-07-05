import React from 'react';
import './options.scss';

const Options = () => {
  const options = [
    {
      name:'option1',
      value:'opt1'
    },
    {
      name:'option2',
      value:'opt2'
    },
    {
      name:'option3',
      value:'opt3'
    }
  ];
  const renderOptions = (opt,idx)=>{
    return <option name={opt.name} value={opt.value} key={idx} >{opt.name}</option>
  };

  return (
  <select className='options'>
    {
      options.map(renderOptions)
    }
  </select>
  );
}

export default Options;


