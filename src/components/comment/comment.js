import React from 'react';
import { Link } from 'react-router-dom';
import { toLocaleDate } from '../../utils/toLocaleDate';
import Avatar from '../avatar/avatar';
import {wrap, head, avatar, name, text,date} from './comment.module.scss';

const Comment = ({comment}) => {
  const fullDateArray = toLocaleDate(comment.dateTime);
  return (
    <div className={wrap}>
      <div className={head}>
        <div className={avatar}>
          <Link to='/profile'>
            <Avatar/>
          </Link>
        </div>
        <div className={name}>
       {comment.userName}
        </div>
        <div className = {date}>
        {fullDateArray[0] + ' в ' +fullDateArray[1]}
        </div>
      </div>
      <p className ={text}>
        {comment.text}
      </p>
    </div>
  );
}

export default Comment;
