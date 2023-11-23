import React from "react";
import { Link } from "react-router-dom";
import Layout from "../layout";
import Quote from "./2ndpageComponents/beatQuote";
import { TabTitle } from "./utils/GeneralFunction";
let imagesArr = [
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1632957575Mug%20Boxes%20Sire%20Printing%2001.png",
		label: " Mug Boxes",
	},
	{
		imageUrl:
			"https://s3.amazonaws.com/sireprinting.com/products/1632954123Lip-Balm-Boxes-Sire%20Printing%2001.png",
		label: "Lip Balm Boxes",
	},
	
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1628902886Dropper%20Bottle%20Boxes-SirePrnting01.png",
		label: "CBD Dropper Bottle Boxes",
	},
	{
		imageUrl:
			"https://s3.amazonaws.com/sireprinting.com/products/1627779293CBD-Cosmetic-Boxes-SirePrinting%2001.png",
		label: "CBD Edibles Boxes ",
	},
	
	

];

const pageTitle = "Custom Display Boxes"
const homeLink = "/"
const banner = "https://s3.amazonaws.com/sireprinting.com/categories/1669766392Custom%20Display%20Boxes%20Sire%20Printing.jpg";
const linkLabel = "Home";
const Label = "Custom Display Boxes";

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
									<h1 className="font-medium py-2 px-3 lg:py-4  text-[0.6rem] text-black text-sm  bg-amber-500">
										{v.label}
									</h1>
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


const CustomDisplayBoxes = () => {
	const siteTitle = 'Custom CBD Boxes with Logo | CBD Packaging Wholesale | Sire Printing';

	TabTitle(siteTitle);

	return (
		<>
			<Layout>
				<div className="  bg-white ">
					<img src={banner} alt="" />
					<h1 className="bg-slate-200 h-12 flex items-center"><Link to={homeLink} className=" mx-7 font-semibold">{linkLabel}</Link><span className="text-xs">&raquo;&nbsp;&nbsp;</span><span className="text-amber-500 font-semibold"><em>{Label}</em></span></h1>
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
export default CustomDisplayBoxes;














