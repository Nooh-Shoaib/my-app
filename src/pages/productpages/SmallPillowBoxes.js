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
    description: 'All Styles Available',
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
    description: 'Gloss/Matte Lamination, Die Cutting, Pre-Scored, Pre-Glued',
  },
  {
    title: 'Additional Options',
    description: 'Spot UV, Hot Foil Stamping, Raised Ink, Embossing',
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
      "https://s3.amazonaws.com/sireprinting.com/products/1632879554Custom%20Pillow%20Boxes%20Sire%20Printing%2006.png",
    label: "Pillow Boxes",
  },
  {
    imageUrl:
      "https://s3.amazonaws.com/sireprinting.com/products/1632878721Window%20Pillow%20Boxes%20Sire%20Printing%2001.png",
    label: "Window Pillow Boxes",
  },
  {
    imageUrl:
      "https://s3.amazonaws.com/sireprinting.com/products/1663453152Holographic-Pillow-Boxes-SirePrinting-04.png",
    label: "Holographic Pillow Boxes",
  },
  {
    imageUrl:
      "https://s3.amazonaws.com/sireprinting.com/products/1663452826Black-Pillow-Boxes-SirePrinting05.png",
    label: "Black Pillow Boxes",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/sireprinting/image/upload/v1601485150/Christmas%20Pillow%20Boxes.png",
    label: "Merry Christmas Pillow Boxes",
  },
  {
    imageUrl:
      "https://s3.amazonaws.com/sireprinting.com/products/1654548469Large%20Pillow%20Boxes%20Sire%20Printing%2001.png",
    label: "Large Pillow Boxes",
  },
  {
    imageUrl:
      "https://s3.amazonaws.com/sireprinting.com/products/1654372755Standing%20Pillow%20Boxes%20Sire%20Printing%2001.png",
    label: "Standing Pillow Boxes",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/sireprinting/image/upload/v1601929467/Pillow%20Box%20Mailers.png",
    label: "Pillow Box Mailers",
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
  'https://s3.amazonaws.com/sireprinting.com/products/1632879803small-pillow-boxes-sire-printing.png',
  'https://s3.amazonaws.com/sireprinting.com/products/1632879803small-pillow-boxes-sire-printing-01.png-gallery1',
  'https://s3.amazonaws.com/sireprinting.com/products/1632879803small-pillow-boxes-sire-printing-02.png-gallery2',
  'https://s3.amazonaws.com/sireprinting.com/products/1632879803small-pillow-boxes-sire-printing-03.png-gallery3',
  'https://s3.amazonaws.com/sireprinting.com/products/1632879803small-pillow-boxes-sire-printing-04.png-gallery4',
  'https://s3.amazonaws.com/sireprinting.com/products/1632879804small-pillow-boxes-sire-printing-05.png-gallery5',
  'https://s3.amazonaws.com/sireprinting.com/products/1632879804small-pillow-boxes-sire-printing-09.png-gallery9',


];
const SmallPillowBoxes = () => {
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

  return (

    <Layout>
      <div className="flex my-10 container mx-72   ">

        <div className="custom-carousel border">
          <div className="main-image ">
            <img src={selectedImage} alt="Main Image" className="hover:scale-110 duration-500 cursor-pointer" />
            <div className="buttons">
              <button onClick={handlePrevious} className="prev-button">	&lt; </button>
              <button onClick={handleNext} className="next-button">&gt;</button>
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

export default SmallPillowBoxes;