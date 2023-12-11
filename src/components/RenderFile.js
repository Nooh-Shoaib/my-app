import React from 'react';
import DynamicRouteComponent from '../pages/DynamicRouteComponent';
import AllProducts from '../pages/AllProducts';

const RenderFile = () => {
        const shouldRenderAllProducts = true;
        const shouldRenderDynamicComponent = true;

        const renderComponent = () => {
                if (shouldRenderAllProducts) {
                        return <AllProducts />;
                } else if (shouldRenderDynamicComponent) {
                        return <DynamicRouteComponent />;
                } else {
                        console.warn('Neither AllProducts nor DynamicRouteComponent is being rendered.');
                        return null;
                }
        };

        return (
                <div>
                        {renderComponent()}
                </div>
        );
};

export default RenderFile;


// import React from 'react';
// import DynamicRouteComponent from '../pages/DynamicRouteComponent';
// import AllProducts from '../pages/AllProducts';
// import { useParams } from 'react-router-dom';
// const RenderFile = () => {
//         const { any_slug } = useParams();
//         console.log('any_slug:', any_slug);

//         const isProject = slugIsProject(any_slug);
//         console.log('isProject:', isProject);

//         return !isProject ? <AllProducts slug={any_slug} /> : null;
// };

// const slugIsProject = (slug) => {
//         return slug.startsWith('project_');
// };

// export default RenderFile;

