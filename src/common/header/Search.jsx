import React from 'react'
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom'


const Search = ({cartitem}) => {
    window.addEventListener("scroll" , function(){
        const search = this.document.querySelector(".search")
        search.classList.toggle("active" , window.scrollY > 100)
    })
    return <>
        <section className="search">
            <div className="container c_flex">
                <div className="logo width">
                    <img src={logo} alt="logo" />
                </div>
                <div className="search-box f_flex">
                    <i className='fa fa-search'></i>
                    <input type="text" placeholder='Search and hit enter ...' />
                    <span>All Categories</span>
                </div>
                <div className="icon f_flex width">
                    <i className='fa fa-user icon-circle'></i>
                    <div className="cart">
                        <Link to="/cart">
                            <i className='fa fa-shopping-bag icon-circle'></i>
                            <span>{cartitem.length === 0 ? '' : cartitem.length}</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default Search