// import React from 'react';
// import DynamicRouteComponent from './DynamicRouteComponent';
// import NavbarRoute from './NavbarRoute';

// const CombinedRoutes = ({ navbarProduct = [], products = [] }) => {
//   console.log('Navbar Product:', navbarProduct);

//   if (navbarProduct.length === 0) {
//     console.log('Rendering DynamicRouteComponent');
//     return (
//       <>
//         {products && <DynamicRouteComponent />}
//       </>
//     );
//   } else {
//     console.log('Rendering NavbarRoute');
//     return (
//         <>
//         {/* AllProducts */}
//           {navbarProduct.length > 0 && <NavbarRoute />}
//         </>
//       );
//     }
//   };
//   export default CombinedRoutes;

import React from 'react';
import DynamicRouteComponent from './DynamicRouteComponent';
import AllProducts from './AllProducts';

const CombinedRoutes = () => {
  return (
    <div>
      <AllProducts />
      <DynamicRouteComponent />
    </div>
  );
};

export default CombinedRoutes;