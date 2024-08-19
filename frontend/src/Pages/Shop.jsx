import 'bootstrap/dist/css/bootstrap.min.css';
import "./Shop.css"

import React, { useState } from 'react';
import FilterBar from '../Components/filter/FilterBar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import p1_img from "../Components/Assets/item1.png"
import p2_img from "../Components/Assets/item2.png"
import p3_img from "../Components/Assets/item3.png"
import p4_img from "../Components/Assets/item4.png"
import p5_img from "../Components/Assets/item5.png"
import p6_img from "../Components/Assets/item6.png"
import p7_img from "../Components/Assets/item7.png"
import p8_img from "../Components/Assets/item8.png"

const initialProducts = [
    { id: 1,image: p1_img , name: 'Liquid Cooling System', type: 'pc-components', price: 100 },
    { id: 2,image: p2_img , name: 'SSD - 1TB', type: 'pc-components', price: 100 },
    { id: 3,image: p3_img , name: 'Graphics Card - 8GB', type: 'pc-components', price: 500 },
    { id: 4,image: p4_img , name: 'Gaming Headset with Mic', type: 'gaming-peripherals', price: 60   },
    { id: 5,image: p5_img , name: 'Wireless Gaming Mouse', type: 'gaming-peripherals', price: 50 },
    { id: 6,image: p6_img , name: 'Mechanical Gaming Keyboard', type: 'aming-peripherals', price: 120 },
    { id: 7,image: p7_img , name: 'Workstation Pro PC', type: 'custom-pcs', price: 1400 },
    { id: 8,image: p8_img , name: 'Gaming Beast PC', type: 'custom-pcs', price: 2000 }
];
//custom-pcs
//pc-components
//gaming-peripherals


function Shop() {
    const [filters, setFilters] = useState({});
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
        <div className="container" style={{margin:"4rem"}}>
            <div className="row">
                <div className="col-md-3">
                    <FilterBar onFilter={handleFilter} />
                </div>
                <div className="col-md-9">
                    <h2 className='subtext' style={{fontWeight:"bold"}}>All Products</h2>
                    <div className="product-grid">
                        {products.map((product) => (
                            <div key={product.id} className="product-card">
                                <img className='product-image' src={product.image} alt="" />
                                
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
