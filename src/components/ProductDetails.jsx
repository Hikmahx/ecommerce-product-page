import React from 'react'

const ProductDetails = () => {
  return (
    <>
    <h2 className="company uppercase text-orange font-bold text-sm tracking-wider pb-3">
      sneaker company
    </h2>
    <h3 className="product capitalize text-very-dark-blue font-bold text-3xl pb-3">
      fall limited edition <span className="block">sneakers</span> 
    </h3>
    <p className="text-dark-grayish-blue pb-6">
      These low-profile sneakers are your perfect casual
       wear companion. Featuring a durable rubber outer
       sole, they'll withstand everything the weather
       can offer.
    </p>
    <div className="amount font-bold flex items-center justify-between mb-6">
      <div className="discount-price items-center flex">
        <figure></figure>
        <div className="price text-3xl">$125.00</div>
        <div className="discount text-orange bg-pale-orange w-max px-2 rounded mx-5 h-6">
          50%
        </div>
      </div>
      <div className="original-price text-grayish-blue line-through">
        $250.00
      </div>
    </div>
    <div className="sm:flex">
      <div className="quantity-container w-full bg-light-grayish-blue rounded-lg h-14 mb-4 flex items-center justify-between px-6 font-bold sm:mr-3">
        <button className="text-orange text-2xl leading-none font-bold">-</button>
        <div className="quantity text-dark-blue">0</div>
        <button className="text-orange text-2xl leading-none font-bold">+</button>
      </div>

      <button className="cart w-full h-14 bg-orange rounded-lg mb-2 shadow-orange-shadow shadow-2xl text-white flex items-center justify-center">
        <i className='cursor-pointer text-white text-xl leading-0 pr-3'>
          <ion-icon name='cart-outline'></ion-icon>
        </i>
        Add to cart
      </button>
    </div>

    </>
  )
}

export default ProductDetails