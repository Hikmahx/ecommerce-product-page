import React from 'react'
import DesktopPreview from './DesktopPreview'
import MobileSlider from './MobileSlider'
import ProductDetails from './ProductDetails'

const Product = () => {
  
  return (
    <main className='product-container'>
      <section className="mobile-slider lg:hidden">
        <MobileSlider />
      </section>
      <section className="destop-preview hidden lg:block">
        <DesktopPreview />
      </section>
      <section className="product-details">
        <ProductDetails />
      </section>
    </main>
  )
}

export default Product