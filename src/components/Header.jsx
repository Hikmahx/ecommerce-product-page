import React from 'react';
import logo from '../assets/logo.svg';
import menu from '../assets/icon-menu.svg';
import avatar from '../assets/image-avatar.png';

const Header = () => {
  return (
    <header>
      <div className='wrapper relative flex h-16 px-5 py-4 items-center justify-between'>
        <div className='left flex'>
          <div className='menu lg:hidden'>
            <img src={menu} alt='menu' />
          </div>
          <div className='logo mx-4 -mt-1'>
            <img src={logo} alt='logo' />
          </div>
          <nav className=''>
            <ul className='font-bold lg:font-normal hidden'>
              <li className=''>Collections</li>
              <li className=''>Men</li>
              <li className=''>Women</li>
              <li className=''>About</li>
              <li className=''>Contact</li>
            </ul>
          </nav>
        </div>
        <div className="right">
          <div className='user-bar flex items-center'>
            <div className='cart-container'>
              <div className='quantity-wrapper'></div>
              <div className='cart-wrapper px-3'>
                <i className='text-grayish-blue text-3xl leading-none'>
                  <ion-icon name='cart-outline'></ion-icon>
                </i>
              </div>
            </div>
            <div className='user h-6 w-6 mx-2'>
              <img src={avatar} alt='avatar' />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
