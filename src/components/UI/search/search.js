import React, {useState} from 'react';
import {search,form,input,inner,btn,show,hidden} from './search.module.scss';
import isStringEmpty from '../../../utils/isStringEmpty'
import {setCategory} from '../../../reducers/querySlice';
import {useDispatch} from 'react-redux';
import {MyInput} from '../../UI';

const Search = () => {
  const [inputValue,
    setValue] = useState('');
  const dispatch = useDispatch();
  const [inputWrap,
    setInputWrap] = useState(true);
  const [currentPadding, setCurrentPadding] = useState(true);
  function setSearchParams() {
    //проверка на пустую строку
    if (isStringEmpty(inputValue)) {
      //установка параметров поиска в state
      dispatch(setCategory(inputValue))
      //очистка поля input
      setValue('');
    }
    return
  }

  return (
    <div className={search}>
      <div className={inner}>
        <form
          className={form}
          onSubmit={(e) => {
          e.preventDefault();
          setSearchParams();
        }}>
          <div className={inputWrap?hidden:show} >
            <MyInput
              type='search'
              value={inputValue}
              placeholder='Search'
              onChange={(e) => {
              setValue(e.target.value)
            }}/>
          </div>
        </form>
        <div className={btn} onClick={() => {
          setInputWrap(!inputWrap)
          setCurrentPadding(!currentPadding)
          }}>🔍</div>

      </div>
    </div>
  );
}

export default Search;
