import React from "react";
import { Link } from "react-router-dom";
import Layout from "../layout";
import Quote from "./2ndpageComponents/beatQuote";
import { TabTitle } from "./utils/GeneralFunction";
let imagesArr = [
        {
                imageUrl:
                        "https://res.cloudinary.com/sireprinting/image/upload/v1608771525/Beard%20Balm%20Boxes.png ",
                label: " Beard Balm Boxes",
        },
        {
                imageUrl:
                        "https://res.cloudinary.com/sireprinting/image/upload/v1608773455/Body%20Oil%20Boxes.png ",
                label: " Body Oil Boxes",
        },
        {
                imageUrl:
                        " https://s3.amazonaws.com/sireprinting.com/products/1632940793Cosmetic-Sleeves-Packaging-Sire-Printing-01.png",
                label: " Cosmetic Sleeves",
        },
        {
                imageUrl:
                        "https://res.cloudinary.com/sireprinting/image/upload/v1608774531/Eyelash%20Glue%20Boxes.png ",
                label: " Eyelash Glue Boxes",
        },
        {
                imageUrl:
                        " https://s3.amazonaws.com/sireprinting.com/products/1632951787face-wash-box-packaging-sire-printing-01.png",
                label: "Face Wash Boxes ",
        },
        {
                imageUrl:
                        " https://s3.amazonaws.com/sireprinting.com/products/1628201847Face%20Wash%20Bar%20Boxes%20Sire%20Printing%2001.png",
                label: "Face Wash Bar Boxes ",
        },
        {
                imageUrl:
                        " https://res.cloudinary.com/sireprinting/image/upload/v1609539295/Hair%20Products%20Boxes.png",
                label: " Hair Products Boxes",
        },
        {
                imageUrl:
                        " https://res.cloudinary.com/sireprinting/image/upload/v1609624535/Hair%20Spray%20Boxes.png",
                label: " Hair Spray Boxes",
        },
        {
                imageUrl:
                        " https://s3.amazonaws.com/sireprinting.com/products/1632954230Lip-Liner-Boxes-Sire-Printing-06.png",
                label: "Lip Liner Boxes ",
        },
        {
                imageUrl:
                        "https://res.cloudinary.com/sireprinting/image/upload/v1609625927/Subscription%20Boxes.png ",
                label: " Subscription Boxes",
        },
        {
                imageUrl:
                        " https://s3.amazonaws.com/sireprinting.com/products/1640140622Small%20Mailer%20Boxes%20Sire%20Printing%2001.png",
                label: " Small Mailer Boxes",
        },
        {
                imageUrl:
                        " https://res.cloudinary.com/sireprinting/image/upload/v1600986569/Aroma%20Boxes.png",
                label: " Aroma Boxes",
        },
        {
                imageUrl:
                        " https://res.cloudinary.com/sireprinting/image/upload/v1600197589/lipstick-boxes.png",
                label: "Lipstick Boxes ",
        },
        {
                imageUrl:
                        " https://res.cloudinary.com/sireprinting/image/upload/v1600198880/lip-gloss-boxes.png",
                label: "Lip Gloss Boxes ",
        },
        {
                imageUrl:
                        " https://s3.amazonaws.com/sireprinting.com/products/1632941243Cream%20Boxes%20Sire%20Printing%2001.png",
                label: " Cream Boxes",
        },
        {
                imageUrl:
                        " https://s3.amazonaws.com/sireprinting.com/products/1632873549Anti%20Aging%20Cream%20Boxes%20Sire%20Printing%2001.png",
                label: " Anti Aging Cream Boxes",
        },
        {
                imageUrl:
                        " https://s3.amazonaws.com/sireprinting.com/products/1628196728Luxury%20Soap%20Boxes%20SirePrinting%2001.png",
                label: " Luxury Soap Boxes",
        },
        {
                imageUrl:
                        " https://s3.amazonaws.com/sireprinting.com/products/1632951291Eyeliner-Boxes-05.png",
                label: " Eyeliner Boxes",
        },
        {
                imageUrl:
                        " https://s3.amazonaws.com/sireprinting.com/products/1632951542Eyeshadow-Boxes-Sire%20Printing%2001.png",
                label: "Eyeshadow Boxes ",
        },
        {
                imageUrl:
                        " https://s3.amazonaws.com/sireprinting.com/products/1632950784EyeLash%20Boxes%20Sire%20Printing%2001.png",
                label: "Eyelash Boxes ",
        },
        {
                imageUrl:
                        " https://s3.amazonaws.com/sireprinting.com/products/1632950613eye-brow-pencil-boxes-04.png",
                label: " Eyebrow Pencil Boxes",
        },
        {
                imageUrl:
                        " https://s3.amazonaws.com/sireprinting.com/products/1632951392Eye-Serum-Boxes-03.png",
                label: " Eye Serum Boxes",
        },
        {
                imageUrl:
                        " https://s3.amazonaws.com/sireprinting.com/products/1632939315Custom-Cosmetic-Boxes-04.png",
                label: " Custom Cosmetic Boxes",
        },
        {
                imageUrl:
                        " https://s3.amazonaws.com/sireprinting.com/products/1632874791Bronzer-Boxes-Sire-Printing%2001.png",
                label: " Bronzer Boxes  ",
        },
        {
                imageUrl:
                        " https://s3.amazonaws.com/sireprinting.com/products/1666574001beauty-mask-boxes-sire-printing-01.png",
                label: "Beauty Face Mask Boxes ",
        },
        {
                imageUrl:
                        " https://s3.amazonaws.com/sireprinting.com/products/1632938816Concealer%20Boxes%20Sire%20Printing%2001.png",
                label: " Concealer Boxes",
        },
        {
                imageUrl:
                        " https://s3.amazonaws.com/sireprinting.com/products/1627776386CBD-Bath-Bomb-Boxes-01.png",
                label: " CBD Bath Bomb Boxes",
        },
        {
                imageUrl:
                        " https://s3.amazonaws.com/sireprinting.com/products/1632874425Beard%20Oil%20Boxes%20Sire%20Printing%2001.png",
                label: "Beard Oil Boxes ",
        },
        {
                imageUrl:
                        " https://s3.amazonaws.com/sireprinting.com/products/1632954123Lip-Balm-Boxes-Sire%20Printing%2001.png",
                label: "Lip Balm Boxes ",
        },
        {
                imageUrl:
                        " https://res.cloudinary.com/sireprinting/image/upload/v1600198647/nail-polish-boxes.png",
                label: "Nail Polish Boxes ",
        },
        {
                imageUrl:
                        " https://res.cloudinary.com/sireprinting/image/upload/v1600197196/foundation-boxes.png",
                label: " Foundation Boxes",
        },
        {
                imageUrl:
                        " https://res.cloudinary.com/sireprinting/image/upload/v1600733840/mascara-boxes.png",
                label: " Mascara Boxes",
        },
        {
                imageUrl:
                        " https://res.cloudinary.com/sireprinting/image/upload/v1600200617/marble-boxes.png",
                label: " Marble Boxes",
        },
        {
                imageUrl:
                        "https://s3.amazonaws.com/sireprinting.com/products/1632953042Hair%20Extension%20Boxes%20Sire%20Printing%2001.png ",
                label: " Hair Extension Boxes",
        },
        {
                imageUrl:
                        "https://s3.amazonaws.com/sireprinting.com/products/1627779293CBD-Cosmetic-Boxes-SirePrinting%2001.png ",
                label: "CBD Cosmetic Boxes",
        },
        {
                imageUrl:
                        " https://s3.amazonaws.com/sireprinting.com/products/1632951680Face-Serum-Boxes-Sire%20Printing%2001.png",
                label: "Face Serum Boxes ",
        },
        {
                imageUrl:
                        "https://s3.amazonaws.com/sireprinting.com/products/1632950451Essential-Oil-Boxes-01.png ",
                label: "Essential Oil Boxes ",
        },
        {
                imageUrl:
                        "https://s3.amazonaws.com/sireprinting.com/products/1632941077Cosmetic%20Window%20%20Boxes%20Sire%20Printing%2001.png ",
                label: " Cosmetic Window Boxes",
        },
        {
                imageUrl:
                        "https://s3.amazonaws.com/sireprinting.com/products/1632955051Luxury-Sleeve-Boxes-Sire%20Printing%2001.png ",
                label: "Luxury Sleeve Boxes ",
        },
       


];

const pageTitle = "Cosmetic Packaging Boxes"
const homeLink = "/"
const banner = "https://res.cloudinary.com/sireprinting/image/upload/v1613521886/cosmetic-packaging1.png";
const linkLabel = "Home";
const Label = "Cosmetic Packaging Boxes";

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


const CosmeticPackagingBoxes = () => {
        const siteTitle = 'Custom CBD Boxes with Logo | CBD Packaging Wholesale | Sire Printing';

        TabTitle(siteTitle);

        return (
                <>
                        <Layout>
                                <div className="  bg-white ">
                                        <img src={banner} alt="" className="w-fulls"/>
                                        <h2 className="bg-slate-200 h-12 flex items-center"><Link to={homeLink} className=" mx-7 font-semibold">{linkLabel}</Link><span className="text-xs">&raquo;&nbsp;&nbsp;</span><span className="text-amber-500 font-semibold"><em>{Label}</em></span></h2>
                                        <div className="py-24">
                                               
                                        <div className="py-10 lg:flex md:flex relative">
						<Image pageTitle={pageTitle} />
						<Quote />
						
					</div>
                                        </div>
                                        <div className="ml-3 lg:ml-16  py-24">
                                                <h2 className="text-3xl font-semibold  my-5">Let us Set New Trends for Your Custom Cosmetic Packaging Boxes</h2>
                                                <p className="my-5">Skincare products’ buyers and makeup lovers have their own choice of makeup preference according to their preferences. At sireprinting.com, we give value to these preferences when designing and producing Custom Cosmetic Packaging Boxes for you. Most makeup products and cosmetic items are used for gifting purposes, so their packaging requirements vary a lot from standard conditions. If a person will want to give some makeup products to his loved one, it’s always best to get custom cosmetic boxes to minimize the need for packing; this will transform an ordinary decorative box into an extraordinary one. That is the formula we follow when developing and designing your personalized boxes. For that purpose, we have a whole new range of trendy luxury rigid boxes to represent your products best. No matter how vast a range of cosmetics you produce, we can accommodate all sorts of your business and customer requirements. Even if you have unlimited options, we can accommodate it through our vast range of customizable folding boxes. We make different packaging for every cosmetic product. We can accommodate everything that you may have in mind about your cosmetic products.</p>
                                                <h2 className="text-3xl font-semibold  my-5">High End Custom Printed Cosmetic Packaging Boxes to Boost Your Brand</h2>
                                                <p className="my-5">Custom Printed Cosmetic Packaging Boxes are the best tool when it comes to sales boost and customer retention. Personalized make-up product packaging is essential because it will also increase your brand and give you an individual identity from your competitors. We take them as the brand name ambassador for your high-end items. Unlike the other packaging solutions, that type of boxes hold the product, but it also entices the customers with their superb designs. Packages, their sizes as well as their purpose vary as per the customer’s preference. Whether you are a home user, working woman, salon owner, or make-up artist, our boxes can accommodate all. If you sell make-up products, it would be best to order cosmetic packs in your personalized way to get affordable customization. In short, one ought to never undervalue the value of sensational tailor-made decorative boxes. Aesthetic boxes typically include unique, attractive impacts and also captivating styles. We integrate the most recent appearances and also trending shades to produce your one-of-a-kind style. With the most recent printing innovations and attractive impacts, we make every effort to create the most effective cosmetic packaging solution for you</p>

                                                <h2 className="text-3xl font-semibold  my-5">Why Does Your Business Need Eco-Friendly Cosmetic Packaging?</h2>



                                                <p className="my-5">Today people love to acquire cosmetic products that are neither harmful to their health nor is their packaging hazardous to the environment. That has aroused the need for products that are sold and stored in environmentally friendly packaging. All that effort will make you prominent as a manufacturer and make you an apple of the eye for those who are too conscious about their environment. We recommend publishing the aesthetic product packaging boxes with a brand name tagline that also portrays the importance of eco-friendly packaging. Eco-friendly packaging and printing, with the best description related to your product's tone, can provide your product line a real result. Moreover, the graphics and also textural impacts function best with various Kraft paperboards. However, it is also a fact that not all printing solutions can provide you the best results and textures on that type of stock. We offer you all the designing and printing facilities under a single roof that saves you time and cash and provides a unique interaction between both the departments. Eco-friendly containers depict the items magnificently, which allows the consumers to see precisely that what they obtain is coming from a serious and responsible manufacturer. To provide your custom-made, environmentally friendly boxes an elegant touch, we choose to publish them with different trending styles and layout</p>

                                                <h2 className="text-3xl font-semibold my-5">Posh and Trendy Cosmetic Packaging Low Minimum </h2>
                                                <p className="my-5">In today's open market, your items not just require reliable product packaging, yet they additionally need imagination. If you are trying to find a full-fledged tailored box for your beauty items, we can set up that with our trendy Cosmetic Packaging Low Minimum. Our product packaging for customized cosmetic packages will certainly make your customers value your article much more, and that too at a highly affordable price range. These likewise make your item preferred when it comes to the competition in the marketing of similar products. At sireprinting.com, we count on the product packaging that sticks out from the remainder and ensures substantial sales. No matter what type of products you produce, we have a perfect packaging solution for each readily available in numerous personalized layouts and designs. You have full freedom to tailor any form, color, shape, style, or dimension that you require according to your business needs and customer demands. Even if you are short of new ideas, we have a full range of 3D mockups that would fulfill your requirement in no time. All you have to do is to choose the style, measurement, and dimension that best suits your imagination and leave the rest on our team of highly proficient designers and layout experts. </p>

                                                <h2 className="text-3xl font-semibold my-5">Experience Our High Tech Printing and Designing for Luxury Cosmetic Packaging</h2>

                                                <p className="my-5">At sireprinting.com, we accommodate a vast range of requirements for your Luxury Cosmetic Packaging items and also supply impressive product packaging layouts that would, for sure, captivate your target audience. Our custom layouts, logo printing, designs, dimensions, forms, and high-end printing devices ensure your task's miraculous fulfillment. All that effort and years of experience on our back has made sireprinting.com a name of trust in the packaging industry. Because client contentment is our leading concern, we understand what it requires to maintain our consumers bound with us tightly. We give free of cost style assistance to offer you an affordable solution. As soon as you have shared the product packaging information, we transfer your order to the next stage. It consists of providing you excellent exaltation by supplying complimentary style assistance. Our experienced developers place trust in their instinct and competence to offer you a terrific layout experience. The layout assistance consists of a 2D sight as well as a 3D sight. A 2D view consists of the picturesque scenery of the item. Nonetheless, a 3D  opens an immersive picture of the item via a free mockup. You can choose any layout and design with fully personalized alterations to provide you with the result that is satisfying for you and pleasant for your end-users.</p>

                                                <h2 className="text-3xl font-semibold my-5">No Shipping Charges for Large or Small Order Cosmetic Packaging </h2>

                                                <p className="my-5">We comprehend the requirement for raised consumer experience. For that function, we do not bill added fees from you. At sireprinting.com, our orders are devoid of delivery fees in the USA. You can get free shipment at your doorstep no matter how large or Small order cosmetic packaging you place. So, if you are stressed over that component, leave it on us. We will certainly do our best to alleviate the delivery costs no matter where you reside in the USA. We have a propensity for fulfilling everybody's assumptions via our aesthetic product packaging. Our comprehensive evaluation and design of product packaging have permitted us to raise the objectives. Our product packaging developers and designers enter into every minor detail to be helpful to the clients.</p>

                                                <h2 className="text-3xl font-semibold my-5">Opening New Horizons for Private Label Cosmetics Low Minimums </h2>

                                                <p className="my-5">By opening an entire brand-new perspective to many modifications, we provide you an increase and self-confidence to trust our solutions with Private Label Cosmetics Low Minimums. As we know that private label manufacturers produce cosmetic items for other manufacturers, their choice for customization is also very much vast. The same is the case with the variety of stock they include in their product manufacturing listing. For that purpose, we have a lengthy listing of products for you to pick from. Each product has a specific top quality with various densities and thickness scales. For instance, environmentally friendly boxes advertise an environment-friendly and also healthy and balanced atmosphere. They emphasize the significance of a collaborated yet risk-free atmosphere with the usage of Kraft. The same is the case with finishing options for private label companies. We offer finishes to provide a cool impact on your customers. Coatings offer you a first-hand ticket to allow the customers to obtain a close eye for your item. Each finish has a specific effect, and if utilized correctly, they can lead the way for deluxe cosmetic product packaging. Finally, to include a cherry on the top, we offer a complete listing of high profile addons to produce an attractive edge for our product packaging, such as aesthetic gift item packaging.</p>

                                                <h2 className="text-3xl font-semibold my-5">24/7 Support and Customer Assistance</h2>

                                                <p className="my-5">We provide full time customer support and professional assistance that will furnish you with complete peace of mind. Moreover, stay relaxed if you are stressed over late order delivery or late arrival of the package at your assigned destination, there is no need to fret about it. We also understand what it requires to begin a service from square one; that is why along with other perks, we also offer you the luxury of minimum order placement until it is too heavy for us to afford economically. You can either call us at (410) 834-9965. You can also email your feedback or any questions at support@sireprinting.com. We will respond to you as early as possible.</p>
                                        </div>
                                </div>
                        </Layout>
                </>
        );
};
export default CosmeticPackagingBoxes;














