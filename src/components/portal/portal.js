import {useEffect} from 'react';
import ReactDOM from 'react-dom';
import './portal.scss'

const Portal = ({children, target}) => {
  const container = document.createElement('div');
  container
    .classList
    .add('container')

  useEffect(() => {
    target && target.appendChild(container);
    return (() => {
      target.removeChild(container)
    })
  }, [])
  return ReactDOM.createPortal(children, container)
}

export default Portal;
