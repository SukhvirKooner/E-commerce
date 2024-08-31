import {React,  useContext} from 'react';   
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Bredcrums from '../Components/Bredcrum/Bredcrums';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';

const Product = () =>{
    
    const {initialProducts}= useContext(ShopContext);
    const {productID} = useParams();
    const product = initialProducts.find((e)=> e.id === Number(productID));
     return (   
        <div>   
             <Bredcrums product={product}/>
             <ProductDisplay product={product}/>
        </div>
    )
}

export default Product
