import React, { useState } from 'react';
import Layout from '../../layout';
import ProductInfoSection from '../2ndpageComponents/ProductInfoSection';
import QuoteAdvantages from '../2ndpageComponents/QuoteAdvantages';
import SideTestimonials from '../2ndpageComponents/SideTestimonials';
import ImageWithBox from '../2ndpageComponents/ImageWithBox';
import Post from "../2ndpageComponents/relatedpost";

const postData = [
        {
                imgSrc: "https://s3.amazonaws.com/sireprinting.com/blogs/1646702216Custom%20Packaging%20Boxes.png",
                title: "Get Maximum Benefit From Cheap Custom Printed Packaging Boxes Wholesale",
                author: "    Custom Packaging Boxes",
                date: "08 Mar",
                info: "Imagine yourself in the supermarket, browsing the many things on the shelf, or recalling your most recent buy....",
        },
        {
                imgSrc: "https://s3.amazonaws.com/sireprinting.com/blogs/1698369858-eco-friendly-packaging-9-sustainable-packaging-ideas-for-2023.avif",
                title: "Eco-Friendly Packaging: 9 Sustainable Packaging Ideas For 2023",
                author: " Custom Retail Packaging",
                date: "27 Oct",
                info: "In an era where environmental consciousness is at an all-time high. Businesses are increasingly recognizing the importance of...",
        },
        {
                imgSrc: "https://s3.amazonaws.com/sireprinting.com/blogs/1698370311-advantages-of-rigid-boxes.avif",
                title: "Unlocking The Elegance: The Art And Advantages Of Rigid Boxes",
                author: " Rigid Boxes",
                date: "27 Oct",
                info: "When it comes to packaging, there's an art to it - an art that combines aesthetics, functionality, and...",
        },
        {
                imgSrc: "https://s3.amazonaws.com/sireprinting.com/blogs/1698967130-7-expert-tips-to-prevent-glass-breakage-with-custom-bottle-boxes.avif",
                title: "7 Expert Tips to Prevent Glass Breakage with Custom Bottle...",
                author: "   Soap Packaging Boxes",
                date: "02 Nov",
                info: "Glass bottles are a popular choice for packaging various products, such as beverages, perfumes, and skincare items, due...",
        },



];

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
                        "https://s3.amazonaws.com/sireprinting.com/products/1632959533sushi-boxes-sire-printing-05.png",
                label: "Sushi Boxes",
        },
        {
                imageUrl:
                        "https://s3.amazonaws.com/sireprinting.com/products/1632950613eye-brow-pencil-boxes-04.png",
                label: "Eyebrow Pencil Boxes",
        },
        {
                imageUrl:
                        "https://s3.amazonaws.com/sireprinting.com/products/1632951680Face-Serum-Boxes-Sire%20Printing%2001.png",
                label: "Face Serum Boxes",
        },
        {
                imageUrl:
                        "https://s3.amazonaws.com/sireprinting.com/products/1628204613Soap%20Sleeve%20Packaging%20Sire%20Printing%2001.png",
                label: "Custom Printed Soap Sleeves",
        },
        {
                imageUrl:
                        "https://res.cloudinary.com/sireprinting/image/upload/v1600715245/Half%20Slotted%20Container.jpg",
                label: "Half Slotted Container",
        },
        {
                imageUrl:
                        "https://res.cloudinary.com/sireprinting/image/upload/v1602285970/cbd-isolate-boxes.png",
                label: "CBD Isolate Boxes",
        },
        {
                imageUrl:
                        "https://res.cloudinary.com/sireprinting/image/upload/v1602287217/cbd-lollipop-boxes.png",
                label: "CBD Lollipop Boxes",
        },
       
];


const Images = () => {
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
        'https://s3.amazonaws.com/sireprinting.com/products/1632957575Mug%20Boxes%20Sire%20Printing%2001.png',
        'https://s3.amazonaws.com/sireprinting.com/products/1632957575Mug%20Boxes%20Sire%20Printing%2002.png-gallery1',
        'https://s3.amazonaws.com/sireprinting.com/products/1632957576Mug%20Boxes%20Sire%20Printing%2003.png-gallery2',
        'https://s3.amazonaws.com/sireprinting.com/products/1632957576Mug%20Boxes%20Sire%20Printing%2004.png-gallery3',
        'https://s3.amazonaws.com/sireprinting.com/products/1632957576Mug%20Boxes%20Sire%20Printing%2005.png-gallery4',

];
const MugBoxes = () => {
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
                        <Images />
                       
                        <h2 className=" flex justify-center my-12 text-4xl font-semibold">Related Blogs</h2>
                        <div className=" lg:max-w-[1320px] mx-auto grid lg:grid-cols-2 grid-cols-1 md:grid-cols-4  gap-y-7  gap-x-12 md:px-20  ">
                                {postData.map((post, index) => (
                                        <Post key={index} content={post} />
                                ))}
                        </div>
                </Layout>
        );
};

export default MugBoxes;