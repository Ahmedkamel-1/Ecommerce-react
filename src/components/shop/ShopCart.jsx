import React, { useState } from "react"
import Sdata from './Sdata'

const ShopCart = ({ shopItems, addToCart }) => {
    const [count, setCount] = useState(0)
    const increment = () => {
    setCount(count + 1)
    }
    return (
    <>
        {Sdata.shopItems.map((item, index) => {
        return (
            <div className='box d_flex'>
                <div className='product mtop'>
                    <div className='img'>
                        <span className='discount'>{item.discount}% Off</span>
                        <img src={item.cover} alt='' />
                        <div className='product-like'>
                            <label>{count}</label> <br />
                            <i className='fa fa-regular fa-heart' onClick={increment}></i>
                        </div>
                    </div>
                    <div className='product-details'>
                        <h3>{item.name}</h3>
                        <div className='rate'>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                        </div>
                        <div className='price'>
                            <h4>${item.price}.00 </h4>
                            <button onClick={() => addToCart(shopItems)}>
                                <i className='fa fa-plus'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
        })}
    </>
    )
}

export default ShopCart