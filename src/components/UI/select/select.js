import React from 'react';

const Select = ({children,callback,style}) => {

 return (
    <div>
      <select
        
         onChange={(e)=>callback(e.target)}>
        {
          children.map((option,idx)=><option
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
