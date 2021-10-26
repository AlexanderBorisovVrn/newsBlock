import React, {useState} from 'react';
import styles from './slider.module.scss';

function MySlider(props) {
  let [itemIdx,
    setItemIdx] = useState(0);
  const {slider, btn, btnWrap} = styles;
  const arr = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ]
  function checkMinItem() {
    itemIdx === 0
      ? setItemIdx(arr.length - 1)
      : setItemIdx(--itemIdx)
  }
  function checkMaxItem() {
    itemIdx === arr.length - 1
      ? setItemIdx(0)
      : setItemIdx(++itemIdx)
  }

  return <div className={slider}>
    {arr[itemIdx]}
    <div className={btnWrap}>
      <button type='button' className={btn} onClick={() => checkMaxItem()}>Next</button>
      <button type='button' className={btn} onClick={() => checkMinItem()}>Prev</button>
    </div>
  </div>
}

export default MySlider;