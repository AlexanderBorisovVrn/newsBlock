import React, {useRef, useState} from 'react';
import TextareaAutosize from '../../textarea-autosize/textarea-autosize';
import {
  comments,
  inner,
  header,
  title,
  toggleOff,
  toggleOn,
  tabs,
  tabsList,
  item,
  text
} from './commentsContainer.module.scss'

const com = [
  {
    author: 'dim mednet',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed sollicitudin' +
        ' dolor. Nulla volutpat, metus et varius luctus, orci risus tempus purus, ut vari' +
        'us dui velit aliquet tortor. Duis volutpat, dolor quis pulvinar blandit, orci er' +
        'at facilisis urna, a egestas augue ante in felis. Ut quis fermentum risus, ac vu' +
        'lputate quam. Aenean volutpat arcu in convallis sollicitudin. Ut nec eros posuer' +
        'e, eleifend ex sed, blandit justo. Quisque metus velit, semper sed semper eu, eg' +
        'estas sed orci. Quisque in vestibulum lectus, efficitur varius ipsum. Quisque po' +
        'suere pulvinar metus, et auctor enim porta sed. Proin quis tincidunt sem. Quisqu' +
        'e ultricies quam ac.',
    dateTime: '2019-08-21'
  }, {
    author: 'trew stratway',
    text: 'Maecenas tristique scelerisque malesuada. Nunc lacinia pretium risus, ut pretium' +
        ' mauris hendrerit quis. Duis eu lorem laoreet, tincidunt ligula at, volutpat mas' +
        'sa. Vestibulum consequat nisl at mi tempus tristique. Nunc eu lectus rhoncus, ve' +
        'stibulum diam eu, sagittis mi. Aliquam vel quam quis sapien maximus condimentum ' +
        'vitae non nisl. Praesent eget massa ut neque sodales ornare a facilisis nisl. Ma' +
        'uris sit amet gravida lectus. Etiam a erat est. Donec eget faucibus urna, sit am' +
        'et condimentum nunc. Nulla accumsan tellus mauris, id convallis mauris ultricies' +
        ' eu. Nulla eget urna sit amet massa rhoncus fermentum sit amet id nisl. Curabitu' +
        'r congue libero eu justo pulvinar ultricies. Ut ipsum augue, rhoncus a nulla in,' +
        ' interdum fringilla leo. Nunc nec diam et lectus porttitor iaculis. Phasellus in' +
        ' dui risus.',
    dateTime: '2019-08-22'
  }
]

const CommentsContainer = () => {
  const [isShowComments,
    setIsShowComments] = useState(false);
  const [textareaHeight,
    setTextareaHeight] = useState(1);
  const ref = useRef();
  return (
    <section className={comments}>
      <div className={inner}>
        <div className={header}>
          <h2 className={title}>Комментарии:<span>&nbsp;1</span>
          </h2>
          <button
            type='button'
            className={isShowComments
            ? toggleOff
            : toggleOn}
            onClick={() => setIsShowComments(!isShowComments)}></button>
        </div>
        <div className={tabs}>
          <ul className={tabsList}>
            <li className={item}>Новые</li>
            <li className={item}>Старые</li>
            <li className={item}>Популярные</li>
          </ul>
        </div>
   <TextareaAutosize placeholder = 'Напишите комментарий...'/>
      
      </div>
    </section>
  );
}

export default CommentsContainer;
