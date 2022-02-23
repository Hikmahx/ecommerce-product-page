import React, { useContext } from 'react'
import ProductContext from '../context/ProductContext'

const DesktopPreview = () => {

  const {thumbnails, thumbnailRef, previewDisplay, previewImg, lightBox, modalThumbnailRef} = useContext(ProductContext)

  return (
    <>
    <div className="preview xl:min-w-md max-w-3xl rounded-2xl overflow-hidden cursor-pointer">
      <img onClick={lightBox} src={previewImg} alt="product-preview" />
    </div>
    <div ref={thumbnailRef}  className="thumbnails flex max-w-3xl justify-between pt-8">
      {thumbnails.map((img, index)=>(
        <div ref={modalThumbnailRef} key={index} className="cursor-pointer w-22 h-22 rounded-xl hover:opacity-80 relative overflow-hidden bg-white">
          <img id={index} onClick={previewDisplay} className="w-full" src={img} alt="thumbnail" />
        </div>
      ))

      }
    </div>
    </>
  )
}

export default DesktopPreview