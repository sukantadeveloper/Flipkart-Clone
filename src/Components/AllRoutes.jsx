import { Box } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CartPage from './Cart/CartPage'
import ConsratsPage from './Cart/CongratsPage'
import DeliveryPage from './Cart/DeliveryPage'
import OtpPgae from './Cart/OtpPage'
import PaymentPage from './Cart/PayemntPage'
import Summary from './Cart/Summary'
import PrivateRoutes from './Context/PrivateRoutes'
import NotFound from './Error/NotFound'
import Home from './Home/Home'
import { Login } from './Login/Login'
import { Signup } from './Login/SignUp'
import OrderPage from './OrderPage/OrderPage'
import Products from './Products.jsx/Products'
import Viewpage from './ProductsView.jsx/Viewpage'

const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/products/:category_name' element={<Products />} />
                <Route path='/products' element={<Products />} />
                <Route path='/products/view/:item_id' element={<Viewpage />} />
                <Route path='/cart' element={<CartPage />} />
                <Route path="/delivery" element={
                    <PrivateRoutes>
                        <DeliveryPage />
                    </PrivateRoutes>
                } />
                <Route path="/summary" element={<Summary />} />
                <Route path="/payment" element={
                    <PrivateRoutes>
                        <PaymentPage />
                    </PrivateRoutes>
                } />
                <Route path="/otp" element={
                    <OtpPgae />
                } />
                <Route path="/congo" element={
                    <ConsratsPage />
                } />
                <Route path='/orderpage' element={
                    <PrivateRoutes>
                        <OrderPage />
                    </PrivateRoutes>
                } />
                <Route path='/signup' element={

                    <Signup />

                } />
                <Route path='/login' element={

                    <Login />

                } />


                <Route path='*' element={<NotFound />}>

                </Route>
            </Routes>

        </>
    )
}

export default AllRoutes