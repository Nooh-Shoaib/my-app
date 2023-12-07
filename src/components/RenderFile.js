import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DynamicRouteComponent from '../pages/DynamicRouteComponent';
import AllProducts from '../pages/AllProducts';

function RenderFile() {
        const [renderedComponent, setRenderedComponent] = useState(null);
        const { slug } = useParams();

        useEffect(() => {
                const fetchData = async () => {
                        try {
                                console.log('Fetching data for slug:', slug);

                                if (slug === 'small-pillow-boxes' || slug === 'kraft-cereal-boxes') {
                                        console.log('Rendering DynamicRouteComponent...');
                                        setRenderedComponent(<DynamicRouteComponent />);
                                } else if (slug === 'products-all' || slug === 'cbd-packaging') {
                                        console.log('Rendering AllProducts component...');
                                        setRenderedComponent(<AllProducts />);
                                } else {
                                        console.error(`Unknown route: ${slug}`);
                                        window.location.href = '/';
                                }
                        } catch (error) {
                                console.error('Error rendering components:', error.message);
                                setRenderedComponent(null);
                        }
                };

                fetchData();
        }, [slug]);

        console.log('Rendered Component:', renderedComponent);

        return <div>{renderedComponent}</div>;
}

export default RenderFile;
