import React from "react";
import { Link } from "react-router-dom";
import Layout from "../layout";
import Quote from "./2ndpageComponents/beatQuote";
import { TabTitle } from "./utils/GeneralFunction";
let imagesArr = [
        {
                imageUrl:
                        " https://s3.amazonaws.com/sireprinting.com/products/1632873761Bakery-Boxes-Sire-Printing-02.png",
                label: " Bakery Boxes",
        },
        {
                imageUrl:
                        "https://s3.amazonaws.com/sireprinting.com/products/1632874949Burger-Boxes-Sire-Printing-01.png ",
                label: " Burger Boxes",
        },
        {
                imageUrl:
                        "https://s3.amazonaws.com/sireprinting.com/products/1645126269Cereal-Boxes-Sire-Printing-01.png ",
                label: "Cereal Boxes ",
        },
        {
                imageUrl:
                        " https://res.cloudinary.com/sireprinting/image/upload/v1606778914/cookie%20boxes.png",
                label: "Cookie Boxes ",
        },
        {
                imageUrl:
                        "https://s3.amazonaws.com/sireprinting.com/products/1632941376Paperboard-Crepe-Cones-Sire-Printing-02.png ",
                label: "Crepe Cone Holders ",
        },
        {
                imageUrl:
                        "https://s3.amazonaws.com/sireprinting.com/products/1632941473Cup-Cake-Boxes-Sire-Printing-01.png ",
                label: " Cupcake Boxes",
        },
        {
                imageUrl:
                        " https://s3.amazonaws.com/sireprinting.com/products/1632950144Donut-Boxes-Sire-Printing.png",
                label: " Donut Boxes",
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
                        " https://res.cloudinary.com/sireprinting/image/upload/v1612312941/Chocolate%20Boxes.png",
                label: "Chocolate Boxes ",
        },
        {
                imageUrl:
                        " https://res.cloudinary.com/sireprinting/image/upload/v1612313141/custom%20food%20boxes.png",
                label: " Custom Food Boxes",
        },
        {
                imageUrl:
                        " https://s3.amazonaws.com/sireprinting.com/products/1632952030Food-Trays-Sire-Printing-02.png",
                label: "Food Trays ",
        },
        {
                imageUrl:
                        "https://res.cloudinary.com/sireprinting/image/upload/v1612313409/ice%20cream%20boxes.png ",
                label: " Ice Cream Boxes",
        },
        {
                imageUrl:
                        " https://res.cloudinary.com/sireprinting/image/upload/v1612313558/k%20cup%20coffee%20boxes.png",
                label: " K Cup Coffee Boxes",
        },
        {
                imageUrl:
                        " https://res.cloudinary.com/sireprinting/image/upload/v1612313700/Macaron%20Boxes.png",
                label: "Macaron Boxes ",
        },
        {
                imageUrl:
                        "https://s3.amazonaws.com/sireprinting.com/products/1632959533sushi-boxes-sire-printing-05.png ",
                label: "Sushi Boxes ",
        },
        {
                imageUrl:
                        " https://s3.amazonaws.com/sireprinting.com/products/1666201862Custom-Printed-Kraft-Cereal-Boxes-05.png",
                label: " Kraft Cereal Boxes",
        },
        {
                imageUrl:
                        " https://s3.amazonaws.com/sireprinting.com/products/1664588402Kraft%20Window%20Boxes%20SIre%20Printing%20001.png",
                label: " Kraft Window Boxes",
        },
        {
                imageUrl:
                        " https://s3.amazonaws.com/sireprinting.com/products/1632931919Candy-Boxes%20Sire%20Printing%2001.png",
                label: "Candy Boxes ",
        },
        {
                imageUrl:
                        " https://s3.amazonaws.com/sireprinting.com/products/1632932853Christmas-Cake-Boxes-Sire-Printing.png",
                label: "Christmas Cake Boxes ",
        },
        {
                imageUrl:
                        " https://s3.amazonaws.com/sireprinting.com/products/1632932346Christmas-Apple-Boxes-Sire-Printing-01.png",
                label: " Christmas Apple Boxes",
        },
        {
                imageUrl:
                        " https://s3.amazonaws.com/sireprinting.com/products/1632933414Christmas-Cookie-Boxes-Sire-Printing-01.png",
                label: " Christmas Cookie Boxes",
        },
        {
                imageUrl:
                        " https://s3.amazonaws.com/sireprinting.com/products/1632935140Christmas-Cupcake-Boxes-Sire-Printing-01.png",
                label: " Christmas Cupcake Boxes",
        },
        {
                imageUrl:
                        " https://res.cloudinary.com/sireprinting/image/upload/v1602287217/cbd-lollipop-boxes.png",
                label: " CBD Lollipop Boxes",
        },
        {
                imageUrl:
                        " https://s3.amazonaws.com/sireprinting.com/products/1632877609CBD-Gum-Boxes-SirePrinting-02.png",
                label: "CBD Gum Boxes ",
        },
        {
                imageUrl:
                        " https://s3.amazonaws.com/sireprinting.com/products/1640139160CBD%20Chocolate%20Boxes%20Sire%20Printing%2001.png",
                label: "CBD Chocolate Boxes ",
        },
        {
                imageUrl:
                        " https://s3.amazonaws.com/sireprinting.com/products/1640207992Hemp%20Cereal%20Packaging%20Boxes%20Sire%20Printing%2003.png",
                label: "Custom Hemp Cereal Boxes ",
        },
        {
                imageUrl:
                        "https://s3.amazonaws.com/sireprinting.com/products/1640217782Hemp%20Cookie%20Boxes%20Sire%20Printing%2001.png ",
                label: "Hemp Cookie Boxes ",
        },
        {
                imageUrl:
                        "https://s3.amazonaws.com/sireprinting.com/products/1640219681Hemp%20Protien%20Bar%20Display%20Boxes%20Sire%20Printing%2001.png ",
                label: "Hemp Protein Bar Boxes ",
        },

];

const pageTitle = "Food Packaging"
const homeLink = "/"
const banner = "https://res.cloudinary.com/sireprinting/image/upload/v1613521827/food-packaging1.png";
const linkLabel = "Home";
const Label = "Food Packaging";

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


const FoodPackaging = () => {
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
                                       <h2 className="text-4xl mx-12 font-semibold"> Food Packaging</h2>
                                        <p className="mx-12 pt-6 pb-14">Food Packaging</p>
                                </div>
                        </Layout>
                </>
        );
};
export default FoodPackaging;

