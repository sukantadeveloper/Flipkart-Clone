import Appliances from "./Components/Appliances";
import Bestselling from "./Components/Bestselling";
import Electronics from "./Components/Electronics";
import Fashion from "./Components/Fashion";
import FinalBanner from "./Components/FinalBanner";
import Groceries from "./Components/Groceries";
import Mobile from "./Components/Mobile";
import TopOffers from "./Components/TopOffers";
import Footer from "./Components/Footer";
import BeforeFooter from "./Components/BeforeFooter";

function App() {
  const containerStyles = {
    width: "100%",
    height: "280px",
    margin: "0 auto",
  };
  return (
    <div className="App">
       <FinalBanner/>
      <Fashion/>
      <Bestselling/> 
     <Appliances/> 
      <TopOffers />
      <Electronics />
     <Groceries/>
      <Mobile />
      <BeforeFooter/>
    <Footer/>
    </div>
  );
}

export default App;
