import React, {useRef, useContext} from 'react';
import logo from '../assets/logo.svg';
import menu from '../assets/icon-menu.svg';
import avatar from '../assets/image-avatar.png';
import Cart from './Cart';
import ProductContext from '../context/ProductContext';


const Header = () => {

  const {cartItems, showCart, cartDisplay} = useContext(ProductContext)
    
  //HAMBURGER MENU 
  let navMenu = useRef(null)
  let darkScreen = useRef(null)
  let close= useRef(null)
  let hamburger = useRef(null)

  const displayMenu = ()=>{
    navMenu.current.classList.toggle('!translate-x-0')
    darkScreen.current.classList.toggle('!opacity-60')
    darkScreen.current.classList.toggle('!z-20')
    close.current.classList.toggle('!block')
    hamburger.current.classList.toggle('!hidden')
  }

  return (
    <header>
      <div className='wrapper relative flex h-16 px-5 py-4 items-center justify-between lg:h-28 lg:mx-40 lg:pb-2 lg:px-1 lg:py-0 lg:border-b border-grayish-blue'>
        <div className='left flex items-center lg:h-inherit'>
          <div onClick={displayMenu} className='menu lg:hidden z-40 cursor-pointer'>
            <img ref={hamburger} src={menu} alt='menu-icon' />
            <div ref={close} className="close hidden text-xl leading-none fixed">
              <ion-icon name="close-outline"></ion-icon>
            </div>
          </div>
          <div className='logo mx-4 -mt-1 lg:m-auto'>
            <img src={logo} alt='logo' />
          </div>
          <nav ref={navMenu} className='menu fixed inset-0 right-1/3 bg-white pt-20 z-30 h-screen px-7 -translate-x-full transition-all ease-in-out duration-500 lg:translate-x-0 lg:relative lg:w-max lg:p-0 lg:h-inherit lg:flex lg:items-center'>
            <ul className='font-bold lg:font-normal lg:flex lg:items-center text-lg lg:text-base pt-2 lg:p-0 lg:mx-9 lg:text-dark-grayish-blue lg:h-inherit'>
              <li className='mb-5 lg:mb-0 lg:mx-4 lg:h-inherit lg:flex lg:items-center cursor-pointer lg:relative lg:before:content-[attr(before)] before:absolute before:-bottom-1 before:left-0 before:h-1 before:bg-orange before:w-0 hover:before:w-full before:transition-all'>Collections</li>
              <li className='mb-5 lg:mb-0 lg:mx-4 lg:h-inherit lg:flex lg:items-center cursor-pointer lg:relative lg:before:content-[attr(before)] before:absolute before:-bottom-1 before:left-0 before:h-1 before:bg-orange before:w-0 hover:before:w-full before:transition-all'>Men</li>
              <li className='mb-5 lg:mb-0 lg:mx-4 lg:h-inherit lg:flex lg:items-center cursor-pointer lg:relative lg:before:content-[attr(before)] before:absolute before:-bottom-1 before:left-0 before:h-1 before:bg-orange before:w-0 hover:before:w-full before:transition-all'>Women</li>
              <li className='mb-5 lg:mb-0 lg:mx-4 lg:h-inherit lg:flex lg:items-center cursor-pointer lg:relative lg:before:content-[attr(before)] before:absolute before:-bottom-1 before:left-0 before:h-1 before:bg-orange before:w-0 hover:before:w-full before:transition-all'>About</li>
              <li className='mb-5 lg:mb-0 lg:mx-4 lg:h-inherit lg:flex lg:items-center cursor-pointer lg:relative lg:before:content-[attr(before)] before:absolute before:-bottom-1 before:left-0 before:h-1 before:bg-orange before:w-0 hover:before:w-full before:transition-all'>Contact</li>
            </ul>
          </nav>
          <div ref={darkScreen} className="screen -z-10 fixed inset-0 opacity-0 bg-black h-screen lg:hidden transition-all"></div>
        </div>
        {showCart &&
        <Cart/>
        }
        <div className="right">
          <div className='user-bar flex items-center'>
            <div className='cart-container'>
              <div className='cart-wrapper mx-3 lg:mx-8 lg:mt-2 relative'>
              {cartItems.length > 0 &&
              <div className='quantity-wrapper absolute px-2 rounded-full bg-orange z-10 -right-1/3 lg:-right-1/2 -top-2'>
                <div className="amount text-white text-xs">{cartItems.length}</div>
              </div>
              }
                <i onClick={cartDisplay} className= {'cursor-pointer text-3xl !leading-none lg:text-2xl transition-colors ' + (showCart? 'text-dark-blue' : 'text-grayish-blue')}>
                  <ion-icon name='cart-outline'></ion-icon>
                </i>
              </div>
            </div>
            <div className='user h-6 w-6 mx-2 sm:h-8 sm:w-8 md:w-10 md:h-10 lg:w-12 lg:h-12'>
              <img src={avatar} alt='avatar' />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
