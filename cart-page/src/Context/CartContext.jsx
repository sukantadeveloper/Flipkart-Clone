import { createContext, useState } from "react";



export const CartContext = createContext();




const CartContextProvider = ( {children} )=>{
    
    
    const [cartData, SetCartData] = useState([]);


return <CartContext.Provider value={{ cartData, SetCartData }} >
    {children}
</CartContext.Provider>

}


export default CartContextProvider;