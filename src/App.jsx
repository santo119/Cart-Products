

import { useState } from 'react'
import './App.css'
import AllProducts from './components/AllProducts/AllProducts'
import Navbar from './components/Navbar/Navbar'
import SideBar from './components/SideBar/SideBar'

function App() {

  const [isActive, setIsActive] = useState({
    cart: true,
    status: "cart"
  })

  const [purchase, setPurchase] = useState([])
  const [price, setPrice] = useState(500)
  

  const handleIncrese = (pr) =>{
      setPrice(price + pr)
  }
  
  const handleDeletePrice = (id) =>{
      const product = purchase.find((p) => p.id === id)
      setPrice(product.price - price)
  }


  const handlerIsActive = status =>{
    if(status == 'cart'){
      setIsActive({
        cart: true,
      status: "cart"
      })

    }else{
      setIsActive({
        cart: false,
      status: "about"
      })
    }
  }

  const handlePurchaseProduct = (product) =>{
    
    const isExists = purchase.find((previousP) => previousP.id === product.id)
    if(isExists){
      alert('this products already exists!!!')

    }else{
      handleIncrese(product.price)
      const newProduct = [...purchase, product]
     setPurchase(newProduct)
    }

      
  }

  const handleDeleteBtn = id =>{
    handleDeletePrice(id)
    const newProducts = purchase.filter((delProduct) => delProduct.id !== id)
    setPurchase(newProducts)
    

  }
  

  return (
    <>
     <Navbar
     purchase = {purchase} 
     price = {price}
     ></Navbar>
     <div className='flex container mx-auto'>
        <AllProducts
        handlePurchaseProduct = {handlePurchaseProduct}
        ></AllProducts>
        <SideBar
        handlerIsActive = {handlerIsActive}
        isActive = {isActive}
        purchase = {purchase}
        handleDeleteBtn = {handleDeleteBtn}
       
        ></SideBar>
     </div>
      
    </>
  )
}

export default App
