import React from 'react'
import Head from './Head'
import Search from './Search'
import Navbar from './Navbar'
import './Header.css'


const Header = ({cartitem}) => {
    return <>
    <Head/>
    <Search cartitem={cartitem}/>
    <Navbar/>
    </>
}

export default Header