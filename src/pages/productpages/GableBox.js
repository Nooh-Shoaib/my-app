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


let imageproduct = [
        {
                imageUrl:
                        "https://res.cloudinary.com/sireprinting/image/upload/v1599825711/roll-end-tuck-top-box.jpg",
                label: "Roll End Tuck Top Boxes",
        },
        
        {
                imageUrl:
                        "https://res.cloudinary.com/sireprinting/image/upload/v1599825963/hexagon-box.jpg",
                label: "Hexagon Box",
        },
        
        {
                imageUrl:
                        "https://res.cloudinary.com/sireprinting/image/upload/v1600705453/sleeve-and-tray-box.jpg",
                label: "Sleeve & Tray Box",
        },
        
        {
                imageUrl:
                        "https://res.cloudinary.com/sireprinting/image/upload/v1600707115/4%20Corner%20Box.jpg",
                label: "4 Corner Box",
        },
        
        {
                imageUrl:
                        "https://res.cloudinary.com/sireprinting/image/upload/v1600708221/Bookend%20Boxes.jpg",
                label: "Bookend Boxes",
        },
        
        {
                imageUrl:
                        "https://res.cloudinary.com/sireprinting/image/upload/v1600708742/Double%20Wall%20Lid.jpg",
                label: "Double Wall Lid",
        },
        
        {
                imageUrl:
                        "https://res.cloudinary.com/sireprinting/image/upload/v1600710733/Fence%20Partitions.jpg",
                label: "Fence Partitions",
        },
        {
                imageUrl:
                        "https://res.cloudinary.com/sireprinting/image/upload/v1600717619/Perforated%20Dispenser%20Box.jpg",
                label: "Perforated Dispenser Style Boxes",
        },
        
];


// const shuffleArray = (array) => {
//         const newArray = [...array];
//         for (let i = newArray.length - 1; i > 0; i--) {
//           const j = Math.floor(Math.random() * (i + 1));
//           [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
//         }
//         return newArray;
//       };

//       const RelatedProduct = () => {
//         // Shuffle the array on component mount
//         const shuffledProducts = shuffleArray(imageproduct);

const RelatedProduct = () => {
        return (<>
                <h2 className='text-4xl text-center font-medium mt-5'>Related Products</h2>
                <div className="max-w-[1375px] mx-auto grid lg:grid-cols-4 grid-cols-2 md:grid-cols-4 lg:px-20 md:px-20 gap-7 pb-16 mt-5 px-1">
                        {imageproduct.map((v, i) => {
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

        'https://res.cloudinary.com/sireprinting/image/upload/v1599826131/gable-box.jpg',
        'https://res.cloudinary.com/sireprinting/image/upload/v1600705068/gable-box-gallery1.jpg',
        'https://res.cloudinary.com/sireprinting/image/upload/v1600705070/gable-box-gallery2.jpg',
        

];


const GableBox = () => {
        const [selectedImageIndex, setSelectedImageIndex] = useState(null);

        const openLightbox = (index) => {
                setSelectedImageIndex(index);
        };

        const closeLightbox = () => {
                setSelectedImageIndex(null);
        };

        const pageTitle = "Related Portfolio";


        const portimage = [

                'https://s3.amazonaws.com/sireprinting.com/portfolios/1697658398-custom-printed-gable-boxes-sire-printing.avif',

        ];


        const goToPreviousImage = () => {
                setSelectedImageIndex((prevIndex) =>
                        prevIndex > 0 ? prevIndex - 1 : portimage.length - 1
                );
        };

        const goToNextImage = () => {
                setSelectedImageIndex((prevIndex) =>
                        prevIndex < portimage.length - 1 ? prevIndex + 1 : 0
                );
        };

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
                        <div className=" max-w-[1400px] mx-auto">
                                <div className="   grid lg:grid-cols-4 grid-cols-2 md:grid-cols-4 lg:px-28  md:px-20 gap-6 py-10  ">
                                        {portimage.map((image, index) => (<>
                                                <div key={index} className="cursor-pointer" onClick={() => openLightbox(index)}>
                                                        <img src={image} alt={`Image ${index}`} />
                                                </div>

                                        </>
                                        ))}
                                </div>


                                {selectedImageIndex !== null && (
                                        <div className="  fixed top-0 left-0 right-0 bottom-0  z-50 max-w-[100%] max-h-[100vh] overflow-auto flex justify-center items-center bg-black bg-opacity-80">
                                                <div className='grid grid-cols-1 space-y-32 absolute top-50 left-96'>
                                                        <button className='  bg-amber-500 rounded text-lg font-medium text-white rotate-90'><Link to='https://api.whatsapp.com/send/?phone=%2B14109468181&text&type=phone_number&app_absent=0'>Whatsapp Quote</Link></button>
                                                        <button className='bg-amber-500 rounded text-lg font-medium text-white rotate-90'>Get a Free Quote
                                                        </button>
                                                </div>
                                                <span onClick={closeLightbox}>
                                                        <i className="fa-solid fa-xmark text-2xl  absolute top-10 right-12 cursor-pointer text-white"></i>
                                                </span>

                                                <img src={portimage[selectedImageIndex]} alt={`Image ${selectedImageIndex}`} className='max-w-[100%] max-h-[80%]' />

                                                <button className="	absolute top-[350px] left-[480px] " onClick={goToPreviousImage}>
                                                        <i className="fa-solid fa-chevron-left text-6xl opacity-75 hover:opacity-100"></i>
                                                </button>
                                                <button className="right-button absolute top-[350px] right-[480px] " onClick={goToNextImage}>
                                                        <i className="fa-solid fa-chevron-right text-6xl opacity-75 hover:opacity-100"></i>
                                                </button>
                                        </div>
                                )}
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

export default GableBox;