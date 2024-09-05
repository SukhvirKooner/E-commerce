import React from 'react'
import "./Sidebar.css"
import {Link} from "react-router-dom"
import { MdAddShoppingCart } from "react-icons/md";
import { IoIosList } from "react-icons/io";
function Sidebar() {
    return (
        <div className="sidebar">
            <Link to={'/addproduct'} style={{ textDecoration: 'none' }}  >
            <div className="sidebar-item">
            <MdAddShoppingCart color='black'  />
            <p  style={{color:"black"}}>Add Product</p>
            </div>
            </Link>
            <Link to={'/listproduct'}  style={{ textDecoration: 'none' }} >
            <div className="sidebar-item">
            <IoIosList color='black'  />
            <p  style={{color:"black"}}>Product List</p>
            </div>
            </Link>
        </div>
    )
}

export default Sidebar
