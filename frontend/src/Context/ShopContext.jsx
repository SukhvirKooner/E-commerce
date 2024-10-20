import {React,createContext, useEffect, useState} from 'react';

export const ShopContext = createContext(null);
const getDefaultCart = () =>{
    let cart = {};
    for (let index = 0; index < 300+1; index++) {
        cart[index] = 0;
    }
    return cart;
}
const ShopContextProvider = (props)=> {

    const [all_products,setAll_Products]= useState([]) ;
    useEffect(()=>{
        fetch('https://cyberforge1.onrender.com/allproducts')
        .then((response)=>response.json())
        .then((data)=>setAll_Products(data))
        if(localStorage.getItem('auth-token')){
            fetch('https://cyberforge1.onrender.com/getcart',{
            method:"POST",
            headers:{
                Accept:"application/form",
                'auth-token':`${localStorage.getItem('auth-token')}`,
                "Content-Type":'application/json',
            }    ,
            body:'',

            }).then((response)=>response.json())
            .then((data)=>setCartItems(data));

        }
    },[])



    const [cartItems , setCartItems ] = useState(getDefaultCart());
    
    
    const addToCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        if(localStorage.getItem('auth-token')){
              fetch('https://cyberforge1.onrender.com/addtocart',{
                method:"POST",
                headers:{
                    Accept:"application/form-data",
                    "auth-token":`${localStorage.getItem('auth-token')}`,
                    "Content-Type":"application/json",
                },
                body: JSON.stringify({"itemId":itemId}),
              })
              .then((response)=>{response.json()})
              .then((data)=>{console.log(data)});
        }else{
            console.log("error h");
            
        }
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        if(localStorage.getItem('auth-token')){
            fetch('https://cyberforge1.onrender.com/removefromcart',{
                method:"POST",
                headers:{
                    Accept:"application/form-data",
                    "auth-token":`${localStorage.getItem('auth-token')}`,
                    "Content-Type":"application/json",
                },
                body: JSON.stringify({"itemId":itemId}),
              })
              .then((response)=>{response.json()})
              .then((data)=>{console.log(data,"done done")});
        }
    }
    const getTotalCartAmount = () =>{
        let totalAmount =0;
        for(const item in cartItems){
            if (cartItems[item]>0){
                let itemInfo = all_products.find((product)=>product.id===Number(item));
                totalAmount += itemInfo.price * cartItems[item];
            }
            
        }
            return totalAmount;
    }

    const contextValue ={all_products,cartItems,addToCart,removeFromCart,getTotalCartAmount};
    return(
        <ShopContext.Provider value={contextValue}>

            {props.children}

        </ShopContext.Provider> 
    )
}
export default ShopContextProvider;

