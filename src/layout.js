import React from 'react';
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Ham from "./components/HamMenu";
import Footer from "./components/Footer";


function Layout({ children }) {
  return (
    <div>
      <Topbar number="Call Us: (410) 834-9965" email="support@sireprinting.com" />
      <Navbar button="Get a Free Quote" />
      <Ham btnText="Get a Free Quote" />
     
      {children}
      <Footer heading1="Hot Selling Categories" heading2="Useful Links" />
    </div>
  );
}

export default Layout;