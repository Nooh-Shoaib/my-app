import React, { useState } from 'react';
import Layout from '../../layout';
import ProductInfoSection from '../2ndpageComponents/ProductInfoSection';
import QuoteAdvantages from '../2ndpageComponents/QuoteAdvantages';
import SideTestimonials from '../2ndpageComponents/SideTestimonials';
import ImageWithBox from '../2ndpageComponents/ImageWithBox';
import Post from "../2ndpageComponents/relatedpost";
import { Link } from "react-router-dom";

// const postData = [
//         {
//                 imgSrc: "https://s3.amazonaws.com/sireprinting.com/blogs/1698111570-8-great-reasons-for-picking-eye-catching-custom-soap-boxes.avif",
//                 title: "8 Great Reasons For Picking Eye-Catching Custom Soap Boxes",
//                 author: " Soap Packaging Boxes",
//                 date: "24 Oct",
//                 info: "In the world of soap packaging, the choices you make can significantly impact your brand's success. Custom Soap...",
//         },

// ];

const productInfoData = [
        {
                title: 'Box Style',
                description: 'All styles available including Reverse Tuck, Sleeve & Tray, <br/>Gable Style, Pop Display Style, Seal End, Bakery Style.',
        },
        {
                title: 'Dimensions',
                description: 'Custom Sizes Available',
        },
        {
                title: 'Quantity',
                description: '50',
        },
        {
                title: 'Included Options',
                description: 'Perforation, Die Cutting, Pre-Scored, Pre-Glued',
        },
        {
                title: 'Additional Options',
                description: 'Perforation, PVC Window Patch, Cardboard/Foam Inserts, Raised<br/> Ink, Foil Stamping, Spot UV, Embossing, Debossing.',
        },
        {
                title: 'Proof',
                description: 'Flat View, 3D Mock-up, Physical Sampling (Paid Request)',
        },
        {
                title: 'Shipping',
                description: 'Shipped via DHL, FedEx & UPS',
        },
        {
                title: 'Preferred Design File',
                description:
                        'You can send us your design files in any vector base format like <br/> AI, PDF, PSD, EPS, JPG or TIFF format.',
        },
        {
                title: 'Assembling',
                description: 'Pre-Scored, Pre-Glued, & Shipping Flat',
        },
];

const MyComponents = () => {
        return (
                <div>
                        {productInfoData.map((data, index) => (
                                <ProductInfoSection
                                        key={index}
                                        title={data.title}
                                        description={data.description}
                                />
                        ))}
                </div>
        );
};


let imagesproduct = [
        {
                imageUrl:
                        "https://s3.amazonaws.com/sireprinting.com/products/1627778089CBD-Stickers-SirePrinting-01.png",
                label: "CBD Stickers",
        },
        {
                imageUrl:
                        "https://s3.amazonaws.com/sireprinting.com/products/1632943546Custom%20Vinyl%20Stickers%20Sire%20Printing%2001.png",
                label: "Custom Vinyl Stickers",
        },
        {
                imageUrl:
                        "https://s3.amazonaws.com/sireprinting.com/products/1666569720Die-Cut-Stickers-Sire-Printing06.png",
                label: "Die Cut Stickers",
        },
        {
                imageUrl:
                        "https://s3.amazonaws.com/sireprinting.com/products/1666572115Double%20Sided%20Stickers%20SirePrinting%2001.png",
                label: "Double Sided Stickers",
        },
        {
                imageUrl:
                        "https://s3.amazonaws.com/sireprinting.com/products/1632957797Pro-Cut-Stickers-SirePrinting01.png",
                label: "Pro Cut Stickers",
        },
        {
                imageUrl:
                        "https://res.cloudinary.com/sireprinting/image/upload/v1600204695/lettering-stickers.png",
                label: "Lettering Stickers",
        },
        
];


const RelatedProduct = () => {
        return (<>
                <h2 className='text-4xl text-center font-medium mt-5'>Related Products</h2>
                <div className="max-w-[1375px] mx-auto grid lg:grid-cols-4 grid-cols-2 md:grid-cols-4 lg:px-20 md:px-20 gap-7 pb-16 mt-5 px-1">
                        {imagesproduct.map((v, i) => {
                                return (
                                        <div key={i} className="text-center hover:scale-105 duration-500 hover:opacity-60 cursor-pointer">
                                                <img src={v.imageUrl} alt={v.label} loading="lazy" />
                                                <div>
                                                        <h2 className="font-medium py-2 px-3 lg:py-4 text-[0.6rem] text-black lg:text-base bg-amber-500">
                                                                {" "}
                                                                {v.label}
                                                        </h2>
                                                </div>
                                        </div>
                                );
                        })}
                </div>
        </>
        );
};



const images = [
        
        'https://s3.amazonaws.com/sireprinting.com/products/1632937304Clear%20Stickers%20SirePrinting%2001.png',
        'https://s3.amazonaws.com/sireprinting.com/products/1632937305Clear%20Stickers%20SirePrinting%2002.png-gallery1',
        'https://s3.amazonaws.com/sireprinting.com/products/1632937305Clear%20Stickers%20SirePrinting%2003.png-gallery2',
        'https://s3.amazonaws.com/sireprinting.com/products/1632937338Clear%20Stickers%20SirePrinting%2004.png-gallery1',

];


const ClearStickers = () => {
       

        const [selectedImage, setSelectedImage] = useState(images[0]);
        const [selectedIndex, setSelectedIndex] = useState(0);

        const handleImageClick = (image, index) => {
                setSelectedImage(image);
                setSelectedIndex(index);
        };

        const handlePrevious = () => {
                const newIndex = (selectedIndex - 1 + images.length) % images.length;
                setSelectedImage(images[newIndex]);
                setSelectedIndex(newIndex);
        };

        const handleNext = () => {
                const newIndex = (selectedIndex + 1) % images.length;
                setSelectedImage(images[newIndex]);
                setSelectedIndex(newIndex);
        };

        const isFirstImage = selectedIndex === 0;
        const isLastImage = selectedIndex === images.length - 1;



        return (

                <Layout>
                        <div className='mt-10'>
                                <h2 className='text-4xl font-medium text-center'>Custom CBD Roll On Boxes</h2>
                                <div className='text-center'>
                                        <i className="fa-solid fa-star text-yellow-300"></i>
                                        <i className="fa-solid fa-star text-yellow-300"></i>
                                        <i className="fa-solid fa-star text-yellow-300"></i>
                                        <i className="fa-solid fa-star text-yellow-300"></i>
                                        <i className="fa-solid fa-star text-yellow-300"></i>
                                </div>
                        </div>
                        <div className="flex my-10 justify-center ">

                                <div className="custom-carousel border">
                                        <div className="main-image ">
                                                <img src={selectedImage} alt="Main Image" className="hover:scale-125 duration-500 cursor-default " />
                                                <div className="buttons">
                                                        <button onClick={handlePrevious} disabled={isFirstImage} className="prev-button"><i className="fa-solid fa-less-than text-3xl font-thin text-gray-400 hover:text-black"></i></button>
                                                        <button onClick={handleNext} disabled={isLastImage} className="next-button"><i className="fa-solid fa-greater-than text-3xl font-thin text-gray-400 hover:text-black"></i></button>
                                                </div>
                                        </div>
                                        <div className="thumbnails">
                                                {images.map((image, index) => (
                                                        <div
                                                                key={index}
                                                                className={`thumbnail ${index === selectedIndex ? 'active' : ''}`}
                                                                onClick={() => handleImageClick(image, index)}
                                                        >
                                                                <img
                                                                        src={image}
                                                                        alt={`Thumbnail ${index}`}
                                                                />
                                                        </div>
                                                ))}
                                        </div>
                                </div>
                                <div className='pl-10'>
                                        <QuoteAdvantages />
                                </div>
                        </div>
                        <div className='flex my-6 justify-center '>
                                <h2 className='bg-amber-500 text-2xl rounded pr-80 pl-3 py-2 text-white font-medium mr-5 text-start'>Small Pillow Boxes Specifications</h2>
                                <h2 className='bg-amber-500 text-2xl rounded px-28 py-2 text-white font-medium '>Customer Feedback</h2>
                        </div>
                        <div className='flex mr-40'>
                                <MyComponents />
                                <SideTestimonials />
                        </div>
                      
                        <div>
                                <ImageWithBox />
                        </div>
                        <RelatedProduct />

                        {/* <h2 className=" flex justify-center my-12 text-4xl font-semibold">Related Blogs</h2>
                        <div className=" lg:max-w-[1320px] mx-auto grid lg:grid-cols-2 grid-cols-1 md:grid-cols-4  gap-y-7  gap-x-12 md:px-20  ">
                                {postData.map((post, index) => (
                                        <Post key={index} content={post} />
                                ))}
                        </div> */}
                </Layout>
        );
};

export default ClearStickers;