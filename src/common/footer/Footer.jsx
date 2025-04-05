import React from 'react'
import './Footer.css'

const Footer = () => {
    return <>
        <footer>
            <div className="container grid2">
                <div className="box">
                    <h1>Ecommerce</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis a, rerum animi atque ea architecto culpa nesciunt iste molestiae aliquid.</p>
                    <div className="icon d_flex">
                        <div className="img d_flex">
                            <span>Google Play</span>
                            <i className='fa fa-brands fa-app-store-ios'></i>
                            <span>App Store</span>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <h2>About us</h2>
                    <ul>
                        <li>Careers</li>
                        <li>Our Stores</li>
                        <li>Our Cares</li>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="box">
                    <h2>Customer Care</h2>
                    <ul>
                        <li>Help Center</li>
                        <li>How to Buy</li>
                        <li>Track Your Order</li>
                        <li>Corporate & Bulk Purchasing</li>
                        <li>Returns & Refunds</li>
                    </ul>
                </div>
                <div className="box">
                    <h2>Contact Us</h2>
                    <ul>
                        <li>80 Omar Afendi Shebeen ElKowm , Menofia , Egypt</li>
                        <li>Email: ahmedkamel555556@gmail.com</li>
                        <li>Phone: +(20) 01030853607</li>
                    </ul>
                </div>
            </div>
        </footer>
    </>
}

export default Footer