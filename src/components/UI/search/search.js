import React, {useState} from 'react';
import './search.scss';
import {setCategory} from '../../../reducers/querySlice';
import {useDispatch} from 'react-redux';
import {MyInput} from '../../UI'

const Search = () => {
  const [inputValue,
    setValue] = useState('');
  const dispatch = useDispatch();
  const [visibility,
    setVisibility] = useState(false);

  function isStringEmpty(str) {
    return str && str.trim()
  }

  function setSearchParams() {
    if (isStringEmpty(inputValue)) {
      dispatch(setCategory(inputValue))
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
