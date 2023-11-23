import React from "react";
import { Link } from "react-router-dom";
import Layout from "../layout";
import Quote from "./2ndpageComponents/beatQuote";
import { TabTitle } from "./utils/GeneralFunction";

let imagesArr = [
	{
		imageUrl:
			" https://res.cloudinary.com/sireprinting/image/upload/v1612919456/rigid-cigarette-boxes.png",
		label: " Rigid Cigarette Boxes",
	},
	{
		imageUrl:
			"https://s3.amazonaws.com/sireprinting.com/products/1632954735luxury%20cigar%20boxes%20Sire%20Printing%2001.png ",
		label: "Luxury Cigar Boxes ",
	},
	{
		imageUrl:
			"https://s3.amazonaws.com/sireprinting.com/products/1640140622Small%20Mailer%20Boxes%20Sire%20Printing%2001.png ",
		label: " Small Mailer Boxes",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1627776830SirePrinting-Tincture-Boxes-01.png",
		label: " Custom Tincture Boxes",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1627776966Custom-Cigarette-Boxes-SirePrinting%2001.png",
		label: " Custom Cigarette Boxes ",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1627779660CBD%20Oil%20Boxes%20SirePrinting%2001.png ",
		label: " CBD Oil Boxes",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1627835995Pre-Rolls-Boxes-SirePrinting%2001.png",
		label: "CBD Pre Rolls Boxes ",
	},
	{
		imageUrl:
			"https://s3.amazonaws.com/sireprinting.com/products/1627780198Vape-Oil-Cartridge-Boxes-SirePrinting%2001.png ",
		label: " Vape Oil Cartridge Boxes",
	},
	{
		imageUrl:
			" https://res.cloudinary.com/sireprinting/image/upload/v1602200995/cbd-gummies-boxes.png",
		label: "CBD Gummies Boxes ",
	},
	{
		imageUrl:
			"https://s3.amazonaws.com/sireprinting.com/products/1627831709Pre-Rolls-Cones-Boxes-SirePrinting%2001.png ",
		label: " Custom Pre Rolled Cones Boxes",
	},
	{
		imageUrl:
			"https://s3.amazonaws.com/sireprinting.com/products/1627832313Medical-Cannabis-Boxes-SirePrinting%2001.png ",
		label: " Medical Cannabis Boxes",
	},
	{
		imageUrl:
			" https://res.cloudinary.com/sireprinting/image/upload/v1602285970/cbd-isolate-boxes.png",
		label: " CBD Isolate Boxes",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1640142509CBD%20Edible%20Product%20Packaging%20Boxes%20Sireprinting%2001.png",
		label: "CBD Edibles Boxes ",
	},
	{
		imageUrl:
			"https://s3.amazonaws.com/sireprinting.com/products/1632876553Cannabis-Flower-Boxes-Sire-Printing-03.png ",
		label: "Cannabis Flower Boxes ",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1627778531Cannabis-Display-Boxes-02.png",
		label: "Cannabis Display Boxes ",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1627776386CBD-Bath-Bomb-Boxes-01.png",
		label: "CBD Bath Bomb Boxes ",
	},
	{
		imageUrl:
			"https://s3.amazonaws.com/sireprinting.com/products/1627830898CBD-Concentrate-Boxes-SirePrinting%2001.png ",
		label: " CBD Concentrate Boxes",
	},
	{
		imageUrl:
			"https://s3.amazonaws.com/sireprinting.com/products/1627776596CBD-Extract-Boxes-03.png ",
		label: " CBD Extract Boxes",
	},
	{
		imageUrl:
			"https://s3.amazonaws.com/sireprinting.com/products/1628902886Dropper%20Bottle%20Boxes-SirePrnting01.png ",
		label: " CBD Dropper Bottle Boxes",
	},
	{
		imageUrl:
			"https://s3.amazonaws.com/sireprinting.com/products/1627779425CBD-Essential-Oil-Boxes-01.png",
		label: "CBD Essential Oil Boxes ",
	},
	{
		imageUrl:
			"https://s3.amazonaws.com/sireprinting.com/products/1627830624Child-Resistant-Boxes-SirePrinting%2001.png ",
		label: " Child Resistant Boxes",
	},
	{
		imageUrl:
			"https://s3.amazonaws.com/sireprinting.com/products/1627830764Custom-Cannabis-Boxes-SirePrinting%2001.png ",
		label: "Custom Cannabis Boxes ",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1627830290CBD-Roll-On-Boxes-SirePrinting%2001.png",
		label: "CBD Roll On Boxes ",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1627779293CBD-Cosmetic-Boxes-SirePrinting%2001.png",
		label: " CBD Cosmetic Boxes",
	},
	{
		imageUrl:
			" https://res.cloudinary.com/sireprinting/image/upload/v1601945322/e-liquid-boxes.png",
		label: " E Liquid Boxes",
	},
	{
		imageUrl:
			"https://res.cloudinary.com/sireprinting/image/upload/v1602287217/cbd-lollipop-boxes.png ",
		label: "CBD Lollipop Boxes ",
	},
	{
		imageUrl:
			"https://s3.amazonaws.com/sireprinting.com/products/1632877609CBD-Gum-Boxes-SirePrinting-02.png ",
		label: "CBD Gum Boxes ",
	},
	{
		imageUrl:
			"https://s3.amazonaws.com/sireprinting.com/products/1640205840CBD%20Lotion%20Packaging%20Boxes%20SirePrinting01.png ",
		label: " CBD Lotion Boxes",
	},
	{
		imageUrl:
			" https://res.cloudinary.com/sireprinting/image/upload/v1602289803/cbd-pain-cream-boxes.png",
		label: " CBD Pain Cream Boxes",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1627777676Cannabis--Blunt-Boxes-SirePrinting%2001.png",
		label: " Cannabis Blunt Boxes",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1640139160CBD%20Chocolate%20Boxes%20Sire%20Printing%2001.png",
		label: " CBD Chocolate Boxes",
	},
	{
		imageUrl:
			" https://res.cloudinary.com/sireprinting/image/upload/v1602897966/cbd-pills-boxes.png",
		label: "CBD Pills Boxes ",
	},
	{
		imageUrl:
			" https://res.cloudinary.com/sireprinting/image/upload/v1602897966/cbd-pills-boxes.png",
		label: "CBD Serum Boxes ",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1632927910CBD-Sleeves-Packaging-Sire-Printing-01.png",
		label: " CBD Sleeves Packaging",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1632878086CBD-Salve-Boxes-Sire-Printing-04.png",
		label: "Custom CBD Salve Boxes ",
	},
	{
		imageUrl:
			"https://s3.amazonaws.com/sireprinting.com/products/1627775036cbd-syringe-boxes-sire-printing-03.png ",
		label: "CBD Syringes Boxes ",
	},
	{
		imageUrl:
			" https://res.cloudinary.com/sireprinting/image/upload/v1623463877/cbd-topical-boxes.png",
		label: " CBD Topical Boxes",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1627778736CBD-Candy-Boxes-SirePrinting-01.png",
		label: " CBD Candy Boxes",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1627778644Cannabis-Perfume-Boxes-SirePrinting-01.png",
		label: " Cannabis Perfume Boxes	",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1627778989CBD-Muscle-Rub%20Boxes%2001.png",
		label: " CBD Muscle Rub Boxes",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1627831048CBD%20Kush%20Cannabis%20Boxes%20SirePrinting%2001.png",
		label: " CBD Kush Cannabis Boxes",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1628213921Hemp-Soap-Boxes-SirePrinting%2001.png",
		label: "Hemp Soap Boxes ",
	},
	{
		imageUrl:
			"https://s3.amazonaws.com/sireprinting.com/products/1627836225Vape-Juice-Bottle-Boxes-SirePrinting%2001.png ",
		label: " Vape Juice Bottle Boxes",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1640226703Raw%20CBD%20Oil%20Box%20Packaging%20Sire%20Printing%2001.png",
		label: " Raw CBD Oil Boxes",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1627779934Custom-Vape-Boxes-SirePrinting%2001.png",
		label: " Custom Vape Boxes",
	},
	{
		imageUrl:
			"https://s3.amazonaws.com/sireprinting.com/products/1627836715Pod-Vape-Boxes-SirePrinting%2001.png ",
		label: "Pod Vape Boxes ",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1627836895Vape-Accessories-Boxes-SirePrinting%2001.png",
		label: "Vape Accessories Boxes ",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1627836476Vape-Pen-Boxes-SirePrinting%2001.png",
		label: " Vape Pen Boxes",
	},
	{
		imageUrl:
			"https://s3.amazonaws.com/sireprinting.com/products/1640141713CBD%20Dab%20Wax%20Packaging%20Boxes%20Sireprinting%2001.png ",
		label: " CBD Dab Wax Boxes",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1640222592Vape%20Charger%20Packaging%20SirePrinting%2001.png",
		label: "Vape Battery Charger Boxes ",
	},
	{
		imageUrl:
			"https://s3.amazonaws.com/sireprinting.com/products/1632876405Hemp%20Candle%20Boxes%20Sire%20Printing%2001.png ",
		label: "Hemp Candle Boxes ",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1640207992Hemp%20Cereal%20Packaging%20Boxes%20Sire%20Printing%2003.png",
		label: "Custom Hemp Cereal Boxes ",
	},
	{
		imageUrl:
			"https://s3.amazonaws.com/sireprinting.com/products/1640217782Hemp%20Cookie%20Boxes%20Sire%20Printing%2001.png ",
		label: " Hemp Cookie Boxes",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1640219681Hemp%20Protien%20Bar%20Display%20Boxes%20Sire%20Printing%2001.png",
		label: "Hemp Protein Bar Boxes ",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1640218601Hemp%20Flour%20Packaging%20Boxes%20SirePrinting%2001.png",
		label: "Custom Hemp Flour Boxes ",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1632954809CBD-Supplement-Boxes-Sire-Printing-01.png",
		label: " CBD Supplement Boxes",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1627835289Hemp-Pre-Rolled-Boxes-SirePrinting%2001.png",
		label: " Hemp Pre Rolled Boxes",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1640207162DIe%20Cut%20CBD%20Boxes%20SirePrinting%2001.png",
		label: " Die Cut CBD Boxes",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1627831925Hemp-Tea-Boxes-SirePrinting%2001.png",
		label: " Hemp Tea Boxes",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1627831230Custom-Hemp-Boxes-SirePrinting%2001.png",
		label: " Custom Hemp Boxes",
	},
	{
		imageUrl:
			"https://s3.amazonaws.com/sireprinting.com/products/1627778089CBD-Stickers-SirePrinting-01.png ",
		label: " CBD Stickers",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1632877371CBD%20beard%20Oil%20Boxes%20Sire%20Printing%2002.png",
		label: " CBD Beard Oil Boxes",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1627775703CBD-pet-tincture-boxes-Sire-Printing.png",
		label: " CBD Pet Products Boxes",
	},

];

const pageTitle = "CBD Packaging"
const homeLink = "/"
const banner = "https://s3.amazonaws.com/sireprinting.com/categories/1671821514CBD%20Packaging%20Boxes%20-%20Sire%20Printing.jpg";
const linkLabel = "Home";
const Label = "CBD Packaging";

const Image = ({pageTitle}) => {
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


const CBDPackaging = () => {
	const siteTitle = 'Custom CBD Boxes with Logo | CBD Packaging Wholesale | Sire Printing';

	TabTitle(siteTitle);

	return (
		<>
			<Layout>
				<div className="  bg-white ">
					<img src={banner} alt="" />
					<h1 className="bg-slate-200 h-12 flex items-center"><Link to={homeLink} className=" mx-7 font-semibold">{linkLabel}</Link><span className="text-xs">&raquo;&nbsp;&nbsp;</span><span className="text-amber-500 font-semibold"><em>{Label}</em></span></h1>
					<div className="py-10 lg:flex md:flex relative">
						<Image pageTitle={pageTitle} />
						<Quote />
						
					</div>
					<div className="ml-3 lg:ml-16  py-24">
						<h1 className="text-3xl font-semibold  ">Custom CBD Packaging Boxes Wholesale With Logo</h1>
						<p className="my-5">As we are a well known reputed company delivering <strong className="text-blue-600 hover:text-blue-800"><Link to="">CBD Packaging</Link></strong> Products and packaging boxes, we provide CBD packaging including <strong className="text-blue-600 hover:text-blue-800"><Link to="">Pre-Roll Packaging</Link></strong>, <strong className="text-blue-600 hover:text-blue-800"><Link to="">CBD Gummies Boxes</Link></strong>,<strong className="text-blue-600 hover:text-blue-800"><Link to="">CBD Topicals Boxes</Link></strong> , CBD vape boxes and <strong className="text-blue-600 hover:text-blue-800"><Link to="">CBD Oil Boxes</Link></strong>. Pre-roll boxes are used for carrying pre rolls with different counts like single pre roll, 2,5,10 or 20 pre rolls depends on customers needs. It is important for you to get those pre-roll fit and save the product inside from any harm or pollutant. We turn your dreams into a realistic design CBD packaging that becomes your brand identity in a cost-effective budget. We give a professional look to your CBD packaging having cardboard stock with a matte coating. Furthermore, we add hot stamp foil with spot UV to your box to give it a more glossy and shiny look. An impactful and astonishing box definitely impacts your sales growth which will result in taking your business to the next level.</p>
						<h1 className="text-3xl font-semibold  my-5">Make Your CBD Packaging Boxes More Attractive</h1>
						<p className="my-5">For improving and enhancing the brand with its appearance you must need impressive and dynamic CBD packaging because it can advertise your product as well. Is it better for yourself that you get packaging at a rapid speed that meets high quality? Sireprinting.com not only takes care of your product design but also makes sure that their products should have environmentally approved packaging. We make <strong className="text-blue-600 hover:text-blue-800"><Link to="">Custom CBD Packaging</Link></strong> which always takes care of the requirements of our clients that not only attracts customers to choose their product from the shelf but also makes them proud of. We take care of each and every aspect which includes quality of paper, shapes, design, color, and printing as well. So be with us to make your products and brand known to everyone.</p>

						<h1 className="text-3xl font-semibold  my-5">Packaging Guidelines for CBD Products</h1>



						<p className="my-5">As we provide the best and impressive <strong className="text-blue-600 hover:text-blue-800"><Link to="">CBD Packaging Boxes</Link></strong> that become your brand ambassador then how can we forget about requirements and guidelines for CBD packaging? We make <strong className="text-blue-600 hover:text-blue-800"><Link to="">Packaging Boxes</Link></strong> that are according to FDA guidelines. We make sure that our packaging not only competes with design standards but is secure for everyone as well. So be ready to get packaging boxes that increase your market presence and boost your sales as well.</p>

						<h2 className="text-3xl font-semibold my-5">High-Quality CBD Packaging at Wholesale Rate</h2>
						<p className="my-5">There are many medical and other products that are made up of cannabidiol that need to be packed in CBD packaging. That is the reason why the wholesale of<strong className="text-blue-600 hover:text-blue-800"><Link to="">Custom CBD Packaging Boxes</Link></strong>  is increasing day by day? So do you want minimalistic CBD packaging boxes at a wholesale rate? We have experts that make sure that you get printed CBD packaging boxes that have an impressive color combination and creative box structure having product safety as well. Our high packaging and printing standards give you packaging at a lesser cost that will win your heart and increase your business as well. Our goal is to provide our customers with a well-known reputation we never compromise on our CBD Packaging designing and printing standards.</p>
					</div>
				</div>
			</Layout>
		</>
	);
};
export default CBDPackaging;














