import React, { useContext } from 'react'
import ProductContext from '../context/ProductContext'

const DesktopPreview = () => {

  const {images, thumbnails, thumbnailRef, previewDisplay, previewImg} = useContext(ProductContext)

  return (
    <>
    <div className="preview xl:min-w-md max-w-3xl rounded-2xl overflow-hidden">
      <img src={previewImg} alt="product-preview" />
    </div>
    <div ref={thumbnailRef} className="thumbnails flex max-w-3xl justify-between pt-8">
      {thumbnails.map((img, index)=>(
        <div className="cursor-pointer w-22 h-22 rounded-xl hover:opacity-80 relative overflow-hidden bg-white">
          <img key={index} id={index} onClick={previewDisplay} className="w-full" src={img} alt="thumbnail" />
        </div>
      ))

      }
    </div>
    </>
  )
}

export default DesktopPreview