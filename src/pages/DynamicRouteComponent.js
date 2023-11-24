import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../layout';
import { Link } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ProductInfoSection from './2ndpageComponents/ProductInfoSection';
import QuoteAdvantages from './2ndpageComponents/QuoteAdvantages';
import SideTestimonials from './2ndpageComponents/SideTestimonials';
import ImageWithBox from './2ndpageComponents/ImageWithBox';
import LoadingComponent from './loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import BlogCard from './2ndpageComponents/BlogCard'
const DynamicRouteComponent = () => {
  const { slug } = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState([]);
  const [additionalState, setAdditionalState] = useState(null);
  const [currentImage, setCurrentImage] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [otherImage, setOtherImage] = useState('');
  const [otherImageIndex, setOtherImageIndex] = useState(0);
  const [remainingImage, setRemainingImage] = useState('');
  const [remainingImageIndex, setRemainingImageIndex] = useState(0);
  const [fourthImage, setFourthImage] = useState('');
  const [fourthImageIndex, setFourthImageIndex] = useState(0);
  const [fifthImage, setFifthImage] = useState('');
  const [fifthImageIndex, setFifthImageIndex] = useState(0);
  const [sixthImage, setSixthImage] = useState('');
  const [sixthImageIndex, setSixthImageIndex] = useState(0);
  const [seventhImage, setSeventhImage] = useState('');
  const [seventhImageIndex, setSeventhImageIndex] = useState(0);

  const fetchData = async (repo, imageStateSetter, indexStateSetter) => {
    try {
      const response = await fetch(`https://my-json-server.typicode.com/Nooh-Shoaib${repo}/${slug}`);

      if (response.status === 404) {
        // Handle 404, maybe set default values or return early
        return {};
      } else {
        const data = await response.json();
        setAdditionalState(data?.addition);
        imageStateSetter(data?.productImages[0]);
        indexStateSetter(0);

        setProduct(data);
        setLoading(false);

        return data;
      }
    } catch (error) {
      console.error(`Error fetching data for ${repo}:`, error.message);
      setProduct([]);
      setLoading(false);
      throw error;
    }
  };

  useEffect(() => {
    setLoading(true);

    Promise.all([
      fetchData('/products/products', setCurrentImage, setCurrentImageIndex),
      fetchData('/otherproducts/products', setOtherImage, setOtherImageIndex),
      fetchData('/remainingproducts/products', setRemainingImage, setRemainingImageIndex),
      fetchData('/fourthproducts/products', setFourthImage, setFourthImageIndex),
      fetchData('/fifthproducts/products', setFifthImage, setFifthImageIndex),
      fetchData('/sixthproducts/products', setSixthImage, setSixthImageIndex),
      fetchData('/seventhproducts/products', setSeventhImage, setSeventhImageIndex),
    ])
      .then(() => {
        console.log('All fetches are complete!');
        console.log('Current Image:', currentImage);
        console.log('Other Image:', otherImage);
        console.log('Remaining Image:', remainingImage);
        console.log('Fourth Image:', fourthImage);
        console.log('Fifth Image:', fifthImage);
        console.log('Sixth Image:', sixthImage);
        console.log('Seventh Image:', seventhImage);
      })
      .catch((error) => {
        console.error('Error during data fetching:', error.message);
      });
  }, [slug]);



  // specifications
  const MyComponent = ({ specifications }) => {
    if (specifications == undefined)
      return '';
    return (
      <div>
        {specifications.map((data, index) => (
          <ProductInfoSection
            key={index}
            title={data.name}
            description={data.detail}
          />
        ))}
      </div>
    );
  };
  // relatedProduct
  const RelatedProducts = ({ relatedProducts }) => {
    if (relatedProducts == undefined)
      return '';
    return (<>
      <h2 className='text-2xl lg:text-4xl text-center font-medium mt-5'>Related Products</h2>
      <div className="max-w-[1375px] lg:mx-32  grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 lg:px-20   mx-5 md:px-4 gap-7 pb-16 mt-5 px-1">
        {relatedProducts.map((relatedProduct, i) => {
          return (
            <Link key={i} to={"/" + relatedProduct.slug}>
              <div className="text-center  hover:scale-105 duration-500 hover:opacity-60 cursor-pointer">
                <img src={relatedProduct.productImage} alt={relatedProduct.label} loading="lazy" />
                <div>
                  <h2 className="font-medium py-2 px-3 lg:py-4 md:py-5  md:text-lg lg:text-lg ltext-[0.6rem] text-black   bg-amber-500">
                    {" "}
                    {relatedProduct.productTitle}
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


  // Carousel with Thumbnails
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleImageClick = (image, index) => {
    setSelectedImage(image);
    setSelectedIndex(index);
  };

  const handlePrevious = () => {
    const newIndex = (selectedIndex - 1 + product?.productImages.length) % product?.productImages.length;
    setSelectedImage(product?.productImages[newIndex]);
    setSelectedIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = (selectedIndex + 1) % product?.productImages.length;
    setSelectedImage(product?.productImages[newIndex]);
    setSelectedIndex(newIndex);
  };

  // relatedportfolio
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const openLightbox = (index) => {
    setSelectedImageIndex(index);
  };
  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };
  const goToPreviousImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : product?.relatedPortfolio.length - 1
    );
  };
  const goToNextImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex < product?.relatedPortfolio.length - 1 ? prevIndex + 1 : 0
    );
  };

  const RelatedPortfolio = ({ relatedPortfolio, openLightbox, selectedImageIndex, goToPreviousImage, goToNextImage }) => {
    if (relatedPortfolio == undefined)
      return '';
    return (<>
      <h1 className=" flex justify-center my-12 text-4xl font-semibold">Related Portfilio</h1>
      <div className=" max-w-[1400px] mx-auto">
        <div className="   grid lg:grid-cols-4 grid-cols-2 md:grid-cols-4 lg:px-28  md:px-20 gap-6 py-10  ">
          {relatedPortfolio.map((image, index) => (<>
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

            <img src={relatedPortfolio[selectedImageIndex]} alt={`Image ${selectedImageIndex}`} className='max-w-[100%] max-h-[80%]' />

            <button className="	absolute top-[350px] left-[480px] " onClick={goToPreviousImage}>
              <i className="fa-solid fa-chevron-left text-6xl opacity-75 hover:opacity-100"></i>
            </button>
            <button className="right-button absolute top-[350px] right-[480px] " onClick={goToNextImage}>
              <i className="fa-solid fa-chevron-right text-6xl opacity-75 hover:opacity-100"></i>
            </button>
          </div>
        )}
      </div>
    </>)

  }
  // end of relatedportfolio

  // relatedBlogs
  const RelatedBlogs = ({ relatedBlogs }) => {
    if (!relatedBlogs || relatedBlogs.length === 0) return null;

    return (
      <div>
        <h2 className="flex justify-center my-12 text-4xl font-semibold">Related Blogs</h2>
        <div className="lg:max-w-[1320px] mx-auto grid lg:grid-cols-2 grid-cols-1 md:grid-cols-4 gap-y-7 gap-x-12 md:px-20">
          {relatedBlogs.map((blog, index) => (
            <BlogCard key={index} blog={blog} />
          ))}
        </div>
      </div>
    );
  };

  const ProductView = ({ product }) => {

    if (product.slug === null) {
      return (
       ''
      );
    }
  
    const renderStars = (starCount) => {
      const stars = Array.from({ length: starCount }, (_, index) => (
        <FontAwesomeIcon key={index} icon={faStar} className="text-yellow-300" />
      ));
    
      return stars;
    };
    return (
      <>

        <h1 className="bg-slate-200 h-12 flex items-center">
          <Link to="/" className=" mx-7 font-semibold">{product?.link}</Link>
          <span className="text-xs">&raquo;&nbsp;&nbsp;</span>
          <Link to="/CBDPackaging" className=" mx-7 font-semibold">{product?.linkTitle}</Link>
          <span className="text-xs">&raquo;&nbsp;&nbsp;</span>
          <span className="text-amber-500 font-semibold"><em>{product?.productTitle}</em></span>
        </h1>

        <div className='mt-10'>
          <div className='flex justify-center'>
            <h1 className='lg:text-4xl text-2xl font-medium text-center'>{product?.productTitle}</h1>
          </div>
          <div className='text-center'>
            {/* {Array(5)
              .fill(null)
              .map((_, index) => (
                <i key={index} className="fa-solid fa-star text-yellow-300"></i>
              ))} */}
              {renderStars(5)}
          </div>
        </div>
        <div className="lg:flex my-10 md:flex justify-center">
          <div className="custom-carousel mx-8">
            <div className="w-[100%] relative border rounded mt-7">
              <img
                src={selectedImage || currentImage || otherImage || remainingImage || fourthImage || fifthImage || sixthImage || seventhImage}
                alt="Main Image"
                className="hover:scale-110 duration-500 cursor-pointer lg:w-full w-72"
              />
              <div className="absolute lg:top-[50%] top-32 lg:space-x-[358px] space-x-[202px]  mx-3">
                <button onClick={handlePrevious} className="prev-button ">
                  <i className="fa-solid fa-chevron-left"></i>
                </button>
                <button onClick={handleNext} className="next-button">
                  <i className="fa-solid fa-chevron-right"></i>
                </button>
              </div>
            </div>

            <div className="flex mt-5">
              {product?.productImages.map((image, index) => (
                <div
                  key={index}
                  className={`cursor-pointer lg:w-[90px] w-[90px] md:w-[60px]  h-[65px] mx-1 thumbnail ${index === selectedIndex ? 'active' : ''
                    }`}
                  onClick={() => handleImageClick(image, index)}
                >
                  <img src={image} alt={`Thumbnail ${index}`} />
                </div>
              ))}
            </div>

          </div>
          <div>
            <QuoteAdvantages />
          </div>
        </div>
        <div className='lg:flex justify-center md:flex gap-6'>
          <span>
            <h2 className='bg-amber-500 text-white py-2 rounded font-medium md:text-xl text-2xl lg:w-[950px] mx-2 lg:mx-0 px-7 mb-2'>{product?.productTitle} Specifications</h2>
            <MyComponent specifications={product?.specifications} />
          </span>
          <span>
            <h2 className='bg-amber-500 text-white py-2 rounded font-medium md:text-xl text-2xl text-center lg:w-[400px] mx-2 lg:mx-0  lg:my-0 md:my-0 my-4'>Customer Feedback</h2>
            <div className='flex justify-center mt-6 md:mx-4'>
              <SideTestimonials />
            </div>
          </span>
        </div>
        <RelatedPortfolio
          relatedPortfolio={product?.relatedPortfolio}
          openLightbox={openLightbox}
          selectedImageIndex={selectedImageIndex}
          goToPreviousImage={goToPreviousImage}
          goToNextImage={goToNextImage}
        />

        <ImageWithBox />

        <RelatedProducts relatedProducts={product?.relatedProducts} />
        {product?.description ? (
          <div className='mx-32 my-10'>
            {product.description.map((item, index) => (
              <div key={index}>
                <h1 className='text-4xl my-6'>{item.descriptionHeading}</h1>
                <p className='leading-9'>{item.descriptionText}</p>
              </div>
            ))}
          </div>
        ) : null}

        <RelatedBlogs
          relatedBlogs={product?.relatedBlogs}
        />
      </>
    )
  }

  return (
    <Layout>
      {loading ? <LoadingComponent /> : <ProductView product={product} additionalState={additionalState} />}
    </Layout>
  );
};

export default DynamicRouteComponent
