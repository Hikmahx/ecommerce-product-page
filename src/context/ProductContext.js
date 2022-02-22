import {createContext, useEffect, useRef, useState} from 'react'
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
  const [previewImg, setPreviewImg] = useState(images[0])
  const [thumbnails, setThumbnails] = useState([thumbnail1, thumbnail2, thumbnail3, thumbnail4])
  const [modal, setModal] = useState(false)
  const thumbnailRef = useRef(null)


  useEffect(() => {

    // STYLE DEFAULT ACTIVE THUMBNAIL
    return thumbnailRef.current.childNodes[0].classList.add('border-2', 'border-orange'),
           thumbnailRef.current.childNodes[0].firstElementChild.classList.add('opacity-50')
  }, [])
  

  const previewDisplay = (e)=>{

    // CHANGE PREVIEW IMG ON CLICK
    setPreviewImg(images[e.target.id])   

    // REMOVE STYLE FROM INACITVE THUMBNAIL
    let thumbImgs = e.target.parentElement.parentElement.childNodes
    thumbImgs.forEach(thumbImg => {
      let img = thumbImg.firstElementChild
      thumbImg.classList.remove('border-2', 'border-orange')
      img.classList.remove('opacity-50')
    });

    // STYLE ACITVE THUMBNAIL
    e.target.classList.add('opacity-50')
    e.target.parentElement.classList.add('border-2', 'border-orange')
  }

  const lightBox = ()=>{
    setModal(true)
  }

  const close = ()=>{
    setModal(false)
  }


  return (
    <ProductContext.Provider value={{
      images, 
      thumbnails, 
      thumbnailRef, 
      previewImg,
      modal, 
      previewDisplay, 
      lightBox,
      close
    }}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductContext