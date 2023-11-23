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
                        "https://s3.amazonaws.com/sireprinting.com/products/1627776386CBD-Bath-Bomb-Boxes-01.png",
                label: "CBD Bath Bomb Boxes",
        },
        {
                imageUrl:
                        "https://s3.amazonaws.com/sireprinting.com/products/1627830898CBD-Concentrate-Boxes-SirePrinting%2001.png",
                label: "CBD Concentrate Boxes",
        },
        {
                imageUrl:
                        "https://s3.amazonaws.com/sireprinting.com/products/1627779425CBD-Essential-Oil-Boxes-01.png",
                label: "CBD Essential Oil Boxes",
        },
        {
                imageUrl:
                        "https://res.cloudinary.com/sireprinting/image/upload/v1601945322/e-liquid-boxes.png",
                label: "E Liquid Boxes",
        },
        {
                imageUrl:
                        "https://s3.amazonaws.com/sireprinting.com/products/1627832313Medical-Cannabis-Boxes-SirePrinting%2001.png",
                label: "Medical Cannabis Boxes",
        },
        {
                imageUrl:
                        "https://s3.amazonaws.com/sireprinting.com/products/1640139160CBD%20Chocolate%20Boxes%20Sire%20Printing%2001.png",
                label: "CBD Chocolate Boxes",
        },

        {
                imageUrl:
                        "https://s3.amazonaws.com/sireprinting.com/products/1640222592Vape%20Charger%20Packaging%20SirePrinting%2001.png ",
                label: "Vape Battery Charger Boxes ",
        },

        {
                imageUrl:
                        "https://s3.amazonaws.com/sireprinting.com/products/1640226703Raw%20CBD%20Oil%20Box%20Packaging%20Sire%20Printing%2001.png",
                label: "Raw CBD Oil Boxes ",
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
        'https://s3.amazonaws.com/sireprinting.com/products/1627776830SirePrinting-Tincture-Boxes-01.png ',
        'https://s3.amazonaws.com/sireprinting.com/products/1627776830SirePrinting-Tincture-Boxes-02.png-gallery1 ',
        'https://s3.amazonaws.com/sireprinting.com/products/1627776830SirePrinting-Tincture-Boxes-03.png-gallery2 ',
        'https://s3.amazonaws.com/sireprinting.com/products/1627776830SirePrinting-Tincture-Boxes-04.png-gallery3 ',
        'https://s3.amazonaws.com/sireprinting.com/products/1627776831SirePrinting-Tincture-Boxes-05.png-gallery4 ',
        'https://s3.amazonaws.com/sireprinting.com/products/1627776831SirePrinting-Tincture-Boxes-06.png-gallery5 ',
        'https://s3.amazonaws.com/sireprinting.com/products/1627776831SirePrinting-Tincture-Boxes-07.png-gallery6 ',
       
       ];
const CustomTinctureBoxes = () => {
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
                                                        <button onClick={handlePrevious} disabled={isFirstImage}  className="prev-button"><i className="fa-solid fa-less-than text-3xl font-thin text-gray-400 hover:text-black"></i></button>
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
                </Layout>
        );
};

export default CustomTinctureBoxes;