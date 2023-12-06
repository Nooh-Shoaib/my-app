import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

let advantages = [
        {
                imageUrl:
                        "https://s3.amazonaws.com/sireprinting.com/images/perks/design-min.webp",
                label: "Eco-Friendly",
        },
        {
                imageUrl:
                        "https://s3.amazonaws.com/sireprinting.com/images/perks/eco-min.webp",
                label: "Eco-Friendly",
        },
        {
                imageUrl:
                        "https://s3.amazonaws.com/sireprinting.com/images/perks/ink-min.webp",
                label: "Environmental Friendly Ink",
        },
        {
                imageUrl:
                        "https://s3.amazonaws.com/sireprinting.com/images/perks/short-run-min.webp",
                label: "Short Run",
        },
        {
                imageUrl:
                        "https://s3.amazonaws.com/sireprinting.com/images/perks/size-min.webp",
                label: "Custom Size & Style",
        },
        {
                imageUrl:
                        "https://s3.amazonaws.com/sireprinting.com/images/perks/price-min.webp",
                label: "Competitive Price",
        },
        {
                imageUrl:
                        "https://s3.amazonaws.com/sireprinting.com/images/perks/time-min.webp",
                label: "Fast Turnaround",
        },
        {
                imageUrl:
                        "https://s3.amazonaws.com/sireprinting.com/images/perks/delivery-min.webp",
                label: "Free Delivery",
        },
];
const Advantages = () => {
        return (
                <div className="bg-white  flex justify-center items-center font-medium ">
                        <ul className="flex space-x-5">
                                <div className="  grid  lg:grid-cols-8 grid-cols-2 md:grid-cols-3  gap-2 lg:flex lg:justify-center space-x-7  justify-items-center lg:space-x-8">
                                        {advantages.map((v, i) => {
                                                return (
                                                        <div key={i} className="w-20 lg:w-24">
                                                                <img src={v.imageUrl} alt={v.label} loading="lazy" />
                                                                <div className="  ">
                                                                        <h2 className=" py-1 text-[0.8rem] text-black font-medium flex justify-center text-center">
                                                                                {v.label}
                                                                        </h2>
                                                                </div>
                                                        </div>
                                                );
                                        })}
                                </div>
                        </ul>
                </div>
        );
};

let imagesArr = [
        {
                imageUrl:
                        "https://s3.amazonaws.com/sireprinting.com/categories/1667384997cbd-package.webp",
                label: "CBD Packaging",
        },
        {
                imageUrl:
                        "https://s3.amazonaws.com/sireprinting.com/categories/1667384440retail-package.webp",
                label: "Custom Retail Packaging",
        },
        {
                imageUrl:
                        "https://s3.amazonaws.com/sireprinting.com/categories/1667385396Rigid-Packaging.webp",
                label: "Rigid Boxes",
        },
        {
                imageUrl:
                        "https://s3.amazonaws.com/sireprinting.com/categories/1667386036Food-Packaging.webp",
                label: "Food Packaging",
        },
        {
                imageUrl:
                        "https://s3.amazonaws.com/sireprinting.com/categories/1667386011Cosmetic-Boxes.webp",
                label: "Cosmetic Packaging Boxes",
        },
        {
                imageUrl:
                        "https://s3.amazonaws.com/sireprinting.com/categories/1667385978Eco-Packaging.webp",
                label: "Eco-Friendly Packaging",
        },
        {
                imageUrl:
                        "https://s3.amazonaws.com/sireprinting.com/categories/1667385954Woven-Labels.webp",
                label: "Woven Labels",
        },
        {
                imageUrl:
                        "https://s3.amazonaws.com/sireprinting.com/categories/1667385932Custom-Tags.webp",
                label: "Custom Hang Tags",
        },
        {
                imageUrl:
                        "https://s3.amazonaws.com/sireprinting.com/categories/1667385890Woven-Patches.webp",
                label: "Woven Embroidered Patches",
        },
        {
                imageUrl:
                        "https://s3.amazonaws.com/sireprinting.com/categories/1667385858Christmas-Boxes.webp",
                label: "Christmas Boxes",
        },
        {
                imageUrl:
                        "https://s3.amazonaws.com/sireprinting.com/categories/1667385823Cardboard-Boxes.webp",
                label: "Cardboard Boxes",
        },
];
const Image = () => {
        return (
                <div className="max-w-[1425px] mx-auto grid lg:grid-cols-4 grid-cols-2 md:grid-cols-4 lg:px-20  md:px-20 gap-3 py-0 px-1">
                        {imagesArr.map((v, i) => {
                                return (
                                        <Link key={i} href="#">
                                                <div className="text-center  hover:scale-105 duration-500 hover:opacity-60 cursor-pointer">
                                                        <img src={v.imageUrl} alt={v.label} loading="lazy" />
                                                        <div>
                                                                <h2 className="font-medium py-2 px-3 lg:py-4  text-[0.6rem] text-black lg:text-base  bg-amber-500">
                                                                        {" "}
                                                                        {v.label}
                                                                </h2>
                                                        </div>
                                                </div>
                                        </Link>
                                );
                        })}
                </div>
        );
};

let imgArr = [
        {
                imageUrl:
                        "https://s3.amazonaws.com/sireprinting.com/products/16528406221-2-3-bottom-tray%20Sire%20Printing.jpg",
                label: "1-2-3 Bottom Trays",
        },
        {
                imageUrl:
                        "https://res.cloudinary.com/sireprinting/image/upload/v1599824729/gable-bag.jpg",
                label: "Custom Gable Bags",
        },
        {
                imageUrl:
                        "https://res.cloudinary.com/sireprinting/image/upload/v1599825963/hexagon-box.jpg",
                label: "Hexagon Box",
        },
        {
                imageUrl:
                        "https://res.cloudinary.com/sireprinting/image/upload/v1600711109/Five%20Panel%20Hanger%20Box.jpg",
                label: "Five Panel Hanger Box",
        },
        {
                imageUrl:
                        "https://res.cloudinary.com/sireprinting/image/upload/v1600715245/Half%20Slotted%20Container.jpg",
                label: "Half Slotted Container",
        },
        {
                imageUrl:
                        "https://res.cloudinary.com/sireprinting/image/upload/v1600728275/Straight%20Tuck%20Box.jpg",
                label: "Straight Tuck Box",
        },
        {
                imageUrl:
                        "https://res.cloudinary.com/sireprinting/image/upload/v1600729288/Tuck%20and%20Display%20Box.jpg",
                label: "Tuck and Display Box",
        },
        {
                imageUrl:
                        "https://res.cloudinary.com/sireprinting/image/upload/v1600729591/Tuck%20and%20Tongue%20Box.jpg",
                label: "Tuck and Tongue Box",
        },
];
const Imgs = () => {
        return (
                <div className="max-w-[1425px] mx-auto grid lg:grid-cols-4 grid-cols-2 md:grid-cols-4 lg:px-20  md:px-20 gap-1.5 py-0 px-1 ">
                        {imgArr.map((v, i) => {
                                return (
                                        <Link key={i} href="#">
                                                <div className="text-center ">
                                                        <div className="overflow-hidden">
                                                                <img src={v.imageUrl} alt={v.label} loading="lazy" />
                                                        </div>
                                                        <div className=" bg-amber-500 ">
                                                                <button
                                                                        id="imgs"
                                                                        className="font-medium py-2 px-3 lg:py-4  text-[0.6rem] text-black  lg:text-sm"
                                                                >
                                                                        {v.label}
                                                                </button>
                                                        </div>
                                                </div>
                                        </Link>
                                );
                        })}
                </div>
        );
};

let hoverimgArr = [
        {
                imageUrl:
                        "https://res.cloudinary.com/sireprinting/image/upload/v1600175026/pillow-packaging-boxes.jpg",
                label: "Custom Medicine Packaging",
        },
        {
                imageUrl:
                        "https://res.cloudinary.com/sireprinting/image/upload/v1600175056/gift-packaging-boxes.jpg",
                label: "Custom Pillow Packaging Box",
        },
        {
                imageUrl:
                        "https://res.cloudinary.com/sireprinting/image/upload/v1600175099/soap-packaging-boxes.jpg",
                label: "Gift Packaging Boxes",
        },
        {
                imageUrl:
                        "https://res.cloudinary.com/sireprinting/image/upload/v1600175140/medicine-packaging-boxes.jpg",
                label: "Custom Medicine Packaging",
        },
        {
                imageUrl:
                        "https://s3.amazonaws.com/sireprinting.com/categories/1667385932Custom-Tags.webp",
                label: "Custom Hang Tags",
        },
        {
                imageUrl:
                        "https://s3.amazonaws.com/sireprinting.com/categories/1667385890Woven-Patches.webp",
                label: "Woven Embroidered Patches",
        },
        {
                imageUrl:
                        "https://s3.amazonaws.com/sireprinting.com/categories/1667385978Eco-Packaging.webp",
                label: "Eco-Friendly Packaging",
        },
        {
                imageUrl:
                        "https://s3.amazonaws.com/sireprinting.com/categories/1667385396Rigid-Packaging.webp",
                label: "Rigid Boxes",
        },
];
const Hoverimgs = () => {
        return (
                <div className=" max-w-[1300px] mx-auto grid lg:grid-cols-4 grid-cols-2 md:grid-cols-4 lg:px-28  md:px-20 gap-2 py-10  ">
                        {hoverimgArr.map((v, i) => {
                                return (
                                        <Link key={i} href="#">
                                                <div className="text-center shadow-2xl lg:shadow-none">
                                                        <div className="overflow-hidden">
                                                                <div className="group relative ">
                                                                        <img src={v.imageUrl} alt={v.label} loading="lazy" />
                                                                        <div className=" absolute  top-0 left-0 lg:w-full w-full h-0 flex  justify-center items-center bg-black bg-opacity-50 opacity-5 group-hover:h-full group-hover:opacity-100 duration-500">
                                                                                <h2 className="text-sm lg:text-xl text-white ">
                                                                                        {v.label}
                                                                                </h2>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>
                                        </Link>
                                );
                        })}
                </div>
        );
};

export default function Images(props) {
        return (
                <>
                        <div className="flex justify-center lg:text-4xl text-2xl  py-7">
                                <h2 className="font-semibold">{props.heading}</h2>
                                <strong className="text-amber-500 ">&nbsp;{props.str}</strong>
                        </div>
                        <Advantages />

                        {/* hover images  */}
                        <h2 className="flex justify-center lg:text-4xl font-semibold mb-6 mt-9 text-2xl text-center">
                                Custom Packaging By Industry
                        </h2>
                        <div className="py-10">
                                <Image />
                        </div>
                        {/* simple imgs with text */}
                        <div className="my-3">
                                <h2 className="text-center text-4xl font-semibold text-black">
                                        Custom Box Styles
                                </h2>
                        </div>
                        <div className="overflow-x-hidden  ">
                                <Imgs />
                        </div>
                        {/* overlay on hover  */}
                        <div>
                                <h2 className="text-4xl text-center py-10 font-semibold text-black">
                                        Hot Selling Products
                                </h2>
                                <Hoverimgs />
                        </div>
                </>
        );
}

Images.propTypes = {
        heading: propTypes.string.isRequired,
        str: propTypes.string,
};
Images.defaultProps = {
        heading: "Enjoy Sireprinting",
        str: "PERKS",
};


// import React, { useState, useEffect } from "react";
// import propTypes from "prop-types";
// import { Link } from "react-router-dom";
// import { useParams } from 'react-router-dom';

// const Images = (props) => {
//         const [data, setData] = useState([]);
//         const [loading, setLoading] = useState(true);
//         const [error, setError] = useState(null);

//         const fetchEndpoint = async () => {
//                 try {
//                         const response = await fetch(`https://my-json-server.typicode.com/Nooh-Shoaib/homedata/products`);
//                         console.log("Response:", response);

//                         if (!response.ok) {
//                                 throw new Error("Failed to fetch data");
//                         }

//                         const jsonData = await response.json();
//                         console.log("Data:", jsonData);

//                         setData(jsonData.products[0]);
//                 } catch (error) {
//                         console.error("Error fetching data:", error.message);
//                         setError(error.message);
//                 } finally {
//                         setLoading(false);
//                 }
//         };

//         useEffect(() => {
//                 fetchEndpoint();
//         }, []);

//         if (loading) {
//                 return <p>Loading...</p>;
//         }

//         if (error) {
//                 return <p>Error: {error}</p>;
//         }

//         const { customPackaging, customBox, hotSelling } = data;


//         let advantages = [
//                 {
//                         imageUrl:
//                                 "https://s3.amazonaws.com/sireprinting.com/images/perks/design-min.webp",
//                         label: "Eco-Friendly",
//                 },
//                 {
//                         imageUrl:
//                                 "https://s3.amazonaws.com/sireprinting.com/images/perks/eco-min.webp",
//                         label: "Eco-Friendly",
//                 },
//                 {
//                         imageUrl:
//                                 "https://s3.amazonaws.com/sireprinting.com/images/perks/ink-min.webp",
//                         label: "Environmental Friendly Ink",
//                 },
//                 {
//                         imageUrl:
//                                 "https://s3.amazonaws.com/sireprinting.com/images/perks/short-run-min.webp",
//                         label: "Short Run",
//                 },
//                 {
//                         imageUrl:
//                                 "https://s3.amazonaws.com/sireprinting.com/images/perks/size-min.webp",
//                         label: "Custom Size & Style",
//                 },
//                 {
//                         imageUrl:
//                                 "https://s3.amazonaws.com/sireprinting.com/images/perks/price-min.webp",
//                         label: "Competitive Price",
//                 },
//                 {
//                         imageUrl:
//                                 "https://s3.amazonaws.com/sireprinting.com/images/perks/time-min.webp",
//                         label: "Fast Turnaround",
//                 },
//                 {
//                         imageUrl:
//                                 "https://s3.amazonaws.com/sireprinting.com/images/perks/delivery-min.webp",
//                         label: "Free Delivery",
//                 },
//         ];
//         const Advantages = () => {
//                 return (
//                         <div className="bg-white  flex justify-center items-center font-medium ">
//                                 <ul className="flex space-x-5">
//                                         <div className="  grid  lg:grid-cols-8 grid-cols-2 md:grid-cols-3  gap-2 lg:flex lg:justify-center space-x-7  justify-items-center lg:space-x-8">
//                                                 {advantages.map((v, i) => {
//                                                         return (
//                                                                 <div key={i} className="w-20 lg:w-24">
//                                                                         <img src={v.imageUrl} alt={v.label} loading="lazy" />
//                                                                         <div className="  ">
//                                                                                 <h2 className=" py-1 text-[0.8rem] text-black font-medium flex justify-center text-center">
//                                                                                         {v.label}
//                                                                                 </h2>
//                                                                         </div>
//                                                                 </div>
//                                                         );
//                                                 })}
//                                         </div>
//                                 </ul>
//                         </div>
//                 );
//         };


//         const Image = () => {
//                 return (
//                         <div className="max-w-[1425px] mx-auto grid lg:grid-cols-4 grid-cols-2 md:grid-cols-4 lg:px-20  md:px-20 gap-3 py-0 px-1">
//                                 {customPackaging.map((v, i) => {
//                                         // Check if productImages is defined and has at least one element
//                                         const productImage = v.productImages && v.productImages.length > 0 ? v.productImages[0] : null;

//                                         return (
//                                                 <Link key={i} to={`/product/${v.slug}`}>
//                                                         <div className="text-center  hover:scale-105 duration-500 hover:opacity-60 cursor-pointer">
//                                                                 <img src={productImage} alt={v.productTitle} loading="lazy" />
//                                                                 <div>
//                                                                         <h2 className="font-medium py-2 px-3 lg:py-4  text-[0.6rem] text-black lg:text-base  bg-amber-500">
//                                                                                 {v.productTitle}
//                                                                         </h2>
//                                                                 </div>
//                                                         </div>
//                                                 </Link>
//                                         );
//                                 })}
//                         </div>
//                 );
//         };

//         const Imgs = () => {
//                 return (
//                         <div className="max-w-[1425px] mx-auto grid lg:grid-cols-4 grid-cols-2 md:grid-cols-4 lg:px-20  md:px-20 gap-1.5 py-0 px-1 ">
//                                 {customBox.map((v, i) => {
//                                         return (
//                                                 <Link key={i} href="#">
//                                                         <div className="text-center ">
//                                                                 <div className="overflow-hidden">
//                                                                         <img src={v.productImage} alt={v.productTitle} loading="lazy" />
//                                                                 </div>
//                                                                 <div className=" bg-amber-500 ">
//                                                                         <button
//                                                                                 id="imgs"
//                                                                                 className="font-medium py-2 px-3 lg:py-4  text-[0.6rem] text-black  lg:text-sm"
//                                                                         >
//                                                                                 {v.productTitle}
//                                                                         </button>
//                                                                 </div>
//                                                         </div>
//                                                 </Link>
//                                         );
//                                 })}
//                         </div>
//                 );
//         };

//         const Hoverimgs = () => {
//                 return (
//                         <div className=" max-w-[1300px] mx-auto grid lg:grid-cols-4 grid-cols-2 md:grid-cols-4 lg:px-28  md:px-20 gap-2 py-10  ">
//                                 {hotSelling.map((v, i) => {
//                                         return (
//                                                 <Link key={i} href="#">
//                                                         <div className="text-center shadow-2xl lg:shadow-none">
//                                                                 <div className="overflow-hidden">
//                                                                         <div className="group relative ">
//                                                                                 <img src={v.productImage} alt={v.productTitle} loading="lazy" />
//                                                                                 <div className=" absolute  top-0 left-0 lg:w-full w-full h-0 flex  justify-center items-center bg-black bg-opacity-50 opacity-5 group-hover:h-full group-hover:opacity-100 duration-500">
//                                                                                         <h2 className="text-sm lg:text-xl text-white ">
//                                                                                                 {v.productTitle}
//                                                                                         </h2>
//                                                                                 </div>
//                                                                         </div>
//                                                                 </div>
//                                                         </div>
//                                                 </Link>
//                                         );
//                                 })}
//                         </div>
//                 );
//         };


//         return (
//                 <>
//                         <div className="flex justify-center lg:text-4xl text-2xl  py-7">
//                                 <h2 className="font-semibold">{props.heading}</h2>
//                                 <strong className="text-amber-500 ">&nbsp;{props.str}</strong>
//                         </div>
//                         <Advantages />

//                         {/* hover images  */}
//                         <h2 className="flex justify-center lg:text-4xl font-semibold mb-6 mt-9 text-2xl text-center">
//                                 Custom Packaging By Industry
//                         </h2>
//                         <div className="py-10">
//                                 <Image />
//                         </div>
//                         {/* simple imgs with text */}
//                         <div className="my-3">
//                                 <h2 className="text-center text-4xl font-semibold text-black">
//                                         Custom Box Styles
//                                 </h2>
//                         </div>
//                         <div className="overflow-x-hidden  ">
//                                 <Imgs />
//                         </div>
//                         {/* overlay on hover  */}
//                         <div>
//                                 <h2 className="text-4xl text-center py-10 font-semibold text-black">
//                                         Hot Selling Products
//                                 </h2>
//                                 <Hoverimgs />
//                         </div>
//                 </>
//         );
// }

// Images.propTypes = {
//         heading: propTypes.string.isRequired,
//         str: propTypes.string,
// };

// Images.defaultProps = {
//         heading: "Enjoy Sireprinting",
//         str: "PERKS",
// };

// export default Images;