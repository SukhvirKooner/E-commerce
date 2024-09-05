import 'bootstrap/dist/css/bootstrap.min.css';
import "./CSS/Shop.css"
import {Link} from "react-router-dom";
import React, { useState } from 'react';
import FilterBar from '../Components/filter/FilterBar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import initialProducts from '../Components/Assets/data.js';






function Shop() {
    const [filter, setFilters] = useState({});
    const [products, setProducts] = useState(initialProducts);

    const handleFilter = (filters) => {
        setFilters(filters);

        const filteredProducts = initialProducts.filter((product) => {
            const typeMatch = filters.selectedTypes.length === 0 || filters.selectedTypes.includes(product.type);
            const priceMatch = product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1];
            return typeMatch && priceMatch;
        });

        setProducts(filteredProducts);
    };

    return (
        <div className="container"  style={{margin:"4rem"}}>
            <div className="row1">
                <div className="col1">
                    <FilterBar onFilter={handleFilter} />
                </div>
                <div className="col2">
                    <h2 className='subtext' style={{fontWeight:"bold"}}>All Products</h2>
                    <div className="product-grid">
                        {products.map((product) => (
                            <div key={product.id} className="product-card">
                              <Link to={`/product/${product.id}`}>   <img className='product-image' src={product.image} alt="" /> </Link>
                                
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
