import './App.css';
import { Box, Heading } from '@chakra-ui/react';
import CartPage from './Components/CartPage';
import AllRoutes from './Components/AllRoutes';

function App() {
  return (
      <Box className="App" >
        {/* <CartPage/> */}
        <AllRoutes/>
      </Box>
  );
}

export default App;
