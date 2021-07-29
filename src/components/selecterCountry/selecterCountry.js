import React from 'react';
import { useDispatch} from 'react-redux';
import {countries} from './countryList';
import {setCountry} from '../../reducers/querySlice';
import Select from 'react-select';
import  './selectCountry.scss';


const SelecterCountry = () => {
  const dispatch =useDispatch();
  const options = Object.entries(countries).map(country=>{return { value: country[1], label: country[0] }})
  return (
    <div className='select'>
      <Select options={options} onChange={(e)=>dispatch(setCountry(e.value))}/>
    </div>
   

  
  );
}

export default SelecterCountry;
