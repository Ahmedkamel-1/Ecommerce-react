import './App.css'
import Header from './common/header/Header'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Pages from './Pages/Pages';
import Data from "./components/flashDeals/Data"
import { useState } from 'react';
import Cart from './common/cart/Cart';
import Sdata from './components/shop/Sdata';
import Footer from './common/footer/Footer';


const App = () => {
  const {productItems} = Data.productItems
  const {shopItems} = Sdata.shopItems
  const [cartitem, setcartitem] = useState([])

  const addToCart = (product) =>{
    const productExit = cartitem.find((item)=> item.id === product.id)

    if(productExit) {
      setcartitem(cartitem.map((item)=>
        (item.id === product.id ? 
          {...productExit , qty:productExit.qty +1} : item)))
    }else {
      setcartitem([...cartitem , {...product , qty:1}])
    }
  }
  const decreaseQty = (product) => {
    const productExit = cartitem.find((item)=> item.id === product.id)
    if (productExit.qty === 1) {
      setcartitem(cartitem.filter((item)=> item.id !== product.id))
    }else{
      setcartitem(cartitem.map((item)=>(item.id === product.id?{...productExit , qty: productExit.qty-1}:item)))
    }
  }
  return <>
      <Router>
        <Header cartitem={cartitem}/>
        <Routes>
          <Route path='/' element={<Pages productItems={productItems} addToCart={addToCart} shopItems={shopItems} />}/>
          <Route path='/cart' element={<Cart cartitem={cartitem} addToCart={addToCart} decreaseQty={decreaseQty} />}/>
        </Routes>
        <Footer/>
      </Router>
  </>
}

export default App