import React from 'react'

const Head = () => {
    return <>
        <section className="head">
            <div className="container d_flex">
                <div className="left row">
                    <i className="fa fa-solid fa-phone"></i>
                    <label>(+20) 10 308 3607</label>
                    <i className='fa fa-envelope'></i>
                    <label>Ahmed@gmail.com</label>
                </div>
                <div className="right row RText">
                    <label>Theme FAQ's</label>
                    <label>Need Helps</label>
                    <span>🎴</span>
                    <label>EN</label>
                    <span>🎴</span>
                    <label>USD</label>
                </div>
            </div>
        </section>
    </>
}

export default Head