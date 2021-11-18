import React from 'react';
import styles from './comments.module.scss';

const Comments = () => {
  const a = '&#9660;'
  return (
    <section className='comments'>
      <div className='inner'>
        <div className='header'>
          <h2 className='title'>Комментарии</h2>
          <button type='button'>{a}</button>
        </div>
      </div>
    </section>
  );
}

export default Comments;
