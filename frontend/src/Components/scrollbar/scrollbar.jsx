// src/CustomScrollbar.js
import React, { useState, useEffect } from 'react';
import './scrollbar.css';

const CustomScrollbar = ({ children }) => {
    const [isDarkBackground, setIsDarkBackground] = useState(false);

    useEffect(() => {
        // Logic to determine background color
        const backgroundColor = window.getComputedStyle(document.body, null).getPropertyValue('background-color');
        const isDark = isDarkColor(backgroundColor);
        setIsDarkBackground(isDark);
    }, []);

    // Function to determine if the color is dark
    const isDarkColor = (color) => {
        const rgb = color.match(/\d+/g);
        const [r, g, b] = rgb.map(Number);
        // Calculate luminance
        const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
        return luminance < 128;
    };

    return (
        <div className={`custom-scrollbar ${isDarkBackground ? 'dark-scrollbar' : 'light-scrollbar'}`}>
            {children}
        </div>
    );
};

export default CustomScrollbar;
