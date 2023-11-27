import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DynamicRouteComponent from './DynamicRouteComponent';
import NavbarRoute from './NavbarRoute';

const CombinedRoutes = () => {
  return (
    <Routes>
      <Route path="/DynamicRouteComponents" element={<DynamicRouteComponent />} />
      <Route path="/NavbarRoute" element={<NavbarRoute />} />
    </Routes>
  );
};

export default CombinedRoutes;