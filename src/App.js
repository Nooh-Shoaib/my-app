import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AboutUs from "./pages/AboutUs";
import AllProducts from "./pages/AllProducts";
import Blogs from "./pages/Blogs";
import CBDPackaging from "./pages/CBDPackaging";
import ChristmasBoxes from "./pages/ChristmasBoxes";
import ContactUs from "./pages/ContactUs";
import CorrugatedBoxes from "./pages/CorrugatedBoxes";
import CosmeticPackagingBoxes from "./pages/CosmeticPackagingBoxes";
import CustomMedicinePackaging from "./pages/Custom Medicine Packaging";
import CustomRetailPackaging from "./pages/Custom Retail Packaging";
import CustomBoxStyles from "./pages/CustomBoxStyles";
import CustomDisplayBoxes from "./pages/CustomDisplayBoxes";
import CustomHangTags from "./pages/CustomHangTags";
import CustomMailerBoxes from "./pages/CustomMailerBoxes";
import CustomPackagingBoxes from "./pages/CustomPackagingBoxes";
import CustomPillowPackagingBoxes from "./pages/CustomPillowPackagingBoxes";
import CustomStickers from "./pages/CustomStickers";
// import DynamicRouteComponent from "./pages/DynamicRouteComponent";
// import NavbarRoute from "./pages/NavbarRoute";
import Portfolio from "./pages/DynamicPortfolio";
import EcoFriendly from "./pages/EcoFriendly";
import FoodPackaging from "./pages/FoodPackaging";
import GiftPackagingBoxes from "./pages/GiftPackagingBoxes";
import Home from "./pages/Home";
import KraftPaperBoxes from "./pages/KraftPaperBoxes";
import NoPage from "./pages/NoPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RigidBoxes from "./pages/RigidBoxes";
import SoapPackagingBoxes from "./pages/SoapPackagingBoxes";
import TermsAndConditions from "./pages/TermsAndConditions";
import WovenEmbroideredPatches from "./pages/Woven Embroidered Patches";
import CombinedRoutes from "./pages/CombinedRoutes";


function App() {

  return (

    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route path="/:slug" element={<DynamicRouteComponent />} /> */}
        {/* <Route path="/:slug" element={<NavbarRoute />} /> */}
        <Route path="/:slug" element={<CombinedRoutes />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route exact path="/all-products" element={<AllProducts />} />
        <Route exact path="/cbd-packaging" element={<CBDPackaging />} />
        <Route exact path="/custom-retail-packaging" element={<CustomRetailPackaging />} />
        <Route exact path="/rigid-boxes" element={<RigidBoxes />} />
        <Route exact path="/custom-hang-tags" element={<CustomHangTags />} />
        <Route exact path="/soap-packaging-boxes" element={<SoapPackagingBoxes />} />
        <Route exact path="/Custom-packaging-boxes" element={<CustomPackagingBoxes />} />
        <Route exact path="/eco-friendly" element={<EcoFriendly />} />
        <Route exact path="/woven-embroidered-patches" element={<WovenEmbroideredPatches />} />
        <Route exact path="/custom-medicine-packaging" element={<CustomMedicinePackaging />} />
        <Route exact path="/corrugated-boxes" element={<CorrugatedBoxes />} />
        <Route exact path="/kraft-paper-boxes" element={<KraftPaperBoxes />} />
        <Route exact path="/custom-display-boxes" element={<CustomDisplayBoxes />} />
        <Route exact path="/custom-mailer-boxes" element={<CustomMailerBoxes />} />
        <Route exact path="/food-packaging" element={<FoodPackaging />} />
        <Route exact path="/cosmetic-packaging-boxes" element={<CosmeticPackagingBoxes />} />
        <Route exact path="/custom-pillow-packaging-boxes" element={<CustomPillowPackagingBoxes />} />
        <Route exact path="/gift-packaging-boxes" element={<GiftPackagingBoxes />} />
        <Route exact path="/custom-box-styles" element={<CustomBoxStyles />} />
        <Route exact path="/custom-stickers" element={<CustomStickers />} />
        <Route exact path="/christmas-boxes" element={<ChristmasBoxes />} />
        <Route exact path="/about-us" element={<AboutUs />} />
        <Route exact path="/contact-us" element={<ContactUs />} />
        <Route exact path="/blogs" element={<Blogs />} />
        <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route exact path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route exact path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
}

export default App;