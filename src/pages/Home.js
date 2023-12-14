import React, { useState, useEffect } from 'react';
import Testimonials from "../components/Testimonials";
import BoxReviews from "../components/BoxReviews";
import Images from "../components/Images";
import HowWork from "../components/HowWork";
import AutoImageSlider from "../components/Herosection";
import FAQS from "../components/FAQS";
import Layout from "../components/layout";
import LoadingComponent from '../pages/loading';
import { Helmet } from 'react-helmet';

const Home = () => {
        const [loading, setLoading] = useState(true);

        useEffect(() => {
                const loadingTimeout = setTimeout(() => {
                        setLoading(false);
                }, 2000);

                return () => clearTimeout(loadingTimeout);
        }, []);

        return (
                <>
                        <Helmet>
                                <title>
                                        Custom Packaging Boxes Wholesale | Printed Boxes With Logo | sireprinting
                                </title>
                        </Helmet>
                        <Layout>
                                {loading ? (
                                        <LoadingComponent />
                                ) : (
                                        <>
                                                <div className="slider-container">
                                                        <AutoImageSlider />
                                                </div>
                                                <div className="bg-gray-100 py-12">
                                                        <HowWork />
                                                </div>
                                                <div className="bg-white">
                                                        <Images heading="Enjoy Sireprinting" str="PERKS" />
                                                </div>
                                                <BoxReviews />
                                                <div className="bg-white">
                                                        <FAQS heading="Frequently Asked Questions" />
                                                        <Testimonials heading="Testimonials" />
                                                </div>

                                        </>
                                )}
                        </Layout>
                </>
        );
};

export default Home;
