import React, { useContext } from 'react'
import ProductContext from '../context/ProductContext'

const DesktopPreview = () => {

  const {images, thumbnails} = useContext(ProductContext)

  return (
    <>
    <div className="preview max-w-3xl rounded-2xl overflow-hidden">
      <img src={images[0]} alt="product-preview" />
    </div>
    <div className="thumbnails flex max-w-3xl justify-between pt-8">
      {thumbnails.map(img=>(
        <img className="cursor-pointer w-22 h-22 rounded-xl hover:opacity-50" src={img} alt="thumbnail" />
      ))

      }
    </div>
    </>
  )
}

export default DesktopPreview