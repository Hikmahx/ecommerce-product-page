import {createContext, useEffect, createRef, useRef, useState} from 'react'
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
  const currentIndex = parseInt(images.indexOf(previewImg))
  let thumbnailRef = createRef()
  let modalThumbnailRef = useRef(null)
  const sliderRef = useRef(null)
  const [slideCount, setSlideCount] = useState(0)
  const [quantityCount, setQuantityCount] = useState(0)
  const [cartItems, setCartItems] = useState([])
  const [showCart, setShowCart] = useState(false)
  const [total, setTotal] = useState(0)
  const productImgRef = useRef()
  const productTitleRef = createRef(null)
  const productPriceRef = useRef()
  const productQuantityRef = useRef()

  useEffect(() => {

    thumbnailActive()
    modalThumbnailActive()
    // eslint-disable-next-line    
  }, [previewImg, modal])
  

  const previewDisplay = (e)=>{
    // CHANGE PREVIEW IMG ON CLICK
    setPreviewImg(images[e.target.id])   
  }

  const lightBox = ()=>{
    setModal(true)
  }

  const close = ()=>{
    setModal(false)
  }

  const nextPreview = ()=>{
    if(currentIndex > 2){
      setPreviewImg(images[currentIndex])
    }else{
      setPreviewImg(images[currentIndex+1])
    }
  }

  const prevPreview = ()=>{
    if(currentIndex <1){
      setPreviewImg(images[currentIndex])
    }else{
      setPreviewImg(images[currentIndex-1])
    }
  }

  const thumbnailActive = ()=>{
    // REMOVE STYLE FROM INACITVE THUMBNAIL
    thumbnailRef.current.childNodes.forEach(img=>{
      img.classList.remove('border-2', 'border-orange')
      img.firstElementChild.classList.remove('opacity-50')
    })
    
    // STYLE ACITVE THUMBNAIL
    return (
      thumbnailRef.current.childNodes[currentIndex].classList.add('border-2', 'border-orange'),
      thumbnailRef.current.childNodes[currentIndex].firstElementChild.classList.add('opacity-50')
    )
  }

  const modalThumbnailActive = ()=>{
    if(modal){
      // REMOVE STYLE FROM INACITVE THUMBNAIL
      let modalThumbnailImgs = modalThumbnailRef.current.parentElement.childNodes
      modalThumbnailImgs.forEach(img=>{
        img.classList.remove('border-2', 'border-orange')
        img.firstElementChild.classList.remove('opacity-50')
      })

      // STYLE ACITVE THUMBNAIL
      return( 
        modalThumbnailImgs[currentIndex].classList.add('border-2', 'border-orange'),
        modalThumbnailImgs[currentIndex].firstElementChild.classList.add('opacity-50')
      )
    }
  }

  const nextSlide = ()=>{
    let slideLength = sliderRef.current.childElementCount
    if(slideCount > slideLength -2 || (slideCount > slideLength -3 && window.innerWidth > 640)){
      setSlideCount(slideCount)
      sliderRef.current.style.transform = `translateX(-${100 * (slideCount)}%)`
    }else{
      setSlideCount(slideCount+1)
      sliderRef.current.style.transform = `translateX(-${100 * (slideCount+1)}%)`
    }
  }

  const prevSlide = ()=>{
    if(slideCount === 0 ){
      setSlideCount(slideCount)
      sliderRef.current.style.transform = `translateX(-${100 * (slideCount)}%)`
    }else{
      setSlideCount(slideCount- 1)
      sliderRef.current.style.transform = `translateX(-${100 * (slideCount-1)}%)`
    }
  }

  const quantity = (e)=>{
    let action = e.target.innerText
    if(action ==='-'){
      setQuantityCount((quantityCount)=>(Math.max(quantityCount - 1, 0))) 
    }else if(action === '+'){
      setQuantityCount((quantityCount)=>(Math.min(quantityCount + 1, 100))) 
    }else{
      setQuantityCount(()=>(Math.min(parseInt(e.target.value), 100)))
    }
  }

  const cartDisplay = ()=>{
    setShowCart(!showCart)
  }

  const addCart = (e)=>{
    if(quantityCount < 1){
      setQuantityCount(quantityCount+1)
    }
    
    setCartItems(()=>[
      {
        'img': thumbnails[0],
        'title': productTitleRef.current.innerText, 
        'price': productPriceRef.current.innerText,
        'quantity': (productQuantityRef.current.value <1? 1 : productQuantityRef.current.value)
      }
    ])
      
    setTotal(productQuantityRef.current.value <1? 1 : productQuantityRef.current.value)
  }

  const deleteItem = (e)=>{
    let product = e.target.parentElement.parentElement.parentElement.childNodes[1].firstElementChild.textContent
    setCartItems(cartItems.filter((item)=>(item.title !== product)))
    setTotal(0)
  }

  return (
    <ProductContext.Provider value={{
      images, 
      thumbnails, 
      thumbnailRef, 
      previewImg,
      modal, 
      modalThumbnailRef,
      sliderRef,
      quantityCount,
      cartItems,
      showCart,
      total,
      productImgRef,
      productTitleRef,
      productPriceRef,
      productQuantityRef,
      addCart,
      setQuantityCount,
      previewDisplay, 
      lightBox,
      close, 
      nextPreview,
      prevPreview, 
      nextSlide, 
      prevSlide,
      quantity,
      cartDisplay, 
      deleteItem
    }}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductContext