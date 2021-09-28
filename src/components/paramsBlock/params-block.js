import React from 'react';
import { Select } from '../UI';
import { sortOptions } from '../../utils/sort-options';
import './params-block.scss';
import CheckBox from '../UI/checkbox/checkbox';

const ParamsBlock = () => {

  return (
    <div className='params-block'>
      <Select options={sortOptions}/>
      <CheckBox name='Tsl'/>
    </div>
  );
}

export default ParamsBlock;
