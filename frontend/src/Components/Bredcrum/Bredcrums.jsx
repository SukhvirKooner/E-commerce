import React from 'react'
import "./bredcrums.css"
import { IoIosArrowForward } from "react-icons/io";
const Bredcrums = (props)=> {
     const {product} = props ; 
    

    return (
        <div className="bredcrum subtext">
            Home <IoIosArrowForward />  Shop <IoIosArrowForward /> {product.type}   <IoIosArrowForward /> {product.name}
        </div>
    )
}

export default Bredcrums
