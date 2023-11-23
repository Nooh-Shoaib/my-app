import React from "react";
import { Link } from "react-router-dom";
import Layout from "../layout";
import Quote from "./2ndpageComponents/beatQuote";
import { TabTitle } from "./utils/GeneralFunction";
let imagesArr = [
        {
                imageUrl:
                        "https://res.cloudinary.com/sireprinting/image/upload/v1600970240/Phone%20Charger%20Boxes.png ",
                label: " Phone Charger Boxes",
        },

        {
                imageUrl:
                        "https://s3.amazonaws.com/sireprinting.com/products/1628210009Kraft%20Soap%20Boxes%20SirePrinting02.png ",
                label: "Kraft Soap Boxes ",
        },
        {
                imageUrl:
                        " https://res.cloudinary.com/sireprinting/image/upload/v1601332825/Black%20Kraft%20Boxes.png",
                label: " Black Kraft Boxes",
        },
        {
                imageUrl:
                        "https://s3.amazonaws.com/sireprinting.com/products/1666201862Custom-Printed-Kraft-Cereal-Boxes-05.png ",
                label: " Kraft Cereal Boxes",
        },
        {
                imageUrl:
                        "https://s3.amazonaws.com/sireprinting.com/products/1664588402Kraft%20Window%20Boxes%20SIre%20Printing%20001.png ",
                label: " Kraft Window Boxes",
        },
        {
                imageUrl:
                        " https://res.cloudinary.com/sireprinting/image/upload/v1612313141/custom%20food%20boxes.png",
                label: " Custom Food Boxes",
        },
        {
                imageUrl:
                        " https://s3.amazonaws.com/sireprinting.com/products/1664586049Incense%20Boxes%20Sire%20Printing%2002.png",
                label: " Incense Boxes",
        },
        {
                imageUrl:
                        " https://res.cloudinary.com/sireprinting/image/upload/v1601334928/Kraft%20Sleeve%20Boxes.png",
                label: " Kraft Sleeve Boxes",
        },
        {
                imageUrl:
                        "https://res.cloudinary.com/sireprinting/image/upload/v1601335406/Kraft%20Handle%20Boxes.png ",
                label: " Kraft Handle Boxes",
        },
        {
                imageUrl:
                        " https://s3.amazonaws.com/sireprinting.com/products/1654375989Kraft%20Pillow%20Boxes%20Sire%20Printing%2003.png",
                label: " Kraft Pillow Boxes",
        },
        {
                imageUrl:
                        " https://res.cloudinary.com/sireprinting/image/upload/v1601679264/Kraft%20Rigid%20Boxes.png",
                label: " Kraft Rigid Boxes",
        },
        {
                imageUrl:
                        "https://s3.amazonaws.com/sireprinting.com/products/1632874425Beard%20Oil%20Boxes%20Sire%20Printing%2001.png ",
                label: "Beard Oil Boxes ",
        },




];

const pageTitle = "Kraft Paper Boxes"
const homeLink = "/"
const banner = "https://res.cloudinary.com/sireprinting/image/upload/v1616160357/kraft-paper-boxes1.jpg";
const linkLabel = "Home";
const Label = "Kraft Paper Boxes";

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


const KraftPaperBoxes = () => {
        const siteTitle = 'Custom Rigid Boxes Wholesale | Luxury Corporate Gift Boxes | Sire Printing';

        TabTitle(siteTitle);

        return (//<strong className="text-blue-600 hover:text-blue-800"><Link to="">Custom CBD Packaging</Link></strong>
                <>
                        <Layout>
                                <div className="  bg-white ">
                                        <img src={banner} alt="" className="w-full" />
                                       <h2 className="bg-slate-200 h-12 flex items-center"><Link to={homeLink} className=" mx-7 font-semibold">{linkLabel}</Link><span className="text-xs">&raquo;&nbsp;&nbsp;</span><span className="text-amber-500 font-semibold"><em>{Label}</em></span></h2>
                                        <div className="py-24">
                                               
                                        <div className="py-10 lg:flex md:flex relative">
						<Image pageTitle={pageTitle} />
						<Quote />
						
					</div>
                                        </div>
                                       <h2 className="text-4xl mx-12 font-semibold"> Kraft Paper Boxes</h2>
                                        <p className="mx-12 pt-6 pb-14">Kraft Paper Boxes</p>
                                </div>
                        </Layout>
                </>
        );
};
export default KraftPaperBoxes;

