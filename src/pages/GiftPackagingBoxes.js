import React from "react";
import { Link } from "react-router-dom";
import Layout from "../layout";
import Quote from "./2ndpageComponents/beatQuote";
import { TabTitle } from "./utils/GeneralFunction";
let imagesArr = [
        {
                imageUrl:
                        " https://s3.amazonaws.com/sireprinting.com/products/1632931919Candy-Boxes%20Sire%20Printing%2001.png",
                label: "Candy Boxes ",
        },
        {
                imageUrl:
                        "https://res.cloudinary.com/sireprinting/image/upload/v1599871575/handle-pillow-boxes.png",
                label: " Handle Pillow Boxes",
        },
        {
                imageUrl:
                        " https://s3.amazonaws.com/sireprinting.com/products/1632879554Custom%20Pillow%20Boxes%20Sire%20Printing%2006.png",
                label: "Pillow Boxes ",
        },
        {
                imageUrl:
                        "https://s3.amazonaws.com/sireprinting.com/products/1663453152Holographic-Pillow-Boxes-SirePrinting-04.png ",
                label: "Holographic Pillow Boxes ",
        },
        {
                imageUrl:
                        " https://s3.amazonaws.com/sireprinting.com/products/1697921557-favor-boxes-sire-printing-1.avif",
                label: "Favor Boxes ",
        },
        {
                imageUrl:
                        " https://s3.amazonaws.com/sireprinting.com/products/1628206006Soap-Gift-Boxes-SirePrinting%2001.png",
                label: " Soap Gift Boxes=",
        },
        {
                imageUrl:
                        "https://s3.amazonaws.com/sireprinting.com/products/1663452826Black-Pillow-Boxes-SirePrinting05.png ",
                label: "Black Pillow Boxes ",
        },
        {
                imageUrl:
                        "https://res.cloudinary.com/sireprinting/image/upload/v1600204336/pillow-gift-boxes.png ",
                label: " Pillow Gift Boxes",
        },
        {
                imageUrl:
                        " https://s3.amazonaws.com/sireprinting.com/products/1654374016Foiled%20Pillow%20Boxes%20Sire%20Printing%2003.png",
                label: "Foiled Pillow Boxes ",
        },
        {
                imageUrl:
                        "https://s3.amazonaws.com/sireprinting.com/products/1654372755Standing%20Pillow%20Boxes%20Sire%20Printing%2001.png ",
                label: " Standing Pillow Boxes",
        },
        {
                imageUrl:
                        " https://s3.amazonaws.com/sireprinting.com/products/1632950144Donut-Boxes-Sire-Printing.png",
                label: " Donut Boxes",
        },
        {
                imageUrl:
                        "https://s3.amazonaws.com/sireprinting.com/products/1632959323Satin-Lined-Rigid-Boxes-Sire-Printing.png ",
                label: " Satin Lined Boxes",
        },
        {
                imageUrl:
                        "https://s3.amazonaws.com/sireprinting.com/products/1632954735luxury%20cigar%20boxes%20Sire%20Printing%2001.png ",
                label: " Luxury Cigar Boxes",
        },
        {
                imageUrl:
                        "https://res.cloudinary.com/sireprinting/image/upload/v1609625927/Subscription%20Boxes.png ",
                label: "Subscription Boxes",
        },

        {
                imageUrl:
                        " https://res.cloudinary.com/sireprinting/image/upload/v1612312941/Chocolate%20Boxes.png",
                label: " Chocolate Boxes",
        },
        {
                imageUrl:
                        " https://res.cloudinary.com/sireprinting/image/upload/v1612313700/Macaron%20Boxes.png",
                label: "Macaron Boxes ",
        },
        {
                imageUrl:
                        " https://s3.amazonaws.com/sireprinting.com/products/1632879803small-pillow-boxes-sire-printing.png",
                label: " Small Pillow Boxes",
        },
        {
                imageUrl:
                        " https://s3.amazonaws.com/sireprinting.com/products/1664588402Kraft%20Window%20Boxes%20SIre%20Printing%20001.png",
                label: " Kraft Window Boxes",
        },
        {
                imageUrl:
                        "https://s3.amazonaws.com/sireprinting.com/products/1632957661Candle%20Boxes%20Sire%20Printing.png ",
                label: "Candle Boxes ",
        },
        {
                imageUrl:
                        "https://s3.amazonaws.com/sireprinting.com/products/1632874083Bath%20Bomb%20Boxes%20Sire%20Printing%2001.png ",
                label: "Bath Bomb Boxes ",
        },
        {
                imageUrl:
                        " https://s3.amazonaws.com/sireprinting.com/products/1632957575Mug%20Boxes%20Sire%20Printing%2001.png",
                label: " Mug Boxes",
        },
        {
                imageUrl:
                        " https://s3.amazonaws.com/sireprinting.com/products/1632953890Jewelry-Boxes-Sire%20Printing%2001.png",
                label: "Jewelry Boxes ",
        },
        {
                imageUrl:
                        " https://res.cloudinary.com/sireprinting/image/upload/v1601485150/Christmas%20Pillow%20Boxes.png",
                label: " Merry Christmas Pillow Boxes",
        },
        {
                imageUrl:
                        " https://s3.amazonaws.com/sireprinting.com/products/1632874578black-soap-boxes-sireprinting-06.png",
                label: " Black Soap Boxes",
        },
        {
                imageUrl:
                        " https://s3.amazonaws.com/sireprinting.com/products/1632935749Christmas-Treat--Boxes-SirePrintig01.png",
                label: "Christmas Treat Boxes ",
        },
        {
                imageUrl:
                        " https://s3.amazonaws.com/sireprinting.com/products/1632951920Food-Packaging-Sleeves%20Sire%20Printing%2001.png",
                label: " Food Packaging Sleeves",
        },
        {
                imageUrl:
                        " https://s3.amazonaws.com/sireprinting.com/products/1632875158Cake-Boxes-Sire-Printing-02.png",
                label: "Cake Boxes ",
        },
        {
                imageUrl:
                        " https://res.cloudinary.com/sireprinting/image/upload/v1612313409/ice%20cream%20boxes.png",
                label: " Ice Cream Boxes",
        },
        {
                imageUrl:
                        " https://s3.amazonaws.com/sireprinting.com/products/1632928784Cell%20Phone%20Boxes%20Sire%20Printing%2001.png",
                label: "Cell Phone Boxes ",
        },
        {
                imageUrl:
                        "https://res.cloudinary.com/sireprinting/image/upload/v1600200617/marble-boxes.png ",
                label: " Marble Boxes",
        },
        {
                imageUrl:
                        " https://s3.amazonaws.com/sireprinting.com/products/1632953042Hair%20Extension%20Boxes%20Sire%20Printing%2001.png",
                label: "Hair Extension Boxes",
        },
        {
                imageUrl:
                        " https://s3.amazonaws.com/sireprinting.com/products/1632955051Luxury-Sleeve-Boxes-Sire%20Printing%2001.png",
                label: " Luxury Sleeve Boxes",
        },
        {
                imageUrl:
                        " https://s3.amazonaws.com/sireprinting.com/products/1640139160CBD%20Chocolate%20Boxes%20Sire%20Printing%2001.png",
                label: "CBD Chocolate Boxes ",
        },

];

const pageTitle = "Gift Packaging Boxes"
const homeLink = "/"
const banner = "https://s3.amazonaws.com/sireprinting.com/categories/1669765666Gift%20Packaging%20Boxes%20Sire%20Printing.jpg";
const linkLabel = "Home";
const Label = "Gift Packaging Boxes";

const Image = () => {
        return (<>
             <div className=" lg:w-2/3 md:w-2/3  mx-3">
			<h1 className="w-full text-center  my-12 text-4xl font-semibold">
				{pageTitle}
			</h1>
			<div className=" w-full grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2   md:px-10 gap-4 py-0 px-1">

                        {imagesArr.map((v, i) => {
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


const GiftPackagingBoxes = () => {
        const siteTitle = 'Custom CBD Boxes with Logo | CBD Packaging Wholesale | Sire Printing';

        TabTitle(siteTitle);

        return (
                <>
                        <Layout>
                                <div className="  bg-white ">
                                        <img src={banner} alt="" />
                                        <h2 className="bg-slate-200 h-12 flex items-center"><Link to={homeLink} className=" mx-7 font-semibold">{linkLabel}</Link><span className="text-xs">&raquo;&nbsp;&nbsp;</span><span className="text-amber-500 font-semibold"><em>{Label}</em></span></h2>
                                        <div className="py-4">
                                               
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
export default GiftPackagingBoxes;














