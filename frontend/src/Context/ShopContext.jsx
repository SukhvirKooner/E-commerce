import {React,createContext} from 'react';
import initialProducts from '../Components/Assets/data';
export const ShopContext = createContext(null);
const ShopContextProvider = (props)=> {
    const contextValue ={initialProducts};
    return(
        <ShopContext.Provider value={contextValue}>

            {props.children}

        </ShopContext.Provider> 
    )
}
export default ShopContextProvider;

