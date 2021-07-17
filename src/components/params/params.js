import React from 'react';
import './params.scss';
import Calendar from 'react-calendar';
import SelecterCountry from '../selecterCountry/selecterCountry';

const Params = () => {
  return (
    <div className='params'>
      <SelecterCountry/>
      <Calendar/>
    </div>
  );
}

export default Params;
