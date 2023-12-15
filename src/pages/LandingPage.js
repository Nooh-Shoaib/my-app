import React, { useState, useEffect } from 'react';
import Testimonials from "../components/Testimonials";
import ReviewSection from "../components/ReviewSection";
import ImageGallery from "../components/ImageGallery";
import HowWork from "../components/HowWork";
import AutoImageSlider from "../components/Herosection";
import FAQSection from "../components/FAQSection";
import Layout from "../components/layout";
import LoadingComponent from './LoadingIndicator';
import { Helmet } from 'react-helmet';

const LandingPage = () => {
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
                                                        <ImageGallery heading="Enjoy Sireprinting" str="PERKS" />
                                                </div>
                                                <ReviewSection />
                                                <div className="bg-white">
                                                        <FAQSection heading="Frequently Asked Questions" />
                                                        <Testimonials heading="Testimonials" />
                                                </div>

                                        </>
                                )}
                        </Layout>
                </>
        );
};

export default LandingPage;
