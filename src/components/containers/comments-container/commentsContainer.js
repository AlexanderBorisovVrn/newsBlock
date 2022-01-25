import React, {useState, useContext, useEffect} from 'react';
import TextareaAutosize from '../../textarea-autosize/textarea-autosize';
import Comment from '../../comment/comment';
import NewsContext from '../../news-context';
import {commentsLoaded} from '../../../reducers/commentsSlice';

import {
  commentsBlock,
  inner,
  header,
  title,
  toggleOff,
  toggleOn,
  tabs,
  tabsList,
  item,
  list,
  show,
  hide
} from './commentsContainer.module.scss';
import {useDispatch, useSelector} from 'react-redux';

const CommentsContainer = ({id}) => {
  const [isShowComments,
    setIsShowComments] = useState(false);
  const {getComments} = useContext(NewsContext);
  const dispatch = useDispatch();
  const {comments} = useSelector(state => state.commentsSlice);
  const articleComments = comments.filter(comment => (comment.postId - 1) === id);
  const commentsClass = isShowComments
    ? show
    : hide;
  const commentToggleClass = isShowComments
    ? toggleOff
    : toggleOn

  useEffect(() => {
    getComments().then(commentsList => {
      dispatch(commentsLoaded(commentsList))
    })

  }, [])
  return (
    <section className={commentsBlock}>
      <div className={inner}>
        <div className={header}>
          <h2 className={title}>Комментарии:<span>&nbsp;{articleComments.length}</span>
          </h2>
          <button
            type='button'
            className={commentToggleClass}
            onClick={() => setIsShowComments(!isShowComments)}></button>
        </div>
        <div className={commentsClass}>
          <div className={tabs}>
            <ul className={tabsList}>
              <li className={item}>Новые</li>
              <li className={item}>Старые</li>
              <li className={item}>Популярные</li>
            </ul>
          </div>
          <TextareaAutosize placeholder='Напишите комментарий...'/>
          <div className={list}>
            <ul className={list}>
              {articleComments.map((comment, idx) =>< li key = {
                idx
              } > <Comment comment={comment}/> </li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CommentsContainer;
