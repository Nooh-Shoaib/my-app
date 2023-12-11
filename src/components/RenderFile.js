// import React from 'react';
// import DynamicRouteComponent from '../pages/DynamicRouteComponent';
// import AllProducts from '../pages/AllProducts';

// const MyComponent = () => {
//         const shouldRenderDynamicComponent = true;
//         const shouldRenderAllProducts = true;

//         console.log('shouldRenderAllProducts:', shouldRenderAllProducts);
//         console.log('shouldRenderDynamicComponent:', shouldRenderDynamicComponent);

//         if (shouldRenderAllProducts) {
//                 return <AllProducts />;
//         } else if (shouldRenderDynamicComponent) {
//                 return <DynamicRouteComponent />;
//         } else {
//                 console.warn('Neither AllProducts nor DynamicRouteComponent is being rendered.');
//                 return null; // You can return a default component or null here
//         }
// };

// export default MyComponent;




// import React from 'react';
// import AllProducts from '../pages/AllProducts';
// import { useParams, Outlet, useRoutes } from 'react-router-dom';
// import DynamicRouteComponent from '../pages/DynamicRouteComponent';

// const RenderFile = () => {
//         const { any_slug } = useParams();
//         console.log('any_slug:', any_slug);

//         const isProject = any_slug && slugIsProject(any_slug);
//         console.log('isProject:', isProject);

//         const routes = useRoutes([
//                 {
//                         path: 'project_/:project_slug',
//                         element: <Outlet />,
//                         children: [
//                                 {
//                                         index: true,
//                                         element: <DynamicRouteComponent />,
//                                 },
//                         ],
//                 },
//                 {
//                         path: '/:any_slug',
//                         element: <AllProducts />,
//                 },
//         ]);

//         return <div>{routes}</div>;
// };

// const slugIsProject = (slug) => {
//         return slug.startsWith('project_');
// };



// export default RenderFile;

import React from 'react'
import AllProducts from '../pages/AllProducts';
import { useParams } from 'react-router-dom';
const RenderFile = () => {
        const { any_slug } = useParams();
        console.log('any_slug:', any_slug);

        const isProject = slugIsProject(any_slug);
        console.log('isProject:', isProject);

        return !isProject ? <AllProducts slug={any_slug} /> : null;
};

const slugIsProject = (slug) => {
        return slug.startsWith('project_');
};

export default RenderFile;




