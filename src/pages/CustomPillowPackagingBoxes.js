import React from "react";
import { Link } from "react-router-dom";
import Layout from "../layout";
import Quote from "./2ndpageComponents/beatQuote";
import { TabTitle } from "./utils/GeneralFunction";
let imagesArr = [
        {
                imageUrl:
                        "https://res.cloudinary.com/sireprinting/image/upload/v1599871575/handle-pillow-boxes.png ",
                label: "Handle Pillow Boxes ",
        },

        {
                imageUrl:
                        "https://s3.amazonaws.com/sireprinting.com/products/1632879554Custom%20Pillow%20Boxes%20Sire%20Printing%2006.png ",
                label: "Pillow Boxes",
        },

        {
                imageUrl:
                        " https://s3.amazonaws.com/sireprinting.com/products/1632878721Window%20Pillow%20Boxes%20Sire%20Printing%2001.png",
                label: " Window Pillow Boxes",
        },

        {
                imageUrl:
                        "https://s3.amazonaws.com/sireprinting.com/products/1663453152Holographic-Pillow-Boxes-SirePrinting-04.png ",
                label: "Holographic Pillow Boxes ",
        },

        {
                imageUrl:
                        " https://s3.amazonaws.com/sireprinting.com/products/1663452826Black-Pillow-Boxes-SirePrinting05.png",
                label: " Black Pillow Boxes",
        },

        {
                imageUrl:
                        " https://res.cloudinary.com/sireprinting/image/upload/v1600204336/pillow-gift-boxes.png",
                label: "Pillow Gift Boxes ",
        },

        {
                imageUrl:
                        " https://res.cloudinary.com/sireprinting/image/upload/v1601485150/Christmas%20Pillow%20Boxes.png",
                label: "Merry Christmas Pillow Boxes ",
        },

        {
                imageUrl:
                        "https://s3.amazonaws.com/sireprinting.com/products/1654548469Large%20Pillow%20Boxes%20Sire%20Printing%2001.png ",
                label: " Large Pillow Boxes",
        },

        {
                imageUrl:
                        " https://s3.amazonaws.com/sireprinting.com/products/1654377311Clear%20Pillow%20Boxes%20Sire%20Printing%2006.png",
                label: " Clear Pillow Boxes",
        },

        {
                imageUrl:
                        "https://s3.amazonaws.com/sireprinting.com/products/1654375989Kraft%20Pillow%20Boxes%20Sire%20Printing%2003.png ",
                label: "Kraft Pillow Boxes ",
        },

        {
                imageUrl:
                        "https://s3.amazonaws.com/sireprinting.com/products/1654374016Foiled%20Pillow%20Boxes%20Sire%20Printing%2003.png ",
                label: "Foiled Pillow Boxes ",
        },

        {
                imageUrl:
                        " https://s3.amazonaws.com/sireprinting.com/products/1654372755Standing%20Pillow%20Boxes%20Sire%20Printing%2001.png",
                label: " Standing Pillow Boxes",
        },

        {
                imageUrl:
                        " https://res.cloudinary.com/sireprinting/image/upload/v1601929467/Pillow%20Box%20Mailers.png",
                label: " Pillow Box Mailers",
        },

        {
                imageUrl:
                        "https://s3.amazonaws.com/sireprinting.com/products/1632879803small-pillow-boxes-sire-printing.png ",
                label: " Small Pillow Boxes",
        },

        {
                imageUrl:
                        " https://res.cloudinary.com/sireprinting/image/upload/v1600716610/Handle%20Pillow%20Box.jpg",
                label: "Handle Pillow Box Style ",
        },

        {
                imageUrl:
                        "https://res.cloudinary.com/sireprinting/image/upload/v1600718580/Pillow%20Box%20Envelope.jpg ",
                label: "Pillow Box Envelope Style Boxes ",
        },

];

const pageTitle = "Custom Pillow Packaging Boxes"
const homeLink = "/"
const banner = "https://s3.amazonaws.com/sireprinting.com/categories/1669765522Custom%20Pillow%20Boxes%20Sire%20Printing.jpg";
const linkLabel = "Home";
const Label = "Custom Pillow Packaging Boxes";

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


const CustomPillowPackagingBoxes = () => {
        const siteTitle = 'Custom CBD Boxes with Logo | CBD Packaging Wholesale | Sire Printing';

        TabTitle(siteTitle);

        return (
                <>
                        <Layout>
                                <div className="  bg-white ">
                                        <img src={banner} alt="" />
                                        <h2 className="bg-slate-200 h-12 flex items-center"><Link to={homeLink} className=" mx-7 font-semibold">{linkLabel}</Link><span className="text-xs">&raquo;&nbsp;&nbsp;</span><span className="text-amber-500 font-semibold"><em>{Label}</em></span></h2>
                                        <div className="py-24">
                                               
                                        <div className="py-10 lg:flex md:flex relative">
						<Image pageTitle={pageTitle} />
						<Quote />
						
					</div>
                                        </div>
                                        <div className="ml-3 lg:ml-16  py-24">
                                                <h2 className="text-3xl font-semibold  my-5">Custom Pillow Boxes From Sire Printing Can Do Your Brand Wonders
                                                </h2>
                                                <p className="my-5">If you want to make your products stand out in the market, then all you need are custom printed pillow boxes from us: one of the top names in the printing organisations. How, you ask! Well, for one our pillow packaging boxes are not only attractive but are also available with limitless customizable options: size, style, and material - you name it. Our Custom Pillow Boxes are the rising trend in the packing industry because a) they are lightweight, which helps in saving the shipping costs and b) they are shaped in a way that catches the eyes and increases sales for the business/brand. So, if you want your brand triumphant over the rest in the competition, the following are some reasons for you to opt for our pillow box packaging and leave all the other - unreliable - options aside:</p>
                                                <h2 className="text-3xl font-semibold  my-5">Style and Size Options</h2>
                                                <p className="mt-5">Shaped to resemble pillows, our Custom Printed Pillow Boxes are sized and styled per the needs of the clients - the brand. So, whether you need a reverse tuck or pop display style, you can rely on us to get you the best outcomes that are sure to bring you high value for your money; other options include: </p>

                                                <ul className="font-light">
                                                        <li>Sleeve and tray </li>
                                                        <li>Gable style </li>
                                                        <li>Seal end </li>
                                                        <li>Bakery style</li>
                                                </ul>
                                                <p className="mb-5">Wow, right? Imagine the limitless campaigns you can run with these many style and size options. From introducing a new product in the market to reshaping the image of your brand for the better, our custom printed pillow boxes are the wonder you need to be opting for if you want to get the desired outcomes.</p>

                                                <h2 className="text-3xl font-semibold  my-5">Quality Manufacturing</h2>



                                                <p className="my-5">Customizable options - size and styles - are only the start, even wonderous is the fact that our Pillow Box Packaging comes in an even wider range of material options - and then some: Gloss/Matte Lamination, Die Cutting, Pre-Scored, and  Pre-Glued. So, if you are looking for a reliable and attractive packing option to pack your delicate cosmetics, medicines, or any eatables, our custom printed pillow boxes are about all you need. You can trust us to deliver products that are of highest quality in the market. Shipped flat with an easy assembling option, our custom pillow boxes are already a rising trend in the industry-partenered with the top brands</p>

                                                <h2 className="text-3xl font-semibold my-5">Customization Coupled with Affordability</h2>
                                                <p className="my-5">Unlike many other printing organisations, Sire Printing has its focus on customer satisfaction. So, our charges are reasonably kept low to meet the customer budgets - excellently so! Moreover, unlike many others in the industry who offer Pillow Boxes Wholesale for a cheaper rate and then cut corners on the quality of the end products, we provide our customers only with the highest quality results for a price that is not anything but budget-friendly. All in all, getting custom printed pillow boxes means getting quality products with even greater customizable options: Handle Pillow Boxes, window pillow boxes, holographic pillow boxes, standing pillow boxes, Pillow Box Mailers, kraft pillow boxes, and foiled pillow boxes - you name it, really! </p>

                                                <h2 className="text-3xl font-semibold my-5">Time-Efficient Delivery</h2>

                                                <p className="my-5">What can be greater than the fact that we always deliver our products on time. Yes! That means you can trust us to deliver you custom printed pillow boxes timely even on a short enough order-period. Say, there is an occasion, event, or a new marketing campaign that requires a timely delivery of Custom Packaging Boxes, then instead of twitching deadlines, just place your order at Sire Printing, and see us deliver you attractive and high-quality pillow box packaging that is sized and shaped per your expectations - surpassing even your expectations in terms of material quality. We get your order up and ready for delivery in a shorter period of time - faster than your expected time. We also offer a fast turnaround to maximise your satisfaction and improve customer experience for you.</p>

                                                <h2 className="text-3xl font-semibold my-5">Eco-Friendly Manufacturing </h2>

                                                <p className="my-5">Products that are eco-friendly are all the rage in the market, and for quite a good reason. So, unlike all those manufacturers of custom printed pillow boxes who use materials that negatively impact and ultimately - inevitably - destroy the environment, our Kraft Pillow Boxes are - with great thought and care - made eco-friendly to prevent all sorts of negative impacts to the environment. This attribute also adds its fair share in the product safety; whichever product you need our custom pillow boxes for, our product is nothing if not reliably safe - highly so!</p>

                                                <h2 className="text-3xl font-semibold my-5">Surety of Perfect Branding</h2>

                                                <p className="my-5">Although all the points that are aforementioned are reason enough for you to opt for Sire Printing if you want Pillow Packaging Boxes, we have never ending perks of buying from us. One such perk is that our custom pillow boxes are helpful for branding products of any industry: food, medicine, and cosmetics - you name it, we do it! Imagine your eatables packed in our clear or window Custom Pillow Boxes, for audience to look at and be tempted at; imagine your cosmetic range of products appealing to consumers because they are packed in unique and beautiful Standing Custom Pillow Boxes: the sales are sure to go up like crazy with your products shaped in the consumers minds - branded right - using our custom printed pillow boxes.</p>

                                                <h2 className="text-3xl font-semibold my-5">Conclusion</h2>

                                                <p className="my-5">At Sire Printing, Custom Pillow Packaging Boxes are delivered and manufactured with undeniably perfect perks: eco-friendly manufacturing, shorter run in manufacturing and delivery, wider range of custom size and styles, competitive pricing, and faster turnaround - and then some.</p>
                                        </div>
                                </div>
                        </Layout>
                </>
        );
};
export default CustomPillowPackagingBoxes;














