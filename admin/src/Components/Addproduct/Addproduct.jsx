import React, { useRef, useState } from 'react';
import "./Addproduct.css";
import uploadimg from "../../assets/upload.png";

function Addproduct() {
    const fileInputRef = useRef(null);
    const [image, setImage] = useState(false);
    const [productDetails, setProductDetails] = useState({
        name: "",
        image: "",
        type: "",
        price: ""
    });

    // Function to handle image click and trigger file input click
    const handleImageClick = () => {
        fileInputRef.current.click();
    };

    // Function to handle file selection
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            console.log('Selected file:', file.name);
        }
    };

    const imageHandler = (e) => {
        setImage(e.target.files[0]);
    };

    const changeHandler = (e) => {
        setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
    };

    const addProduct = async () => {
        console.log(productDetails);
        let responseData;
        let product = productDetails;
        let formData = new FormData();

        formData.append("product", image);

        await fetch('https://cyberforge1.onrender.com/upload', {
            method: "POST",
            headers: {
                Accept: 'application/json',
            },
            body: formData,
        }).then((resp) => resp.json()).then((data) => { responseData = data; });

        if (responseData.success) {
            product.image = responseData.image_url;

            console.log(product);
            await fetch('https://cyberforge1.onrender.com/addproduct', {
                method: "POST",
                headers: {
                    Accept: 'application/json',
                    "content-Type": 'application/json',
                },
                body: JSON.stringify(product),
            }).then((resp) => resp.json()).then((data) => {
                if (data.success) {
                    alert('Product Added');

                    // Clear inputs after successful submission
                    setProductDetails({
                        name: "",
                        image: "",
                        type: "", // Reset select field to default value
                        price: ""
                    });
                    setImage(false); // Reset image field to default
                } else {
                    alert("Failed to add product");
                }
            });
        }
    };

    return (
        <div className="addproduct">
            <div className="addproduct-itemfield">
                <p>Product-title</p>
                <input
                    value={productDetails.name}
                    onChange={changeHandler}
                    type="text"
                    name="name"
                    placeholder="Type here"
                />
            </div>
            <div className="addproduct-price">
                <div className="addproduct-itemfield">
                    <p>Price</p>
                    <input
                        value={productDetails.price}
                        onChange={changeHandler}
                        type="text"
                        name="price"
                        placeholder="Type here"
                    />
                </div>
            </div>
            <div className="addproduct-itemfield">
                <p>Product Category</p>
                <select
                    value={productDetails.type}
                    onChange={changeHandler}
                    name="type"
                    className="addproduct-selector"
                >
                    <option value="">Select</option> {/* Set default empty value */}
                    <option value="pc-components">PC Components</option>
                    <option value="gaming-peripherals">Gaming Peripherals</option>
                    <option value="custom-pcs">Custom PCs</option>
                </select>
            </div>
            <div className="addproduct-itemfield">
                <label htmlFor="file-input">
                    <img
                        className="upload"
                        src={image ? URL.createObjectURL(image) : uploadimg}
                        alt=""
                        onClick={handleImageClick}
                    />
                    <input
                        type="file"
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                        onChange={(x) => {
                            handleFileChange(x);
                            imageHandler(x);
                        }}
                    />
                </label>
            </div>
            <button onClick={addProduct} className="addproduct-button">
                Add
            </button>
        </div>
    );
}

export default Addproduct;
