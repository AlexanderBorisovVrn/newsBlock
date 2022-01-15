import React from 'react';
import phoneImg from '../../icons/Phone-old_icon-icons.com_51955.svg';
import mailImg from '../../icons/mail-open-symbol-of-an-envelope-with-a-letter-inside_icon-icons.com_56495.svg';
import {contacts,list,inner,item,img} from './contacts.module.scss'

const Contacts = () => {
  const displayInfo = (message)=>{
    console.log(message);
  }
  return (
    <section className={contacts}>
      <div className={inner}>
        <ul className={list}>
          <li className={item}  title='Phone number' onClick={()=>displayInfo('8-906-583-14-80')}>
            <img alt='phone' src={phoneImg} className={img}/>
          </li>
          <li className={item}>
            <img alt='phone' src={mailImg} className={img} title='Mail' onClick={()=>displayInfo('alexanderborisovvrn@gmail.com')}/>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Contacts;
