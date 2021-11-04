import React, {useState} from 'react';
import './search.scss';
import isStringEmpty from '../../../utils/isStringEmpty'
import {setCategory} from '../../../reducers/querySlice';
import {useDispatch} from 'react-redux';
import {MyInput} from '../../UI'

const Search = () => {
  const [inputValue,
    setValue] = useState('');
  const dispatch = useDispatch();
  const [visibility,
    setVisibility] = useState(false);


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
    <div className='search'>
      <div className='search__inner'>
        <form
          className='search__form'
          onSubmit={(e) => {
          e.preventDefault();
          setSearchParams();
        }}>
          <div className={visibility
            ?'search__input show'
            :'search__input hidden'}>
            <MyInput
              style={{
                padding:'0 10px'
              }}
              type='search'
              value={inputValue}
              placeholder='Search'
              onChange={(e) => {
              setValue(e.target.value)
            }}/>
          </div>
        </form>
        <div className='search__btn' onClick={() => setVisibility(!visibility)}>🔍</div>

      </div>
    </div>
  );
}

export default Search;
