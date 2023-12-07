import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import CustomBoxStyles from "./pages/CustomBoxStyles";
// import DynamicRouteComponent from "./pages/DynamicRouteComponent";
import Portfolio from "./pages/DynamicPortfolio";
import Blogs from "./pages/Blogs";
import ContactUs from "./pages/ContactUs";
// import LegalPages from './pages/LegalPages';
import NoPage from "./pages/NoPage";
// import AllProducts from './pages/AllProducts';
import RenderFile from './components/RenderFile';
import AboutUs from './pages/AboutUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';




function App() {

  return (

    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/:slug" element={<RenderFile />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsAndConditions />} />
        {/* <Route path="/:slug" element={<AllProducts />} />
        <Route path="/:slug" element={<DynamicRouteComponent />} /> */}
        <Route exact path="/portfolio" element={<Portfolio />} />
        <Route exact path="/custom-box-styles" element={<CustomBoxStyles />} />
        <Route exact path="/contact-us" element={<ContactUs />} />
        <Route exact path="/blogs" element={<Blogs />} />
        <Route exact path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
}

export default App;