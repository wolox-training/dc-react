import React from 'react';
import headerCss from './css/header.css';

import logo from './assets/wbooks-logo.png';
import addBook from './assets/addBook.png';
import user from './assets/user.png';
import notifications from './assets/notifications.png';
import defaultbook from './assets/defaultbook.png';

const Header = (props) => {
  return (
    <div className='flex header-container'>
      <img className='header-logo' src={logo}/>
      <div className='header-items'>
        <img src={notifications}/>
        <img src={addBook}/>
        <img src={user}/>
      </div>
    </div>
  )
}

export default Header;
