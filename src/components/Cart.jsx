import React, {useRef, useContext} from 'react';
import ProductContext from '../context/ProductContext';

const Cart = () => {

  const {cartItems} = useContext(ProductContext)


  return (
    <div className='absolute top-20 lg:top-24 bottom-40 inset-x-2 lg:left-auto lg:-right-16 p-5 max-w-xl lg:max-w-sm lg:w-full mx-auto min-h-xs flex flex-col bg-white z-20 shadow-lg lg:shadow-xl rounded-lg'>
      <h3 className="font-bold pb-5">Cart</h3>
      <hr className="text-grayish-blue -mx-5" />
      <div className="cart-content flex flex-col flex-1 items-center justify-center">
      
      <p className="text-dark-grayish-blue font-bold">Your cart is empty.</p>
      </div>
    </div>
  )
}

export default Cart