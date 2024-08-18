import React from 'react'
import "./item.css"
function Item(props) {
    return (
        <div class="col-lg-4 col-md-6 mb-4 ">
                <div class="card">
                <img class="card-img-top" src={card1} alt="Card image cap"/>
                <div class="card-body d-grid gap-2">
                    
                <button  class="pricebtn btn btn-outline-light btn-lg subtext" type="button"> <p>Liquid Cooling System  </p> <p>$150.00</p></button>
                </div>
                </div>  
            </div>
    )
}

export default Item
