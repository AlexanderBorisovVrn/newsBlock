import React from 'react';
import './params-block.scss';
import CheckBox from '../UI/checkbox/checkbox';
import DateSortSelect from '../date-sort-select/date-sort-select';

const ParamsBlock = () => {

  return (
    <div className='params-block'>
      <DateSortSelect/>
    </div>
  );
}

export default ParamsBlock;
