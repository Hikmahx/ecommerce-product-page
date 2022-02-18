import {createContext} from 'react'

const ProductContext = createContext()

export const ProductProvider = ({children})=>{
  return (
    <ProductContext.Provider value={{}}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductContext