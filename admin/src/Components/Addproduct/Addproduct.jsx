import React, { useRef } from 'react';
import "./Addproduct.css"
import { MdUpload } from "react-icons/md";
import uploadimg from "../../assets/upload.png"


function Addproduct() {
    const fileInputRef = useRef(null);

  // Function to handle image click and trigger file input click
  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  // Function to handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log('Selected file:', file.name);
      // You can now handle the file (e.g., upload it or display it)
    }
  };
    
    return (
        <div className="addproduct">
            <div className="addproduct-itemfield">
            <p>
                Product-title
            </p>
            <input type="text" name="name" id="" placeholder='typehere' />
            </div>
            <div className="addproduct-price">
                <div className="addproduct-itemfield">
                    <p> price</p>
                    <input type="text" name="price" id="" placeholder='typehere' />
                </div>
                </div>
                <div className="addproduct-itemfield">
                    <p> Product Catagory</p>
                    <select name="category" className='addproduct-selector' id="">

                        <option value="pc-components">pc-components</option>
                        <option value="gaming-peripherals">gaming-peripherals</option>
                        <option value="custom-pcs">custom-pcs</option>

                    </select>
                </div>
                <div className="addproduct-itemfield">
                    {/* <label htmlFor="file-input">
                    <MdUpload className='upload' />
                    <img src={uploadimg} alt="" />
                    </label>
                    <input type='file' name='image' id='fileinput' /> */}
                    <label htmlFor="file-input">
                    <img className='upload' src={uploadimg} alt="" onClick={handleImageClick} />
                    <input type="file" ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileChange} />
                    </label>
                </div>
                <button className='addproduct-button'>add</button>
        </div>
        
    )
}

export default Addproduct
