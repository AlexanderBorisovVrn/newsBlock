import React from 'react';
import { useDispatch} from 'react-redux';
import {countries} from './countryList';
import {setCountry} from '../../reducers/querySlice';
import  './selectCountry.scss';


const SelecterCountry = () => {
  const dispatch =useDispatch();
  return (
    <div>
  
    <select className='country__select' id='select-country' onChange={(e)=>dispatch(setCountry(countries[e.target.value]))}>
      <option disabled >Choose language</option>
      {
       Object.keys(countries).map(country=><option
         value={country}
         className='country__name'
         key={country}
         >{country}</option>)
      }
  </select>
    </div>
   

  
  );
}

export default SelecterCountry;
