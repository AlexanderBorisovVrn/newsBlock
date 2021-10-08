import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {sortByDate} from '../../reducers/displayParamsSlice';
import Select from '../UI/select/select';

const DateSortSelect = () => {
  const [isSorted,
    setIsSorted] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    sortByDate(isSorted)(dispatch)
  }, [isSorted]);

  const sortOptions = [
    {
      name: 'По дате',
      value: 'sort',
      disabled: true
    }, {
      name: 'Сначала новые',
      value: '',
      disabled: false
    }, {
      name: 'Сначала старые',
      value: 'old',
      disabled: false
    }
  ]


//sortToggle принимает целевой элемент
//устанавливает в state coртировку новые/старые
  function sortToggle(target) {
     setIsSorted(!!target.value)
  }

  return (
    <div>
      <Select
        options={sortOptions}
        callback={sortToggle}/>
    </div>
  );
}

export default DateSortSelect;
