import React, { useState } from 'react';
import Layout from '../../layout';
import ProductInfoSection from '../2ndpageComponents/ProductInfoSection';
import QuoteAdvantages from '../2ndpageComponents/QuoteAdvantages';
import SideTestimonials from '../2ndpageComponents/SideTestimonials';
import ImageWithBox from '../2ndpageComponents/ImageWithBox';
import Post from "../2ndpageComponents/relatedpost";
import { Link } from "react-router-dom";

const postData = [
        {
                imgSrc: "https://s3.amazonaws.com/sireprinting.com/blogs/1698964813-5-best-options-and-methods-for-modern-mailer-boxes.avif",
                title: "5 Best Options And Methods For Modern Mailer Boxes",
                author: " Custom Packaging Boxes",
                date: "02 Nov",
                info: "In a world where e-commerce and online shopping have become the norm, businesses are constantly looking for ways...",
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


let imageproduct = [
        {
                imageUrl:
                        "https://res.cloudinary.com/sireprinting/image/upload/v1599826131/gable-box.jpg",
                label: "Gable Box",
        },

        {
                imageUrl:
                        "https://res.cloudinary.com/sireprinting/image/upload/v1599826214/paper-brief-case.jpg",
                label: "Paper Brief Case",
        },

        {
                imageUrl:
                        "https://res.cloudinary.com/sireprinting/image/upload/v1600708221/Bookend%20Boxes.jpg",
                label: "Bookend Boxes",
        },

        {
                imageUrl:
                        "https://res.cloudinary.com/sireprinting/image/upload/v1600711389/Foot%20Lock%20Tray.jpg",
                label: "Foot Lock Tray",
        },

        {
                imageUrl:
                        "https://res.cloudinary.com/sireprinting/image/upload/v1600714643/Gravity%20Feed%20Dispenser%20Box.jpg",
                label: "Gravity Feed Dispenser Box",
        },

        {
                imageUrl:
                        "https://res.cloudinary.com/sireprinting/image/upload/v1600715245/Half%20Slotted%20Container.jpg",
                label: "Half Slotted Container",
        },

        {
                imageUrl:
                        "https://res.cloudinary.com/sireprinting/image/upload/v1600717619/Perforated%20Dispenser%20Box.jpg",
                label: "Perforated Dispenser Style Boxes",
        },
        {
                imageUrl:
                        "https://res.cloudinary.com/sireprinting/image/upload/v1600728847/Two%20Piece%20Box.jpg",
                label: "Two Piece Box",
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

        'https://res.cloudinary.com/sireprinting/image/upload/v1599825711/roll-end-tuck-top-box.jpg',
        'https://res.cloudinary.com/sireprinting/image/upload/v1600704359/roll-end-tuck-top-box-gallery1.jpg',
        'https://res.cloudinary.com/sireprinting/image/upload/v1600704360/roll-end-tuck-top-box-gallery2.jpg',

];


const RollEndTuckTopBoxes = () => {
        const [selectedImageIndex, setSelectedImageIndex] = useState(null);

        const openLightbox = (index) => {
                setSelectedImageIndex(index);
        };

        const closeLightbox = () => {
                setSelectedImageIndex(null);
        };

        const pageTitle = "Related Portfolio";


        const portimage = [

                ' https://s3.amazonaws.com/sireprinting.com/portfolios/1697651037-mailer-boxes-for-products-sire-printing.avif',
                ' https://s3.amazonaws.com/sireprinting.com/portfolios/1697653068-mailer-boxes-with-custom-inserts-sire-printing.avif',
                ' https://s3.amazonaws.com/sireprinting.com/portfolios/1697936552-cardnoard-mailer-boxes-sire-printing.avif',
                ' https://s3.amazonaws.com/sireprinting.com/portfolios/1697650949-mailer-boxes-with-diecut-inserts-sire-printing.avif',

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
                        <div className='mx-32 my-10 '>
                                <h2 className='text-3xl font-semibold pb-4'>
                                        Get more Brand Recognition & Crazy Sales With Our Custom Incense Boxes</h2>

                                <p className='leading-6'>Incense sticks are the most popular and diversified aroma products worldwide, particularly in the US. People enjoy lighting incense sticks during special events such as religious and cultural rituals to fill the air with pleasant scents, at the burial, for regular meditation, and in their apartments to create a nice, scented environment. As a result of this widespread use of the item, it is now bulk produced. </p>
                                <p className='leading-6'>ISuppliers of incense sticks are continually looking for effective ways to protect and pack their incense sticks so that they get to the customers in the best possible condition and scent. The easiest way to address these goals and issues is with customized incense stick boxes. For several enterprises, the storage and packaging of various incense items are crucial. This product's structure makes it extremely sensitive to the atmosphere. Because of this, manufacturers make incense boxes with extreme care and attention to maintain the right flavor of the incense. Professionals keep checking on the quality of the product when packaged until it is in the palms of the clients. To accommodate the majority of incense items, one can alter Custom Incense Boxes. These boxes can be sufficiently prepared to maintain the product's unique structure and fragrance in optimal condition.</p>


                                <h2 className='text-2xl font-semibold'>Get Custom Incense Packaging For More Brand Recognition</h2>
                                <p className='leading-6	'>A product's appearance is essential and progressively used as a promotional tactic. Your products will receive the attention you expect if it appears fascinating and elegant. Customers get attracted by the appealing patterns of incense stick packaging boxes. Custom incense boxes successfully and efficiently market your product. Get excellently crafted customized incense packaging boxes from SirePrinting with eye-catching patterns and top-notch graphics to grab clients' attention immediately and persuade them to choose your incense over competitive offerings. </p>
                                <p className='leading-6	'>Spot UV assists in increasing the visibility of your embossed company name and logo so that people quickly identify your product on store shelves and recognize it. Curious! Where can you get custom incense packaging boxes with such finishing possibilities that serve as an ideal branding tool for selling your products, drawing the attention of potential customers right away, and raising the worth of your brand? The Sire Printing packaging is the solution. Use the services of our print specialists to give high-end finishing, like Matte/Gloss, to your custom incense boxes so that your fragrance-emitting products seem highly professional.</p>
                                <p className='leading-6'>Our dedicated experts collaborate with you to design custom packaging incense boxes with eye-catching styles, captivating ideas, and stunning drawings that glamorize the appearance of your fragrance-producing products. </p>

                                <h2 className='text-2xl font-semibold'>Get Custom Incense Boxes with Your Favorite Designs</h2>
                                <p className='leading-6	'>Spot UV assists in increasing the visibility of your embossed company name and logo so that people quickly identify your product on store shelves and recognize it. The possibilities for packing include selecting materials, box designs, thicknesses, and specifications. All of these possibilities for packaging development are up to you. With these choices, you may create incense packaging with the endurance, size, and shape you desire. You can choose from a variety of customization options as well. Gloss, matte, spot UV, soft-touch, and various other options are available. Custom incense boxes with excellent finishes can raise the quality of your product. You can send us your designs to get a more personalized experience. </p>

                                <h2 className='text-2xl font-semibold'>Incense Boxes Wholesale Order</h2>
                                <p className='leading-6	'>Sire Printing provides unmatched quality digital and specially designed printing services by employing a range of box raw materials, styles, and shapes to bring all of your Custom Incense Stick Packaging Boxes artwork and pictures into existence. We are the only packaging supplier in the industry to have established minimum and reasonable charges, including both incense boxes wholesale and retail orders.</p>

                                <h2 className='text-2xl font-semibold'>Contact Us To Get Environment Friendly Incense Boxes</h2>
                                <p className='leading-6	'>Sire Printing is well-known for providing services that are focused on excellence. We are always available to help you with printing and packaging. Talented graphic experts and the manufacturing staff provide support throughout personalization. Using an environment-friendly approach, we make incense boxes with only the best packaging materials. You need a packaging provider like Sire Printing to endure in this competitive market. </p>
                                <p className='leading-6	'>You can get a free quote on our website or contact us at support@sireprinting.com. We provide free shipping all over the United States for Incense boxes wholesale and retail orders.</p>

                        </div>
                        <h2 className=" flex justify-center my-12 text-4xl font-semibold">Related Blogs</h2>
                        <div className=" lg:max-w-[1320px] mx-auto grid lg:grid-cols-2 grid-cols-1 md:grid-cols-4  gap-y-7  gap-x-12 md:px-20  ">
                                {postData.map((post, index) => (
                                        <Post key={index} content={post} />
                                ))}
                        </div>
                </Layout>
        );
};

export default RollEndTuckTopBoxes;