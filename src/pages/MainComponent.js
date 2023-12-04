import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DynamicRouteComponent from './DynamicRouteComponent';
import AllProducts from './AllProducts';

const MainComponent = () => {
  return (
    <Routes>
      <Route path="/AllProducts" component={<AllProducts />} />
      <Route path="/:slug/*" element={<DynamicRouteComponent />} />
          </Routes>
  );
};

export default MainComponent;
