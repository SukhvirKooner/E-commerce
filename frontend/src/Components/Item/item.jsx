import React from 'react'
import "./Item.css"

function Item(props) {
    return (
        <div className=" mb-4 ">
                <div className="item">
                 <img className="card-img-top" src={props.img} alt="Card image cap"/> 
                <div className="card-body d-grid gap-2">
                <button  className="pricebtn btn btn-lg subtext" type="button"> <p>{props.name}</p> <p>${props.price}</p></button>
                </div>
                </div>  
            </div>
    )
}

export default Item
