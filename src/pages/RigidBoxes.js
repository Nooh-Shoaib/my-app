import React from "react";
import { Link } from "react-router-dom";
import Layout from "../layout";
import Quote from "./2ndpageComponents/beatQuote";
import { TabTitle } from "./utils/GeneralFunction";
let imagesArr = [
        {
                imageUrl:
                        " https://s3.amazonaws.com/sireprinting.com/products/1632928784Cell%20Phone%20Boxes%20Sire%20Printing%2001.png",
                label: " Cell Phone Boxes",
        },
        {
                imageUrl:
                        " https://s3.amazonaws.com/sireprinting.com/products/1632938297Collapsible%20Rigid%20Boxes%20Sire%20Printing%2001.png",
                label: "Collapsible Rigid Boxes ",
        },
        {
                imageUrl:
                        "https://s3.amazonaws.com/sireprinting.com/products/1632959685Wallet-Rigid-Boxes-Sire%20Printing%2001.png",
                label: "Wallet Rigid Boxes",
        },
        {
                imageUrl:
                        "https://s3.amazonaws.com/sireprinting.com/products/1632953890Jewelry-Boxes-Sire%20Printing%2001.png ",
                label: " Jewelry Boxes",
        },
        {
                imageUrl:
                        "https://res.cloudinary.com/sireprinting/image/upload/v1601679264/Kraft%20Rigid%20Boxes.png",
                label: "Kraft Rigid Boxes",
        },
        {
                imageUrl:
                        "https://s3.amazonaws.com/sireprinting.com/products/1632959428small-rigid-boxes-sireprinting-01.png",
                label: "Small Rigid Boxes",
        },
        {
                imageUrl:
                        "https://s3.amazonaws.com/sireprinting.com/products/1632959323Satin-Lined-Rigid-Boxes-Sire-Printing.png",
                label: "Satin Lined Boxes",
        },
        {
                imageUrl:
                        " https://res.cloudinary.com/sireprinting/image/upload/v1612919456/rigid-cigarette-boxes.png",
                label: " Rigid Cigarette Boxes",
        },
        {
                imageUrl:
                        " https://s3.amazonaws.com/sireprinting.com/products/1632954735luxury%20cigar%20boxes%20Sire%20Printing%2001.png",
                label: " Luxury Cigar Boxes",
        },
        {
                imageUrl:
                        " https://s3.amazonaws.com/sireprinting.com/products/1632955051Luxury-Sleeve-Boxes-Sire%20Printing%2001.png",
                label: "Luxury Sleeve Boxes",
        },


];

const pageTitle = "Rigid Boxes"
const homeLink = "/"
const banner = "https://res.cloudinary.com/sireprinting/image/upload/v1612405516/rigid-boxes1.png";
const linkLabel = "Home";
const Label = "Rigid Boxes";

const Image = () => {
        return (<>
              <div className=" lg:w-2/3 md:w-2/3  mx-3">
			<h1 className="w-full text-center  my-12 text-4xl font-semibold">
				{pageTitle}
			</h1>
			<div className=" w-full grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2   md:px-10 gap-4 py-0 px-1">
                                {imagesArr.map((v, i) => {
                                        return (

                                                <div key={i} className=" rounded-lg">

                                                        <Link to="#">
                                                                <div className="text-center border hover:scale-105 duration-500 hover:opacity-60 cursor-pointer">
                                                                        <img src={v.imageUrl} alt={v.label} loading="lazy" />
                                                                        <div>
                                                                                <h2 className="font-semibold py-2 px-3 lg:py-4  text-[0.6rem] text-black text-sm  bg-amber-500">
                                                                                        {v.label}
                                                                                </h2>
                                                                        </div>
                                                                </div>
                                                        </Link>
                                                </div>

                                        );
                                })}
                        </div>
                </div>
        </>
        );
};


const RigidBoxes = () => {
        const siteTitle = 'Custom Rigid Boxes Wholesale | Luxury Corporate Gift Boxes | Sire Printing';

        TabTitle(siteTitle);

        return (//<strong className="text-blue-600 hover:text-blue-800"><Link to="">Custom CBD Packaging</Link></strong>
                <>
                        <Layout>
                                <div className="  bg-white ">
                                        <img src={banner} alt="" className="w-full" />
                                        <div className="bg-slate-200 h-12 flex items-center"><Link to={homeLink} className=" mx-7 font-semibold">{linkLabel}</Link><span className="text-xs">&raquo;&nbsp;&nbsp;</span><span className="text-amber-500 font-semibold"><em>{Label}</em></span></div>
                                        <div className="py-24">

                                        <div className="py-10 lg:flex md:flex relative">
						<Image pageTitle={pageTitle} />
						<Quote />
						
					</div>
                                        </div>

                                </div>
                        </Layout>
                </>
        );
};
export default RigidBoxes;

