import {createContext, useState} from 'react'
import imgProduct1 from '../assets/image-product-1.jpg'
import imgProduct2 from '../assets/image-product-2.jpg'
import imgProduct3 from '../assets/image-product-3.jpg'
import imgProduct4 from '../assets/image-product-4.jpg'
import thumbnail1 from '../assets/image-product-1-thumbnail.jpg'
import thumbnail2 from '../assets/image-product-2-thumbnail.jpg'
import thumbnail3 from '../assets/image-product-3-thumbnail.jpg'
import thumbnail4 from '../assets/image-product-4-thumbnail.jpg'

const ProductContext = createContext()

export const ProductProvider = ({children})=>{

  const [images, setImages] = useState([imgProduct1, imgProduct2, imgProduct3, imgProduct4])
  const [thumbnails, setThumbnails] = useState([thumbnail1, thumbnail2, thumbnail3, thumbnail4])

  return (
    <ProductContext.Provider value={{
      images, 
      thumbnails
    }}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductContext