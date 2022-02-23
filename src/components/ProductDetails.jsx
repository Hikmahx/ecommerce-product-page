import React, {useContext} from 'react'
import ProductContext from '../context/ProductContext'

const ProductDetails = () => {
  
  const {quantity, setQuantityCount, quantityCount} = useContext(ProductContext)

  return (
    <>
    <h2 className="company uppercase text-orange font-bold text-sm sm:text-md tracking-wider pb-3 sm:pb-5">
      sneaker company
    </h2>
    <h3 className="product capitalize text-very-dark-blue font-bold text-3xl sm:text-4xl sm:leading-none pb-3">
      fall limited edition <span className="block lg:mt-1">sneakers</span> 
    </h3>
    <p className="text-dark-grayish-blue pb-6 lg:py-7 lg:leading-6">
      These low-profile sneakers are your perfect casual
       wear companion. Featuring a durable rubber outer
       sole, they'll withstand everything the weather
       can offer.
    </p>
    <div className="amount font-bold flex items-center justify-between lg:flex-col lg:items-start mb-6">
      <div className="discount-price items-center flex">
        <div className="price text-3xl">$125.00</div>
        <div className="discount text-orange bg-pale-orange w-max px-2 rounded mx-5 h-6">
          50%
        </div>
      </div>
      <div className="original-price text-grayish-blue line-through lg:mt-2">
        $250.00
      </div>
    </div>
    <div className="sm:flex lg:mt-8 w-full">
      <div className="quantity-container w-full bg-light-grayish-blue rounded-lg h-14 mb-4 flex items-center justify-between px-6 lg:px-3 font-bold sm:mr-3 lg:mr-5 lg:flex-1">
        <button onClick={quantity} className="text-orange text-2xl leading-none font-bold mb-1 lg:mb-2 lg:text-3xl">-</button>
        <input onChange={quantity} className="quantity focus:outline-none w-1/6 text-dark-blue bg-light-grayish-blue font-bold flex text-center" type="number" name="" id="" value={quantityCount} />
        <button onClick={quantity} className="text-orange text-2xl leading-none font-bold mb-1 lg:mb-2 lg:text-3xl">+</button>
      </div>

      <button className="cart w-full h-14 bg-orange rounded-lg lg:rounded-xl mb-2 shadow-orange-shadow shadow-2xl text-white flex items-center justify-center lg:w-3/5">
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