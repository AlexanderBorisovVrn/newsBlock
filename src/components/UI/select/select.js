import React from 'react';

const Select = ({options,callback,style}) => {

 return (
    <div>
      <select
        
         onChange={(e)=>callback(e.target)}>
        {
          options.map((option,idx)=><option
             key={idx}
             disabled={option.disabled}
             value={option.value}
             >{option.name}
             </option>)
        }
      </select>
    </div>
  );
}

export default Select;
