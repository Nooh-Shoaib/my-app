import React from "react";
import { Link } from "react-router-dom";
import Layout from "../layout";
import Quote from "./2ndpageComponents/beatQuote";
import { TabTitle } from "./utils/GeneralFunction";




const pageTitle = "Custom Hang Tags";
const homeLink = "/";
const banner = "https://s3.amazonaws.com/sireprinting.com/categories/1669765725Custom%20Hang%20Tags%20Sire%20Printing.jpg";
const linkLabel = "Home";
const Label = "Custom Hang Tags";



const CustomHangTags = () => {
        const siteTitle = 'Custom Hang Tags | Clothing, Products and Gift Tags | Sire Printing';
        TabTitle(siteTitle)
        return (
                <>
                        <Layout>
                                <div className="bg-white">
                                        <img src={banner} alt="" className="w-full" />
                                       <h2 className="bg-slate-200 h-12 flex items-center">
                                                <Link to={homeLink} className="mx-7 font-semibold"> {/* Use Link for internal navigation */}
                                                        {linkLabel}
                                                </Link>
                                                <span className="text-xs">&raquo;&nbsp;&nbsp;</span>
                                                <span className="text-amber-500 font-semibold">
                                                        <em>{Label}</em>
                                                </span>
                                       </h2>
                                        <div className="py-24">
                                               <h2 className="flex justify-center lg:mr-96 my-12 text-4xl font-semibold">
                                                        {pageTitle}
                                               </h2>
                                                <div className="">
                                                        <Quote />
                                                </div>
                                        </div>
                                </div>
                        </Layout>
                </>
        );
};

export default CustomHangTags;
