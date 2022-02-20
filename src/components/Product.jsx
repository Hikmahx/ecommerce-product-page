import React from 'react'
import DesktopPreview from './DesktopPreview'
import MobileSlider from './MobileSlider'
import ProductDetails from './ProductDetails'

const Product = () => {
  
  return (
    <main className='product-container lg:flex lg:items-center lg:gap-x-12 xl:gap-x-24 lg:px-20 xl:px-40 lg:py-20 lg:m-auto lg:mt-2 lg:max-w-8xl'>
      <section className="mobile-slider lg:hidden">
        <MobileSlider />
      </section>
      <section className="destop-preview hidden lg:block">
        <DesktopPreview />
      </section>
      <section className="product-details container mx-auto px-6 pt-5 sm:pt-10 lg:pt-5 pb-20 lg:pb-5 lg:pr-0 lg:pl-7 xl:ml-1">
        <ProductDetails />
      </section>
    </main>
  )
}

export default Product