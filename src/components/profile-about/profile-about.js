import React from 'react';
import './profile-about.scss';

const ProfileAbout = () => {
  return (
    <div className='profile-about'>
      <div className='profile-about__inner'>
        <h1 className='profile-about__title'>Lorem ipsum dolor</h1>
        <p className='profile-about__text'>Nunc maximus leo eu orci ultrices, at
          placerat elit pharetra. Nullam mi orci, ornare eget purus et, pellentesque
          placerat nisl. Duis id nisl ac magna semper ultricies nec in enim. Donec congue
          sodales urna vitae lobortis. In fermentum nibh justo, vel volutpat ex dignissim
          in. Fusce malesuada quis metus id vehicula. In vel nulla ipsum. Aliquam enim
          purus, tincidunt quis mollis vitae, viverra in nibh. In hendrerit quis tortor at
          ornare. Proin cursus metus in erat tempor pharetra. Morbi placerat, tortor id
          egestas consequat, libero lectus malesuada arcu, id volutpat nibh purus ac
          nulla. Aenean aliquam sagittis justo quis luctus. Praesent et turpis dui. Nunc
          tempus tincidunt libero, et pretium metus sodales quis. Fusce sagittis vitae
          nunc sit amet feugiat.</p>
        <form className='profile-about__form'>
          <fieldset className='profile-about__field'>
            <legend>Lorem ipsum</legend>
            <label htmlFor='lorem1'>Lorem1</label>
            <input type='radio' id='lorem1' defaultValue='150'/>
            <label htmlFor='lorem2'>Lorem2</label>
            <input type='radio' id='lorem2' defaultValue='150'/>
            <label htmlFor='lorem3'>Lorem3</label>
            <input type='radio' id='lorem3' defaultValue='150'/>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default ProfileAbout;