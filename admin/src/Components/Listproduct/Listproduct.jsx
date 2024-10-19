import React, { useEffect, useState } from 'react'
import "./Listproduct.css"
import { RxCross2 } from "react-icons/rx";
function Listproduct() {
    const [allproducts,setAllproducts] = useState([]);

    const fetchInfo = async ()=>{
        await fetch('https://cyberforge1.onrender.com/allproducts')
        .then((resp)=>resp.json())
        .then((data)=>{setAllproducts(data)});
    }
    useEffect(()=>{
        fetchInfo();

    },[]);
    const remove_product = async (id)=>{
        await fetch('https://cyberforge1.onrender.com/removeproduct',{
            method:"POST",
            headers:{
                Accept:"application/json",
                "content-type":"application/json",

            },
            body:JSON.stringify({id:id})
        })
         await fetchInfo();
    }
    return (
        <div className="listproducts subtext">
            <h1>All Product List</h1>
            <div className="listproduct-format-main">
                <p>Products</p>
                <p >Title</p>
                <p>Price</p>
                <p>Category</p>
                <p>Remove</p>
            </div>
            <div className="listproduct-allproduct">
                <hr />
                {allproducts.map((Product,index)=>{
                    return <><div key={index} className="listproduct-format-main listproduct-format">
                        <img src={Product.image} alt="" className="listproduct-product-icon" />
                        <p>{Product.name}</p>
                        <p>{Product.price}</p>
                        <p>{Product.type}</p>
                        <button onClick={()=>(remove_product(Product.id))}><RxCross2 /></button>
                    </div>
                    <hr />
                    </>
                })}
            </div>
        </div>
    )
}

export default Listproduct
