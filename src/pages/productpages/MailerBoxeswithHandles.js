import React, { useState } from 'react';
import Layout from '../../layout';
import { Link } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ProductInfoSection from '../2ndpageComponents/ProductInfoSection';
import QuoteAdvantages from '../2ndpageComponents/QuoteAdvantages';
import SideTestimonials from '../2ndpageComponents/SideTestimonials';
import ImageWithBox from '../2ndpageComponents/ImageWithBox';


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

const MyComponent = () => {
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


let imagesArr = [
        {
                imageUrl:
                        "https://s3.amazonaws.com/sireprinting.com/products/1640140622Small%20Mailer%20Boxes%20Sire%20Printing%2001.png",
                label: "Small Mailer Boxes",
        },
        {
                imageUrl:
                        "https://s3.amazonaws.com/sireprinting.com/products/1697921214-one-piece-mailer-boxes-sire-printing-4.avif",
                label: "One Piece Mailer Boxes",
        },

];


const Image = () => {
        return (<>
                <h2 className='text-4xl text-center font-medium mt-5'>Related Products</h2>
                <div className="max-w-[1375px] mx-auto grid lg:grid-cols-4 grid-cols-2 md:grid-cols-4 lg:px-20  md:px-20 gap-7 pb-16 mt-5 px-1">
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
        </>
        );
};



const images = [
        'https://s3.amazonaws.com/sireprinting.com/products/1665622319Mailer-Boxes-with-Handle-Sire%20Printing%2001.png',
        'https://s3.amazonaws.com/sireprinting.com/products/1665622320Mailer-Boxes-with-Handle-Sire%20Printing%2002.png-gallery1',
        'https://s3.amazonaws.com/sireprinting.com/products/1665622320Mailer-Boxes-with-Handle-Sire%20Printing%2003.png-gallery2',
        'https://s3.amazonaws.com/sireprinting.com/products/1665622320Mailer-Boxes-with-Handle-Sire%20Printing%2004.png-gallery3',
        'https://s3.amazonaws.com/sireprinting.com/products/1665622320Mailer-Boxes-with-Handle-Sire%20Printing%2005.png-gallery4',


];
const MailerBoxeswithHandles = () => {
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
                                <h2 className='text-4xl font-medium text-center'>Kraft Boxes with Window</h2>
                                <div className='text-center'>
                                        <i className="fa-solid fa-star text-yellow-300"></i>
                                        <i className="fa-solid fa-star text-yellow-300"></i>
                                        <i className="fa-solid fa-star text-yellow-300"></i>
                                        <i className="fa-solid fa-star text-yellow-300"></i>
                                        <i className="fa-solid fa-star text-yellow-300"></i>
                                </div>
                        </div>
                        <div className="flex my-10 container mx-72   ">

                                <div className="custom-carousel border">
                                        <div className="main-image ">
                                                <img src={selectedImage} alt="Main Image" className="hover:scale-110 duration-500 cursor-pointer" />
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
                                                                <img src={image} alt={`Thumbnail ${index}`} />
                                                        </div>
                                                ))}
                                        </div>
                                </div>
                                <div className='ml-10'>
                                        <QuoteAdvantages />
                                </div>
                        </div>
                        <div className='flex my-6  container mx-60  '>
                                <h2 className='bg-amber-500 text-2xl rounded pr-80 pl-3 py-2  text-white font-medium mr-5 text-start'>Small Pillow Boxes Specifications</h2>
                                <h2 className='bg-amber-500 text-2xl rounded px-28 py-2 text-white font-medium  '>Customer Feedback</h2>
                        </div>
                        <div className='flex mr-40'>
                                <MyComponent />
                                <SideTestimonials />
                        </div>
                        <div>
                                <ImageWithBox />
                        </div>
                        <Image />
                      
                </Layout>
        );
};

export default MailerBoxeswithHandles;