import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import RenderFile from './components/RenderFile';
import Portfolio from "./pages/DynamicPortfolio";
import Blogs from "./pages/Blogs";
import ContactUs from "./pages/ContactUs";
import AboutUs from './pages/AboutUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import NoPage from "./pages/NoPage";
import DynamicRouteComponent from './pages/DynamicRouteComponent';


function App() {

  return (

    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route path="/products/:any_slug" element={<RenderFile />} /> */}
        <Route path="/:id" element={<DynamicRouteComponent />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsAndConditions />} />
        <Route exact path="/portfolio" element={<Portfolio />} />
        <Route exact path="/contact-us" element={<ContactUs />} />
        <Route exact path="/blogs" element={<Blogs />} />
        <Route exact path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
}

export default App;