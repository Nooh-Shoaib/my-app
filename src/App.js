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
import DynamicRouteComponent from "./pages/DynamicRouteComponent";
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
import JSON from "./pages/json";


function App() {

  return (

    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/:slug" element={<DynamicRouteComponent />} />
        <Route path="/DynamicPortfolio" element={<Portfolio />} />
        <Route path="/json" element={<JSON />} />
        <Route exact path="/AllProducts" element={<AllProducts />} />
        <Route exact path="/CBDPackaging" element={<CBDPackaging />} />
        <Route exact path="/CustomRetailPackaging" element={<CustomRetailPackaging />} />
        <Route exact path="/RigidBoxes" element={<RigidBoxes />} />
        <Route exact path="/CustomHangTags" element={<CustomHangTags />} />
        <Route exact path="/SoapPackagingBoxes" element={<SoapPackagingBoxes />} />
        <Route exact path="/CustomPackagingBoxes" element={<CustomPackagingBoxes />} />
        <Route exact path="/EcoFriendly" element={<EcoFriendly />} />
        <Route exact path="/WovenEmbroideredPatches" element={<WovenEmbroideredPatches />} />
        <Route exact path="/CustomMedicinePackaging" element={<CustomMedicinePackaging />} />
        <Route exact path="/CorrugatedBoxes" element={<CorrugatedBoxes />} />
        <Route exact path="/KraftPaperBoxes" element={<KraftPaperBoxes />} />
        <Route exact path="/CustomDisplayBoxes" element={<CustomDisplayBoxes />} />
        <Route exact path="/CustomMailerBoxes" element={<CustomMailerBoxes />} />
        <Route exact path="/FoodPackaging" element={<FoodPackaging />} />
        <Route exact path="/CosmeticPackagingBoxes" element={<CosmeticPackagingBoxes />} />
        <Route exact path="/CustomPillowPackagingBoxes" element={<CustomPillowPackagingBoxes />} />
        <Route exact path="/GiftPackagingBoxes" element={<GiftPackagingBoxes />} />
        <Route exact path="/CustomBoxStyles" element={<CustomBoxStyles />} />
        <Route exact path="/CustomStickers" element={<CustomStickers />} />
        <Route exact path="/ChristmasBoxes" element={<ChristmasBoxes />} />
        <Route exact path="/about-us" element={<AboutUs />} />
        <Route exact path="/ContactUs" element={<ContactUs />} />
        <Route exact path="/Blogs" element={<Blogs />} />
        <Route exact path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route exact path="/TermsAndConditions" element={<TermsAndConditions />} />
        <Route exact path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
}

export default App;