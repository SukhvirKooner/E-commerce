import React from 'react'
import "./Item.css"

function Item(props) {
    return (
        <div class=" mb-4 ">
                <div class="item">
                 <img class="card-img-top" src={props.img} alt="Card image cap"/> 
                <div class="card-body d-grid gap-2">
                <button  class="pricebtn btn btn-lg subtext" type="button"> <p>{props.name}</p> <p>${props.price}</p></button>
                </div>
                </div>  
            </div>
    )
}

export default Item
