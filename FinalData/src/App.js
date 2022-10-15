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
import OfferBanner from "./Components/OfferBanner";
import BannerOffer from "./Components/BannerOffer";
import BannerOffer2 from "./Components/BannerOffer2";
import CategoryBar from "./Components/CategoryBar";
import CategoryBarForMobile from "./Components/CategoryBarForMobile";
function App() {
  return (
    <div className="App">
      <CategoryBar /> 
      <FinalBanner />
      <CategoryBarForMobile/>
      <OfferBanner />
      <BannerOffer />
      <Fashion />
      <Bestselling />
      <Appliances />
      <BannerOffer2 />
      <TopOffers />
      <Electronics />
      <Groceries />
      <Mobile />
      <BeforeFooter />
      <Footer />
    </div>
  );
}

export default App;
