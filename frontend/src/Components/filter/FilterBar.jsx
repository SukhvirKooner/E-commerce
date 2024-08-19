// src/FilterBar.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FilterBar.css'; // Optional for additional styling

const FilterBar = ({ onFilter }) => {
    const [selectedTypes, setSelectedTypes] = useState([]);
    const [priceRange, setPriceRange] = useState([80, 2200]);

    const handleTypeChange = (event) => {
        const value = event.target.value;
        setSelectedTypes((prevTypes) =>
            prevTypes.includes(value)
                ? prevTypes.filter((type) => type !== value)
                : [...prevTypes, value]
        );
    };

    const handlePriceChange = (event) => {
        const { name, value } = event.target;
        setPriceRange((prevPrice) => ({
            ...prevPrice,
            [name]: parseInt(value, 10),
        }));
    };

    const applyFilters = () => {
        onFilter({ selectedTypes, priceRange });
    };

    return (
        <div className="filter-bar">
            <h5 className='subtext'>Browse by</h5>
            <ul className="list-unstyled">
                <li className='subtext'><a href="#">All Products</a></li>
                <li className='subtext'><a href="#">Custom PCs</a></li>
                <li className='subtext'><a href="#">Gaming Peripherals</a></li>
                <li className='subtext'><a href="#">PC Components</a></li>
            </ul>
            <h5 className='subtext'>Filter by</h5>
            <div className="filter-section">
                <h6 className='subtext'>Product Type</h6>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        value="custom-pcs"
                        onChange={handleTypeChange}
                        id="custom-pcs"
                    />
                    <label  className="form-check-label subtext" htmlFor="custom-pcs">
                        Custom PCs
                    </label>
                </div>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        value="gaming-peripherals"
                        onChange={handleTypeChange}
                        id="gaming-peripherals"
                    />
                    <label className="form-check-label subtext" htmlFor="gaming-peripherals">
                        Gaming Peripherals
                    </label>
                </div>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        value="pc-components"
                        onChange={handleTypeChange}
                        id="pc-components"
                    />
                    <label className="form-check-label subtext" htmlFor="pc-components">
                        PC Components
                    </label>
                </div>
            </div>
            <div className="filter-section mt-3">
                <h6 className='subtext'>Price</h6>
                <input
                    type="range"
                    className="form-range"
                    min="80"
                    max="2200"
                    value={priceRange[1]}
                    onChange={(e) =>
                        setPriceRange([priceRange[0], parseInt(e.target.value, 10)])
                    }
                />
                <div className="d-flex justify-content-between mt-2">
                    <span className='subtext'>₹{priceRange[0]}.00</span>
                    <span className='subtext'>₹{priceRange[1]}.00</span>
                </div>
            </div>
            <button className="pricebtn btn btn-outline-dark btn-lg subtext " onClick={applyFilters}>
                Apply Filters
            </button>
        </div>
    );
};

export default FilterBar;
