import React from 'react'
import "./AllItem.css"
import data_products from "../Assets/data.js"
import Item from '../Item/item'
import 'bootstrap/dist/css/bootstrap.min.css';
    

function AllItems() {
    return (
        <>
         <div className="popular ">
            <h1 className='titletext' style={{color:"black"}}>Popular Products</h1>
            <div className='popular-item'>
                {data_products.map((item,i)=>   {
                    return <Item key={i} id={item.id} name={item.name} img={item.image} price={item.price}/>  
                })}
            </div>
        </div> 
        </>
    )
}

export default AllItems
