import React, { useState, useEffect } from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
const ImageGallery = (props) => {
        const [imagesArr, setImagesArr] = useState([]);
        const [customBoxArr, setCustomBoxArr] = useState([]);
        const [hotSellingArr, setHotSellingArr] = useState([]);
        const [advantages, setAdvantages] = useState([]);

        useEffect(() => {
                fetch("https://my-json-server.typicode.com/Nooh-Shoaib/homedata/images")
                        .then((response) => response.json())
                        .then((data) => {
                                setImagesArr(data[0].customPackaging);
                                setCustomBoxArr(data[0].customBox);
                                setHotSellingArr(data[0].hotSelling);
                                setAdvantages(data[0].advantages);

                        });
        }, []);

        const Advantages = () => {
                return (

                        <div className="bg-white  flex justify-center items-center font-medium ">
                                <ul className="flex space-x-5">
                                        <div className="  grid  lg:grid-cols-8 grid-cols-2 md:grid-cols-3  gap-2 lg:flex lg:justify-center space-x-7  justify-items-center lg:space-x-8">
                                                {advantages.map((v, i) => {
                                                        return (

                                                                <div key={i} className="w-20 lg:w-24">
                                                                        <img src={v.productImage} alt={v.productTitle} loading="lazy" />
                                                                        <div className="  ">
                                                                                <h2 className=" py-1 text-[0.8rem] text-black font-medium flex justify-center text-center">
                                                                                        {v.productTitle}
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



        const ProductGrid = ({ products }) => {
                return (

                        <div className="max-w-[1425px] mx-auto grid lg:grid-cols-4 grid-cols-2 md:grid-cols-4 lg:px-20 md:px-20 gap-3 py-0 px-1">
                                {products.map((product, i) => (

                                        <Link key={i} className="text-center  hover:scale-105 duration-500 hover:opacity-60 cursor-pointer">
                                                <img src={product.productImage} alt={product.productTitle} loading="lazy" />
                                                <div>
                                                        <h2 className="font-medium py-2 px-3 lg:py-4 text-[0.6rem] text-black lg:text-base bg-amber-500">
                                                                {product.productTitle}
                                                        </h2>
                                                </div>
                                        </Link>
                                ))}

                        </div>
                );
        };



        const HotSelling = ({ hotSellingArr }) => {
                return (

                        <div className="max-w-[1300px] mx-auto grid lg:grid-cols-4 grid-cols-2 md:grid-cols-4 lg:px-28 md:px-20 gap-2 py-10">
                                {hotSellingArr.map((product, i) => (

                                        <Link key={i} href="#" className="text-center shadow-2xl lg:shadow-none group">
                                                <div className="overflow-hidden relative">
                                                        <img src={product.productImage} alt={product.productTitle} loading="lazy" />
                                                        <div className=" absolute  top-0 left-0 lg:w-full w-full h-0 flex  justify-center items-center bg-black bg-opacity-50 opacity-5 group-hover:h-full group-hover:opacity-100 duration-500">
                                                                <h2 className="text-sm lg:text-xl text-white">{product.productTitle}</h2>
                                                        </div>
                                                </div>
                                        </Link>
                                ))}

                        </div>
                );
        };



        return (
                <>
                        <h2 className="flex justify-center lg:text-4xl text-2xl  py-7 font-semibold text-black">
                                {props.heading}

                                <span className="font-bold ">&nbsp;{props.str}</span>
                        </h2>
                        <Advantages />
                        <div>
                                <h2 className="text-4xl text-center py-10 font-semibold text-black">Custom Packaging By Industry</h2>
                                <ProductGrid products={imagesArr} />
                        </div>
                        <div>
                                <h2 className="text-4xl text-center py-10 font-semibold text-black">Custom Box Styles</h2>
                                <ProductGrid products={customBoxArr} />
                        </div>
                        <div>
                                <h2 className="text-4xl text-center py-10 font-semibold text-black">
                                        Hot Selling Products
                                </h2>
                                <HotSelling hotSellingArr={hotSellingArr} />
                        </div>
                </>
        );
};

ImageGallery.propTypes = {
        heading: propTypes.string.isRequired,
        str: propTypes.string,
};

ImageGallery.defaultProps = {
        heading: "Enjoy Sireprinting",
        str: "PERKS",
};

export default ImageGallery;

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