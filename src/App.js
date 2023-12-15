import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LandingPage from "./pages/LandingPage";
import Portfolio from "./pages/Portfolio";
import Blogs from "./pages/ArticleCatalog";
import ContactUs from "./pages/ContactUs";
import AboutUs from './pages/AboutUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import Error404 from "./pages/Error404";
import Categories from './pages/categories';


function App() {

  return (

    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/:id" element={<Categories />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsAndConditions />} />
        <Route exact path="/portfolio" element={<Portfolio />} />
        <Route exact path="/contact-us" element={<ContactUs />} />
        <Route exact path="/blogs" element={<Blogs />} />
        <Route exact path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;