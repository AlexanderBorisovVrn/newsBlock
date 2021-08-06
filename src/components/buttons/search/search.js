import React, {useState, useContext} from 'react';
import './search.scss';
import {setCategory} from '../../../reducers/querySlice';
import {useDispatch} from 'react-redux';

const Search = () => {
  const [input,
    setInput] = useState('');
  const dispatch = useDispatch();

  function isStringEmpty(str) {
    return str && str.trim()
  }

  function setSearchParams() {
    if (isStringEmpty(input)) {
      dispatch(setCategory(input))
      setInput('')
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
          <input
            type='text'
            className='search__input'
            onChange={e => setInput(e.target.value)}
            value={input}/>
        </form>
      </div>
    </div>
  );
}

export default Search;
