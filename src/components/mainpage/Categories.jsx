import React from 'react'

const Categories = () => {
    const data = [
        {
            categimg: "./images/category/cat1.png",
            categName: "Fashion",
        },
        {
            categimg: "./images/category/cat2.png",
            categName: "Electronic",
        },
        {
            categimg: "./images/category/cat3.png",
            categName: "Cars",
        },
        {
            categimg: "./images/category/cat4.png",
            categName: "Home & Garden",
        },
        {
            categimg: "./images/category/cat5.png",
            categName: "Gifts",
        },
        {
            categimg: "./images/category/cat6.png",
            categName: "Music",
        },
        {
            categimg: "./images/category/cat7.png",
            categName: "Health & Beauty",
        },
        {
            categimg: "./images/category/cat8.png",
            categName: "Pets",
        },
        {
            categimg: "./images/category/cat9.png",
            categName: "Baby Toys",
        },
        {
            categimg: "./images/category/cat10.png",
            categName: "Groceries",
        },
        {
            categimg: "./images/category/cat11.png",
            categName: "Books",
        },
    ]
    return <>
        <div className="category">
            {
                data.map((value,index)=> {
                    return (
                        <div className="box f_flex" key={index}>
                            <img src={value.categimg} alt=''/>
                            <span>{value.categName}</span>
                        </div>
                    )
                })
            }
        </div>
    </>
}

export default Categories