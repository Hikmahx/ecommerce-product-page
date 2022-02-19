import {createContext, useState} from 'react'
import imgProduct1 from '../assets/image-product-1.jpg'
import imgProduct2 from '../assets/image-product-2.jpg'
import imgProduct3 from '../assets/image-product-3.jpg'
import imgProduct4 from '../assets/image-product-4.jpg'

const ProductContext = createContext()

export const ProductProvider = ({children})=>{

  const [images, setImages] = useState([imgProduct1, imgProduct2, imgProduct3, imgProduct4])

  return (
    <ProductContext.Provider value={{
      images
    }}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductContext