import React from 'react'
import { Link } from "react-router-dom";
import Layout from '../layout';
import Quote from "./2ndpageComponents/beatQuote";
import { TabTitle } from "./utils/GeneralFunction";
let imageArr = [

        {
                imageUrl: "https://s3.amazonaws.com/sireprinting.com/products/1632937304Clear%20Stickers%20SirePrinting%2001.png",
                label: "Clear Stickers",
        },
        {
                imageUrl: "https://s3.amazonaws.com/sireprinting.com/products/1632943546Custom%20Vinyl%20Stickers%20Sire%20Printing%2001.png",
                label: "Custom Vinyl Stickers",
        },
        {
                imageUrl: "https://s3.amazonaws.com/sireprinting.com/products/1666569720Die-Cut-Stickers-Sire-Printing06.png",
                label: "Die Cut Stickers",
        },
        {
                imageUrl: "https://s3.amazonaws.com/sireprinting.com/products/1666572115Double%20Sided%20Stickers%20SirePrinting%2001.png",
                label: "Double Sided Stickers",
        },
        {
                imageUrl: "https://s3.amazonaws.com/sireprinting.com/products/1632957797Pro-Cut-Stickers-SirePrinting01.png",
                label: "Pro Cut Stickers",
        },
        {
                imageUrl: "https://res.cloudinary.com/sireprinting/image/upload/v1600204695/lettering-stickers.png",
                label: "Lettering Stickers",
        },
        {
                imageUrl: "https://s3.amazonaws.com/sireprinting.com/products/1627778089CBD-Stickers-SirePrinting-01.png",
                label: "CBD Stickers",
        },


]

const pageTitle = "Custom Stickers & Decals";
const homeLink = "/";
const banner = "https://res.cloudinary.com/sireprinting/image/upload/v1611839245/custom-stickers1.png";
const linkLabel = "Home";
const Label = "Custom Stickers & Decals";

const Image = () => {
        return (
                <>
                     <div className=" lg:w-2/3 md:w-2/3  mx-3">
			<h1 className="w-full text-center  my-12 text-4xl font-semibold">
				{pageTitle}
			</h1>
			<div className=" w-full grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2   md:px-10 gap-4 py-0 px-1">
                                {imageArr.map((v, i) => {
                                        return (

                                                <div key={i} >

                                                        <Link to="#">
                                                                <div className="text-center  hover:scale-105 duration-500 hover:opacity-60 cursor-pointer">
                                                                        <img src={v.imageUrl} alt={v.label} loading="lazy" />
                                                                        <div>
                                                                               <h2 className="font-medium py-2 px-3 lg:py-4  text-[0.6rem] text-black text-sm  bg-amber-500">
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

export default function CustomStickers() {
        const siteTitle = 'Custom Stickers &amp; Decals | Sire Printing';
        TabTitle(siteTitle);

        return (
                <>
                        <Layout>
                                <div className="bg-white">
                                        <img src={banner} alt="" className="w-full" />
                                       <h2 className="bg-slate-200 h-12 flex items-center">
                                                <Link to={homeLink} className="mx-7 font-semibold">
                                                        {linkLabel}
                                                </Link>
                                                <span className="text-xs">&raquo;&nbsp;&nbsp;</span>
                                                <span className="text-amber-500 font-semibold">
                                                        <em>{Label}</em>
                                                </span>
                                       </h2>
                                        <div className="py-24">
                                             
                                        <div className="py-10 lg:flex md:flex relative">
						<Image pageTitle={pageTitle} />
						<Quote />
						
					</div>
                                        </div>
                                </div>
                        </Layout >
                </>
        )
}
