import React from 'react';
import DynamicRouteComponent from '../pages/DynamicRouteComponent';

const MyRepos = () => {
        const Repos = [
                'products/products',
                'otherproducts/products',
                'remainingproducts/products',
                'fourthproducts/products',
                'fifthproducts/products',
                'sixthproducts/products',
                'seventhproducts/products',
        ];

        return <DynamicRouteComponent repositories={Repos} />;
};

export default MyRepos;
