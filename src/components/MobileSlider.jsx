import React, { useContext } from 'react'
import ProductContext from '../context/ProductContext'

const MobileSlider = () => {

  const {images} = useContext(ProductContext)

  return (
    <div className="slider overflow-hidden relative mt-1">
      <div className="images flex w-full sm:w-1/2">
        {images.map(image=>(
          <img src={image} alt="slider-img" />
        ))}
      </div>
      <div className="directions absolute inset-x-0 inset-y-1/2 flex justify-between mx-4">
        <button className="back-arrow w-10 h-10 bg-white rounded-full">
          <i className="flex items-center justify-center m-auto text-lg">
            <ion-icon name="chevron-back-outline"></ion-icon>
          </i>
        </button>
        <button className="next-arrow w-10 h-10 bg-white rounded-full">
          <i className="flex items-center justify-center m-auto text-lg">
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </i>
        </button>
      </div>
    </div>
  )
}

export default MobileSlider