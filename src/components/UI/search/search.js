import React, {useState} from 'react';
import {
  search,
  inner,
  btn,
  show,
  hidden,
  initial,
  animationShowing
} from './search.module.scss';
import {setCategory} from '../../../reducers/querySlice';
import {useDispatch} from 'react-redux';
import {MyInput} from '../../UI';
import {useHistory} from 'react-router';

const Search = () => {
  const [inputValue,
    setValue] = useState('');
  const dispatch = useDispatch();
  const [isShow,
    setIsShow] = useState(false);
  const history = useHistory();

  function setSearchParams() {
    dispatch(setCategory(inputValue))
    setValue('');
  }
  function onSubmit(event) {
    event.preventDefault();
    setSearchParams();
    history.push('/search')
  }

  function onClick() {
    setIsShow(!isShow);
  }
  function onChange(e) {
    setValue(e.target.value)
  }

  const clazz = isShow
  ?[initial,animationShowing].join(' ')
  :hidden

  return (
    <div className={search}>
      <div className={inner}>
        <form onSubmit={onSubmit}>
      <div className={clazz}> 
      <MyInput
            
            required
            type='search'
            value={inputValue}
            placeholder='Search'
            onChange={onChange}/>
      </div>
          

        </form>
        <div className={btn} onClick={onClick}>🔍</div>
      </div>
    </div>
  )
}

export default Search;