import React from 'react'
import FlashDeals from '../components/flashDeals/FlashDeals'
import Home from '../components/mainpage/Home'
import TopCate from '../components/top/TopCate'
import NewArrivals from '../components/newrarrivals/NewArrivals'
import Discount from '../components/discount/Discount'
import Shop from '../components/shop/Shop'
import Annu from '../components/annocuments/Annu'
import Wrapper from '../components/wrapper/wrapper'


const Pages = ({productItems , cartitem , addToCart , shopItems}) => {
    return <>
        <Home cartitem={cartitem}/>
        <FlashDeals productItems={productItems} addToCart={addToCart} />
        <TopCate/>
        <NewArrivals/>
        <Discount/>
        <Shop shopItems={shopItems} addToCart={addToCart}/>
        <Annu/>
        <Wrapper/>
    </>
}

export default Pages