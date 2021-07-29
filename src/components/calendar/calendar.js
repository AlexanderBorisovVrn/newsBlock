import React from 'react';
import Calendar from 'react-calendar';
import {setPeriod} from '../../reducers/querySlice';
import {useDispatch} from 'react-redux';

export function transformDate(date) {
  return date
    .toISOString()
    .match(/^.{10}/)[0]
}

const NewsCalendar = () => {
  const dispatch = useDispatch();

  function transformPeriod(period) {
    return period.map(date => transformDate(date))
  }

  return (<Calendar
    onChange={(period) => dispatch(setPeriod(transformPeriod(period)))}
    maxDate={new Date()}
    selectRange={true}/>);
}

export default NewsCalendar;
