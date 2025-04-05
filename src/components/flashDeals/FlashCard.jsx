import React, { useState } from 'react'
import Slider from "react-slick";
import Data from './Data';

const NextArrow = (props) =>{
    const {onClick} = props
    return (
        <div className="control-btn" onClick={onClick}>
            <button className='next'>
                <i className='fa fa-long-arrow-alt-right'></i>
            </button>
        </div>
    )
}

const PrevArrow = (props) =>{
    const {onClick} = props
    return (
        <div className="control-btn" onClick={onClick}>
            <button className='prev'>
                <i className='fa fa-long-arrow-alt-left'></i>
            </button>
        </div>
    )
}


const FlashCard = ({productItems , addToCart}) => {
    const [count, setcount] = useState(0)
    const increment =()=>{
        setcount(count+1)
    }

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        autoPlay:true,
        slidesToScroll: 1,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>
    };
    return (
        <>
        <Slider {...settings}>
            {Data.productItems.map((Item)=>{
            return (<div className="box">
                        <div className="product mtop">
                            <div className="img">
                                <span className='discount'>{Item.discount}% off</span>
                                <img src={Item.cover} alt=''/>
                                <div className="product-like">
                                    <label>0</label><br />
                                    <i class="fa fa-regular fa-heart" onClick={increment}></i>
                                </div>
                            </div>
                            <div className="product-datails">
                                <h3>{Item.name}</h3>
                                <div className="rate">
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                </div>
                                <div className="price">
                                    <h4>{Item.price}.00</h4>
                                    <button onClick={()=> addToCart(Item)}>
                                        <i className='fa fa-plus'></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
        })}
        </Slider>
    </>
    )
}

export default FlashCard