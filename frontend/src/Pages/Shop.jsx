import 'bootstrap/dist/css/bootstrap.min.css';
import "./CSS/Shop.css"
import {Link} from "react-router-dom";
import React, { useEffect, useState } from 'react';
import FilterBar from '../Components/filter/FilterBar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';







function Shop() {
    const [filter, setFilters] = useState({});

    const [all_products,setAll_Products]= useState([]) ;
    const [init_products,setInit_Products]= useState([]) ;

    useEffect(()=>{
        fetch('http://localhost:4000/allproducts')
        .then((response)=>response.json())
        .then((data)=>setInit_Products(data))
        
    },[])
    useEffect(()=>{
        fetch('http://localhost:4000/allproducts')
        .then((response)=>response.json())
        .then((data)=>setAll_Products(data))
        
    },[])
       
    
    

    const handleFilter = (filters) => {
        setFilters(filters);

        const filteredProducts = init_products.filter((product) => {
            const typeMatch = filters.selectedTypes.length === 0 || filters.selectedTypes.includes(product.type);
            const priceMatch = product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1];
            return typeMatch && priceMatch;
        });

        setAll_Products(filteredProducts);
    };

    return (
        <div className="container"  style={{margin:"4rem -1rem 0rem 4rem"}}>
            <div className="row1">
                <div className="col1">
                    <FilterBar onFilter={handleFilter} />
                </div>
                <div className="col2">
                    <h2 className='subtext' style={{fontWeight:"bold"}}>All Products</h2>
                    <div className="product-grid">
                        {all_products.map((product) => (
                            <div key={product.id} className="product-card">
                              <Link to={`/product/${product.id}`}>   <img onClick={window.scrollTo(0,0)} className='product-image' src={product.image} alt="" /> </Link>
                                
                                <h5 className='subtext'>{product.name}</h5>
                                <p className='subtext'> ${product.price}</p>
                                
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    
    );
}

export default Shop
