import { Route, Routes } from "react-router-dom";
import CartPage from "./CartPage";
import ConsratsPage from "./CongratsPage";
import DeliveryPage from "./DeliveryPage";
import OtpPgae from "./OtpPage";
import PaymentPage from "./PayemntPage";
import Summary from "./Summary";



function AllRoutes(){

return <Routes>

<Route path="/cart" element={<CartPage/>} ></Route>
<Route  path="/delivery" element={<DeliveryPage/>}  >  </Route>
<Route  path="/summary" element={<Summary/>}  >  </Route>
<Route  path="/payment" element={<PaymentPage/>}  >  </Route>
<Route  path="/otp" element={<OtpPgae/>}  >  </Route>
<Route  path="/congo" element={<ConsratsPage/>}  >  </Route>

</Routes>





}


export default AllRoutes;