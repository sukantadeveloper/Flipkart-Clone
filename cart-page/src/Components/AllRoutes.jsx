import { Route, Routes } from "react-router-dom";
import CartPage from "./CartPage";
import DeliveryPage from "./DeliveryPage";



function AllRoutes(){

return <Routes>

<Route path="/cart" element={<CartPage/>} ></Route>
<Route  path="/delivery" element={<DeliveryPage/>}  >  </Route>

</Routes>





}


export default AllRoutes;