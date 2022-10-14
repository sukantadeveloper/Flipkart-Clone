import { createContext, useState } from "react";



export const CartContext = createContext();




const CartContextProvider = ( {children} )=>{
    
    
    const [cartData, SetCartData] = useState([]);

    const [globalAddress, setGlobalAddress] = useState({})


return <CartContext.Provider value={{ cartData, SetCartData, globalAddress, setGlobalAddress }} >
    {children}
</CartContext.Provider>

}


export default CartContextProvider;