import React, {useRef} from 'react';
import logo from '../assets/logo.svg';
import menu from '../assets/icon-menu.svg';
import avatar from '../assets/image-avatar.png';

const Header = () => {

  let navMenu = useRef(null)
  let darkScreen = useRef(null)
  let close= useRef(null)
  let hamburger = useRef(null)

  const displayMenu = ()=>{
    navMenu.current.classList.toggle('!translate-x-0')
    darkScreen.current.classList.toggle('!opacity-60')
    close.current.classList.toggle('!block')
    hamburger.current.classList.toggle('!hidden')
  }

  return (
    <header>
      <div className='wrapper relative flex h-16 px-5 py-4 items-center justify-between'>
        <div className='left flex'>
          <div onClick={displayMenu} className='menu lg:hidden z-30'>
            <img ref={hamburger} src={menu} alt='menu-icon' />
            <div ref={close} className="close hidden text-xl leading-none">
              <ion-icon name="close-outline"></ion-icon>
            </div>
          </div>
          <div className='logo mx-4 -mt-1'>
            <img src={logo} alt='logo' />
          </div>
          <nav ref={navMenu} className='menu absolute inset-0 right-1/3 bg-white pt-20 z-20 h-screen px-7 -translate-x-full transition-all ease-in-out duration-500'>
            <ul className='font-bold lg:font-normal text-lg pt-2'>
              <li className='mb-5'>Collections</li>
              <li className='mb-5'>Men</li>
              <li className='mb-5'>Women</li>
              <li className='mb-5'>About</li>
              <li className='mb-5'>Contact</li>
            </ul>
          </nav>
          <div ref={darkScreen} className="screen fixed inset-0 z-10 opacity-0 bg-black h-screen lg:hidden transition-all"></div>
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
