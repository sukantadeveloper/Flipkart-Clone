import { Route, Routes } from "react-router-dom";
import CartPage from "./CartPage";
import DeliveryPage from "./DeliveryPage";
import Summary from "./Summary";



function AllRoutes(){

return <Routes>

<Route path="/cart" element={<CartPage/>} ></Route>
<Route  path="/delivery" element={<DeliveryPage/>}  >  </Route>
<Route  path="/summary" element={<Summary/>}  >  </Route>

</Routes>





}


export default AllRoutes;