import React from 'react';
import Testimonials from "../components/Testimonials";
import BoxReviews from "../components/BoxReviews";
import Images from "../components/Images";
import HowWork from "../components/HowWork";
import AutoImageSlider from "../components/Herosection";
import FAQS from "../components/FAQS";
import Layout from "../layout";
import { TabTitle } from "./utils/GeneralFunction";
import Icons from "../components/Icons";

const Home = () => {
TabTitle('Custom Packaging Boxes Wholesale | Printed Boxes With Logo | sireprinting')

        return (

                <Layout>

                        <div className="slider-container">
                                <AutoImageSlider />
                        </div>
                        <div className="bg-gray-100 py-12">
                                <HowWork />

                        </div>
                        <Icons />
                        <div className="bg-white">
                                <Images heading="Enjoy Sireprinting" str="PERKS" />
                        </div>
                        <BoxReviews />
                        <div className="bg-white">
                                <FAQS heading="Frequently Asked Questions" />
                                <Testimonials heading=" Testimonials" />
                        </div>
                </Layout>


        );
}

export default Home;