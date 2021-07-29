import React  from 'react';
import './params-block.scss';
import SelecterCountry from '../selecterCountry/selecterCountry';
import 'react-calendar/dist/Calendar.css';
import NewsCalendar from '../calendar/calendar';

const ParamsBlock = () => {

  return (
    <div className='params-block'>
      <div className='params-block__country'>
        <SelecterCountry/>
      </div>
      <div className='params-block__calendar'>
        <NewsCalendar/>
      </div>
    </div>
  );
}

export default ParamsBlock;
