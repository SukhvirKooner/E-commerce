import React, { useContext } from 'react'
import "./CartItems.css"
import { ShopContext } from '../../Context/ShopContext'
import { RxCross2 } from "react-icons/rx";
function CartItems() {
    const {initialProducts,cartItems,removeFromCart} = useContext(ShopContext);
    return (
        <div className="cartitems">
            <div style={{textAlign:"center"}} className=" subtext cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {initialProducts.map((e)=>{
                // cartItems[e.id]>0
                if(true){
                    return(<div>
                        <div style={{textAlign:"center"}} className=" subtext cartitems-format cartitems-format-main">
                        <img src={e.image} className='carticon-product-icon' alt="" />
                        <p>{e.name}</p>
                        <p>${e.price}</p>
                        <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                        <p>{e.price*cartItems[e.id]}</p>
                        <button onClick={()=>{removeFromCart(e.id)}} ><RxCross2 /></button>
                    </div>
                    <hr/>
                </div>
                );
                    
                }
            })}
            <div className="cartitems-down subtext">
                <div className="cartitems-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>${0}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping fee</p>
                            <p>free</p>

                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>${0}</h3>
                        </div>
                    </div>
                    <button>Proceed to checkout</button>
                </div>
                <div className="cartitems-promocode">
                    <p>If you have promo-code enter it here</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder='promocode' name="" id="" />
                        <button > Submit</button>
                    </div>
                </div>
            </div>
            
        </div>

    )
}

export default CartItems
