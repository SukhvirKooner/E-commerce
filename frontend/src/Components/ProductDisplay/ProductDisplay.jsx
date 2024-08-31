import React from 'react'

import "./ProductDisplay.css"
function ProductDisplay(props) {
    const {product} = props;

    return (
        <div className="product-page">
            <div className="product-image">
                <img style={{borderRadius:0}} src={product.image} alt="SSD" />
            </div>
            <div className="product-details subtext">
                <h1>{product.name}</h1>
                <p className="price">${product.price}</p>
                <div className="quantity">
                    <label>Quantity</label>
                    <input type="number" min="1" defaultValue="1" />
                </div>
                <button className="add-to-cart">Add to Cart</button>
                <div className="social-icons">
                    <a href="#"><i className="fab fa-whatsapp"></i></a>
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-pinterest"></i></a>
                </div>
            </div>
        </div>
    )
}

export default ProductDisplay

