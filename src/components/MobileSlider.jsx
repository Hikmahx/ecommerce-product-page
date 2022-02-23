import React, { useContext } from 'react'
import ProductContext from '../context/ProductContext'

const MobileSlider = () => {

  const {images, prevSlide, nextSlide, sliderRef} = useContext(ProductContext)

  return (
    <div className="slider overflow-hidden relative mt-1">
      <div ref={sliderRef} className="images flex w-full sm:w-1/2 transition-all">
        {images.map((image, index)=>(
          <img key={index} src={image} alt="slider-img" />
        ))}
      </div>
      <div className="directions absolute inset-x-0 inset-y-1/2 flex items-center justify-between mx-4">
        <button onClick={prevSlide} className="back-arrow w-10 h-10 bg-white rounded-full">
          <i className="flex items-center justify-center m-auto text-lg">
            <ion-icon name="chevron-back-outline"></ion-icon>
          </i>
        </button>
        <button onClick={nextSlide} className="next-arrow w-10 h-10 bg-white rounded-full">
          <i className="flex items-center justify-center m-auto text-lg">
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </i>
        </button>
      </div>
    </div>
  )
}

export default MobileSlider