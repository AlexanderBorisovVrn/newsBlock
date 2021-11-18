import React, {useState} from 'react';
import {
  search,
  form,
  inner,
  btn,
  show,
  hidden,
  initialInputVisibility
} from './search.module.scss';
import isStringEmpty from '../../../utils/isStringEmpty'
import {setCategory} from '../../../reducers/querySlice';
import {useDispatch} from 'react-redux';
import {MyInput} from '../../UI';
import { Redirect, useHistory } from 'react-router';

const Search = () => {
  const [inputValue,
    setValue] = useState('');
  const dispatch = useDispatch();
  const [isShow,
    setIsShow] = useState(initialInputVisibility);
    const history = useHistory();
    

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

  function changeCurrentClassName(value){
    //устанавливает анимированный класс
    setIsShow (value===show?hidden:show)
  }

  return (
    <div className={search}>
      <div className={inner}>
        <form
          className={form}
          onSubmit={(e) => {
          e.preventDefault();
          setSearchParams();
          history.push('/search')
        }}>
          <div
            className={isShow}>
            <MyInput
              type='search'
              value={inputValue}
              placeholder='Search'
              onChange={(e) => {
              setValue(e.target.value)
            }}/>
          </div>
        </form>
        <div
          className={btn}
          onClick={() => {
          changeCurrentClassName(isShow);
        }}>🔍</div>

      </div>
    </div>
  );
}

export default Search;
