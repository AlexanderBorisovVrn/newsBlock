import React, {useState} from 'react';
import './search.scss';
import {setCategory} from '../../../reducers/querySlice';
import {useDispatch} from 'react-redux';
import {MyInput} from '../../UI'

const Search = () => {
  const [inputValue,
    setValue] = useState('');
  const dispatch = useDispatch();

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
        <span className='search__btn' onClick={()=>setSearchParams()}>🔍</span>
        <form
          className='search__form'
          onSubmit={(e) => {
          e.preventDefault();
          setSearchParams();
        }}>
         <MyInput
          value={inputValue}
          placeholder='Search'
          onChange={(e)=>{
            setValue(e.target.value)}}
         />
        </form>
      </div>
    </div>
  );
}

export default Search;
