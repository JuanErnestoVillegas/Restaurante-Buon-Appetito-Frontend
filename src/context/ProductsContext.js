import { createContext, useState } from "react"
import axiosClient from "../config/axiosClient";


export const ProductsContext = createContext();

const ProductsProvider = ({children}) => {

    const [products] = useState ([]);
    
    return ( 
        <ProductsContext.Provider value={{
            products,
            
        }}>

            {children}

        </ProductsContext.Provider>
     );
}
 
export default ProductsProvider;

