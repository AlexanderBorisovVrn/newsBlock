import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {sortByDate} from '../../reducers/displayParamsSlice';
import CheckBox from '../UI/checkbox/checkbox';

const DateSortSelect = () => {
  const [isSorted,
    setIsSorted] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    sortByDate(isSorted)(dispatch)
  }, [isSorted]);



//sortToggle принимает целевой элемент
//устанавливает в state coртировку новые/старые
  function sortToggle() {
     setIsSorted(!isSorted)
  }

  return (
    <div>
      <CheckBox
        name='Сначала новые'
        callback={sortToggle}/>
    </div>
  );
}

export default DateSortSelect;
