// import React, { useState, useEffect, useCallback } from 'react';
// import { useParams, Link } from 'react-router-dom'; // Added Link import
// import LoadingComponent from './loading';
// import Layout from '../components/layout';
// import axios from 'axios';
// import Url from '../utils/Url';
// // import Products from '../components/products';
// import ProductInfoSection from '../components/ProductInfoSection';
// import QuoteAdvantages from '../components/QuoteAdvantages';
// import SideTestimonials from '../components/SideTestimonials';
// import ImageWithBox from '../components/ImageWithBox';
// import BlogCard from '../components/BlogCard';
// import { Helmet } from 'react-helmet';
// import renderStars from '../utils/renderstars';
// import Quote from '../components/beatQuote';
// import ProductNotFound from '../components/ProductNotFound';
// import Repos from '../utils/MyRepos';




// const CombinedComponent = () => {
//   const { slug } = useParams();
//   const [loading, setLoading] = useState(true);
//   const [product, setProduct] = useState({});
//   const [data, setData] = useState([]);
//   const [currentImage, setCurrentImage] = useState(null);
//   useEffect(() => {
//     const Repos = [
//       'products/products',

//     ];
//     const fetchData = async () => {
//       try {
//         setLoading(true);

//         if (slug) {
//           const productResponse = await axios.get(`${Url}/${Repos}/${slug}`);
//           setProduct(productResponse.data);
//           setCurrentImage(productResponse.data?.productImages[0]);
//         } else {
//           const allProductsResponse = await axios.get(`${Url}/allproducts/data`);
//           setData(allProductsResponse.data);
//         }
//       } catch (error) {
//         console.error('Error fetching data:', error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [slug]);




//   // Carousel with thumbnails
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [selectedIndex, setSelectedIndex] = useState(0);

//   const handleImageClick = (image, index) => {
//     setSelectedImage(image);
//     setSelectedIndex(index);
//   };

//   const handlePrevious = () => {
//     const newIndex = (selectedIndex - 1 + product?.productImages.length) % product?.productImages.length;
//     setSelectedImage(product?.productImages[newIndex]);
//     setSelectedIndex(newIndex);
//   };

//   const handleNext = () => {
//     const newIndex = (selectedIndex + 1) % product?.productImages.length;
//     setSelectedImage(product?.productImages[newIndex]);
//     setSelectedIndex(newIndex);
//   };
//   // relatedportfolio
//   const [selectedImageIndex, setSelectedImageIndex] = useState(null);

//   const openLightbox = (index) => {
//     setSelectedImageIndex(index);
//   };

//   const closeLightbox = () => {
//     setSelectedImageIndex(null);
//   };

//   const goToPreviousImage = () => {
//     setSelectedImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : product?.relatedPortfolio.length - 1));
//   };

//   const goToNextImage = () => {
//     setSelectedImageIndex((prevIndex) =>
//       prevIndex < product?.relatedPortfolio.length - 1 ? prevIndex + 1 : 0
//     );
//   };

//   const RelatedProducts = ({ relatedProducts }) => {
//     if (!relatedProducts) return '';
//     return (
//       <>
//         <h2 className='text-2xl lg:text-4xl text-center font-medium mt-5'>Related Products</h2>
//         <div className='max-w-[1375px] lg:mx-32  grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 lg:px-20   mx-5 md:px-4 gap-7 pb-16 mt-5 px-1'>
//           {relatedProducts.map((relatedProduct, i) => (
//             <Link key={i} to={'/' + relatedProduct.id}>
//               <div className='text-center  hover:scale-105 duration-500 hover:opacity-60 cursor-pointer'>
//                 <img src={relatedProduct.productImage} alt={relatedProduct.label} loading='lazy' />
//                 <div>
//                   <h2 className='font-medium py-2 px-3 lg:py-4 md:py-5  md:text-lg lg:text-lg ltext-[0.6rem] text-black   bg-amber-500'>
//                     {' '}
//                     {relatedProduct.productTitle}
//                   </h2>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </>
//     );
//   };
//   const MyComponent = ({ specifications }) => {
//     if (!specifications) return '';
//     return (
//       <div>
//         {specifications.map((data, index) => (
//           <ProductInfoSection key={index} title={data.name} description={data.detail} />
//         ))}
//       </div>
//     );
//   };
//   const RelatedPortfolio = ({ relatedPortfolio }) => {
//     if (!relatedPortfolio) return '';
//     return (
//       <>
//         <h1 className=' flex justify-center my-12 text-4xl font-semibold'>Related Portfilio</h1>
//         <div className=' max-w-[1400px] mx-auto'>
//           <div className='   grid lg:grid-cols-4 grid-cols-2 md:grid-cols-4 lg:px-28  md:px-20 gap-6 py-10  '>
//             {relatedPortfolio.map((image, index) => (
//               <div key={index} className='cursor-pointer' onClick={() => openLightbox(index)}>
//                 <img src={image} alt={`Image ${index}`} />
//               </div>
//             ))}
//           </div>
//           {selectedImageIndex !== null && (
//             <div className='  fixed top-0 left-0 right-0 bottom-0  z-50 max-w-[100%] max-h-[100vh] overflow-auto flex justify-center items-center bg-black bg-opacity-80'>
//               <div className='grid grid-cols-1 space-y-32 absolute top-50 left-96'>
//                 <button className='  bg-amber-500 rounded text-lg font-medium text-white rotate-90'>
//                   <Link to='https://api.whatsapp.com/send/?phone=%2B14109468181&text&type=phone_number&app_absent=0'>
//                     Whatsapp Quote
//                   </Link>
//                 </button>
//                 <button className='bg-amber-500 rounded text-lg font-medium text-white rotate-90'>Get a Free Quote</button>
//               </div>
//               <span onClick={closeLightbox}>
//                 <i className='fa-solid fa-xmark text-2xl  absolute top-10 right-12 cursor-pointer text-white'></i>
//               </span>
//               <img src={relatedPortfolio[selectedImageIndex]} alt={`Image ${selectedImageIndex}`} className='max-w-[100%] max-h-[80%]' />
//               <button className='	absolute top-[350px] left-[480px] ' onClick={goToPreviousImage}>
//                 <i className='fa-solid fa-chevron-left text-6xl opacity-75 hover:opacity-100'></i>
//               </button>
//               <button className='right-button absolute top-[350px] right-[480px] ' onClick={goToNextImage}>
//                 <i className='fa-solid fa-chevron-right text-6xl opacity-75 hover:opacity-100'></i>
//               </button>
//             </div>
//           )}
//         </div>
//       </>
//     );
//   };

//   const RelatedBlogs = ({ relatedBlogs }) => {
//     if (!relatedBlogs || relatedBlogs.length === 0) return null;
//     return (
//       <div>
//         <h2 className='flex justify-center my-12 text-4xl font-semibold'>Related Blogs</h2>
//         <div className='lg:max-w-[1320px] mx-auto grid lg:grid-cols-2 grid-cols-1 md:grid-cols-4 gap-y-7 gap-x-12 md:px-20'>
//           {relatedBlogs.map((blog, index) => (
//             <BlogCard key={index} blog={blog} />
//           ))}
//         </div>
//       </div>
//     );
//   };


//   const ProductView = ({ product }) => {
//     if (product.id === undefined) {
//       return (
//         <div>
//           <ProductNotFound />
//         </div>
//       );
//     }
//     return (
//       <>
//         <Helmet>
//           <head>
//             {`
//           <title>${product?.productTitle} Wholesale | sireprinting}</title>
//           `}
//           </head>
//         </Helmet>


//         {/* breadcrumbs */}
//         <h1 className="bg-slate-200 h-12 flex items-center">
//           <Link to="/" className="mx-7 font-bold hover:text-blue-600">
//             Home
//           </Link>
//           <span className="text-xs">&raquo;&nbsp;&nbsp;</span>
//           {product?.categories && product?.categories.length > 0 && (
//             <>
//               {product.categories[0]?.categoryid && (
//                 <>
//                   <Link
//                     to={product.categories[0].categoryid}
//                     className="mx-7 font-bold hover:text-blue-600"
//                   >
//                     {product.categories[0].name}
//                   </Link>
//                   <span className="text-xs">&raquo;&nbsp;&nbsp;</span>
//                 </>
//               )}
//             </>
//           )}
//           <span className="text-amber-500 font-bold">
//             <em>{product?.productTitle}</em>
//           </span>
//         </h1>

//         <div className='mt-10'>
//           <div className='flex justify-center'>
//             <h1 className='lg:text-4xl text-2xl font-medium text-center'>{product?.productTitle}</h1>
//           </div>
//           <div className='text-center'>
//             {/* stars */}

//             {renderStars(5)}

//           </div>
//         </div>
//         {/* carousel with thumbnails */}
//         <div className="lg:flex my-10 md:flex justify-center">
//           <div className=" mx-8">
//             <div className="w-[100%] relative border rounded mt-7" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', maxWidth: '410px', maxHeight: '600px' }}>
//               <img
//                 src={selectedImage || currentImage}
//                 alt="Main Image"
//                 className="hover:scale-110 duration-500 cursor-pointer lg:w-full w-72"
//               />
//               <div className="absolute lg:top-[50%] top-32 lg:space-x-[358px] space-x-[202px]  mx-3">
//                 <button onClick={handlePrevious} className="prev-button ">
//                   <i className="fa-solid fa-chevron-left"></i>
//                 </button>
//                 <button onClick={handleNext} className="next-button">
//                   <i className="fa-solid fa-chevron-right"></i>
//                 </button>
//               </div>
//             </div>
//             <div className="flex mt-5">
//               {product?.productImages.map((image, index) => (
//                 <div
//                   key={index}
//                   className={`cursor-pointer lg:w-[90px] w-[90px] md:w-[60px]  h-[65px] mx-1 thumbnail ${index === selectedIndex ? 'active' : ''
//                     }`}
//                   onClick={() => handleImageClick(image, index)}
//                 >
//                   <img src={image} alt={`Thumbnail ${index}`} className='border rounded-lg object-contain' />
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div>
//             <QuoteAdvantages />
//           </div>
//         </div>
//         {/* specifications */}
//         <div className='lg:flex justify-center md:flex gap-6'>
//           <span>
//             <h2 className='bg-amber-500 text-white py-2 rounded font-medium md:text-xl text-2xl lg:w-[950px] mx-2 lg:mx-0 px-7 mb-2'>{product?.productTitle} Specifications</h2>
//             <MyComponent specifications={product?.specifications} />
//           </span>
//           <span>
//             {/* Feedback */}
//             <h2 className='bg-amber-500 text-white py-2 rounded font-medium md:text-xl text-2xl text-center lg:w-[400px] mx-2 lg:mx-0  lg:my-0 md:my-0 my-4'>Customer Feedback</h2>
//             <div className='flex justify-center mt-6 md:mx-4'>
//               <SideTestimonials />
//             </div>
//           </span>
//         </div>
//         <RelatedPortfolio
//           relatedPortfolio={product?.relatedPortfolio}
//           openLightbox={openLightbox}
//           selectedImageIndex={selectedImageIndex}
//           goToPreviousImage={goToPreviousImage}
//           goToNextImage={goToNextImage}
//         />
//         {/* text on Images */}
//         <ImageWithBox />
//         <RelatedProducts relatedProducts={product?.relatedProducts} />
//         {product?.description ? (
//           <div className='mx-32 my-10'>
//             {product.description.map((item, index) => (
//               <div key={index}>
//                 <h1 className='text-4xl my-6'>{item.descriptionHeading}</h1>
//                 <p className='leading-9'>{item.descriptionText}</p>
//               </div>
//             ))}
//           </div>
//         ) : null}
//         <RelatedBlogs
//           relatedBlogs={product?.relatedBlogs} />
//       </>
//     )
//   }





//   const Products = ({ data }) => {
//     return (
//       <div>
//         {data && data.length > 0 && (
//           <div className="py-10 lg:flex md:flex relative">
//             <div className="lg:w-2/3 md:w-2/3 mx-3">
//               <h1 className="w-full text-center my-12 text-4xl font-semibold">
//                 All Products
//               </h1>
//               <div className="w-full grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 md:px-10 gap-4 py-0 px-1">
//                 {data.map((product, productIndex) => (
//                   <div key={productIndex}>
//                     <Link to={`/${product.slug}`}>
//                       <div className="text-center hover:scale-105 duration-500 hover:opacity-60 cursor-pointer">
//                         {product.productImage && (
//                           <img
//                             src={product.productImage}
//                             alt={`Product Image ${productIndex + 1}`}
//                           />
//                         )}
//                         <div>
//                           {product.productTitle && (
//                             <h2 className="font-medium py-2 px-3 lg:py-4 text-[0.6rem] text-black text-sm bg-amber-500">
//                               {product.productTitle}
//                             </h2>
//                           )}
//                         </div>
//                       </div>
//                     </Link>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <Quote />
//           </div>
//         )}
//       </div>
//     );
//   };



//   return (
//     <Layout>
//       {loading ? (
//         <LoadingComponent />
//       ) : (
//         <>
//           {slug ? (
//             <ProductView product={product} />
//           ) : (
//             <Products pageTitle={'All Products'} data={data} />
//           )}
//         </>
//       )}
//     </Layout>

//   );
// };
// export default CombinedComponent;  



import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/layout';
import { Link } from 'react-router-dom';
import ProductInfoSection from '../components/ProductInfoSection';
import QuoteAdvantages from '../components/QuoteAdvantages';
import SideTestimonials from '../components/SideTestimonials';
import ImageWithBox from '../components/ImageWithBox';
import LoadingComponent from './loading';
import BlogCard from '../components/BlogCard';
import { Helmet } from 'react-helmet';
import renderStars from '../utils/renderstars';
import Url from '../utils/Url';
import Repos from '../utils/MyRepos';


const DynamicRouteComponent = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});
  const [currentImage, setCurrentImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const fetchProductData = async () => {
    const promises = Repos.map(async (repo) => {
      try {
        const response = await fetch(`${Url}/${repo}/${id}`);

        if (response.status === 404) {
          return null; // Return null for 404 responses
        } else {
          const data = await response.json();
          return {
            currentImage: data?.productImages[0],
            product: data,
          };
        }
      } catch (error) {
        console.error(`Error fetching product data from ${repo}:`, error.message);
        return null;
      }
    });

    const results = await Promise.all(promises);

    const validResult = results.find((result) => result !== null);

    if (validResult) {
      setCurrentImage(validResult.currentImage);
      setProduct(validResult.product);
    } else {
      throw new Error('Product data not found in any endpoint');
    }
  };

  useEffect(() => {
    const fetchDataAndSetState = async () => {
      try {
        await fetchProductData();
      } catch (error) {
        console.error('Error:', error.message);
        setProduct({});
      } finally {
        setLoading(false);
      }
    };

    fetchDataAndSetState();
    return () => {
      setProduct({});
    };
  }, [id]);

  // Carousel with thumbnails
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
    setSelectedImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : product?.relatedPortfolio.length - 1));
  };

  const goToNextImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex < product?.relatedPortfolio.length - 1 ? prevIndex + 1 : 0
    );
  };

  const RelatedProducts = ({ relatedProducts }) => {
    if (!relatedProducts) return '';
    return (
      <>
        <h2 className='text-2xl lg:text-4xl text-center font-medium mt-5'>Related Products</h2>
        <div className='max-w-[1375px] lg:mx-32  grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 lg:px-20   mx-5 md:px-4 gap-7 pb-16 mt-5 px-1'>
          {relatedProducts.map((relatedProduct, i) => (
            <Link key={i} to={'/' + relatedProduct.id}>
              <div className='text-center  hover:scale-105 duration-500 hover:opacity-60 cursor-pointer'>
                <img src={relatedProduct.productImage} alt={relatedProduct.label} loading='lazy' />
                <div>
                  <h2 className='font-medium py-2 px-3 lg:py-4 md:py-5  md:text-lg lg:text-lg ltext-[0.6rem] text-black   bg-amber-500'>
                    {' '}
                    {relatedProduct.productTitle}
                  </h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </>
    );
  };
  const MyComponent = ({ specifications }) => {
    if (!specifications) return '';
    return (
      <div>
        {specifications.map((data, index) => (
          <ProductInfoSection key={index} title={data.name} description={data.detail} />
        ))}
      </div>
    );
  };
  const RelatedPortfolio = ({ relatedPortfolio }) => {
    if (!relatedPortfolio) return '';
    return (
      <>
        <h1 className=' flex justify-center my-12 text-4xl font-semibold'>Related Portfilio</h1>
        <div className=' max-w-[1400px] mx-auto'>
          <div className='   grid lg:grid-cols-4 grid-cols-2 md:grid-cols-4 lg:px-28  md:px-20 gap-6 py-10  '>
            {relatedPortfolio.map((image, index) => (
              <div key={index} className='cursor-pointer' onClick={() => openLightbox(index)}>
                <img src={image} alt={`Image ${index}`} />
              </div>
            ))}
          </div>
          {selectedImageIndex !== null && (
            <div className='  fixed top-0 left-0 right-0 bottom-0  z-50 max-w-[100%] max-h-[100vh] overflow-auto flex justify-center items-center bg-black bg-opacity-80'>
              <div className='grid grid-cols-1 space-y-32 absolute top-50 left-96'>
                <button className='  bg-amber-500 rounded text-lg font-medium text-white rotate-90'>
                  <Link to='https://api.whatsapp.com/send/?phone=%2B14109468181&text&type=phone_number&app_absent=0'>
                    Whatsapp Quote
                  </Link>
                </button>
                <button className='bg-amber-500 rounded text-lg font-medium text-white rotate-90'>Get a Free Quote</button>
              </div>
              <span onClick={closeLightbox}>
                <i className='fa-solid fa-xmark text-2xl  absolute top-10 right-12 cursor-pointer text-white'></i>
              </span>
              <img src={relatedPortfolio[selectedImageIndex]} alt={`Image ${selectedImageIndex}`} className='max-w-[100%] max-h-[80%]' />
              <button className='	absolute top-[350px] left-[480px] ' onClick={goToPreviousImage}>
                <i className='fa-solid fa-chevron-left text-6xl opacity-75 hover:opacity-100'></i>
              </button>
              <button className='right-button absolute top-[350px] right-[480px] ' onClick={goToNextImage}>
                <i className='fa-solid fa-chevron-right text-6xl opacity-75 hover:opacity-100'></i>
              </button>
            </div>
          )}
        </div>
      </>
    );
  };

  const RelatedBlogs = ({ relatedBlogs }) => {
    if (!relatedBlogs || relatedBlogs.length === 0) return null;
    return (
      <div>
        <h2 className='flex justify-center my-12 text-4xl font-semibold'>Related Blogs</h2>
        <div className='lg:max-w-[1320px] mx-auto grid lg:grid-cols-2 grid-cols-1 md:grid-cols-4 gap-y-7 gap-x-12 md:px-20'>
          {relatedBlogs.map((blog, index) => (
            <BlogCard key={index} blog={blog} />
          ))}
        </div>
      </div>
    );
  };


  const ProductView = ({ product }) => {
    if (product.id === undefined) {
      return (
        <div>
          {/* <ProductNotFound /> */}
        </div>
      );
    }
    return (
      <>
        <Helmet>
          <head>
            {`
          <title>${product?.productTitle} Wholesale | sireprinting}</title>
          `}
          </head>
        </Helmet>


        {/* breadcrumbs */}
        <h1 className="bg-slate-200 h-12 flex items-center">
          <Link to="/" className="mx-7 font-bold hover:text-blue-600">
            Home
          </Link>
          <span className="text-xs">&raquo;&nbsp;&nbsp;</span>
          {product?.categories && product?.categories.length > 0 && (
            <>
              {product.categories[0]?.categoryid && (
                <>
                  <Link
                    to={product.categories[0].categoryid}
                    className="mx-7 font-bold hover:text-blue-600"
                  >
                    {product.categories[0].name}
                  </Link>
                  <span className="text-xs">&raquo;&nbsp;&nbsp;</span>
                </>
              )}
            </>
          )}
          <span className="text-amber-500 font-bold">
            <em>{product?.productTitle}</em>
          </span>
        </h1>

        <div className='mt-10'>
          <div className='flex justify-center'>
            <h1 className='lg:text-4xl text-2xl font-medium text-center'>{product?.productTitle}</h1>
          </div>
          <div className='text-center'>
            {/* stars */}

            {renderStars(5)}

          </div>
        </div>
        {/* carousel with thumbnails */}
        <div className="lg:flex my-10 md:flex justify-center">
          <div className=" mx-8">
            <div className="w-[100%] relative border rounded mt-7" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', maxWidth: '410px', maxHeight: '600px' }}>
              <img
                src={selectedImage || currentImage}
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
                  <img src={image} alt={`Thumbnail ${index}`} className='border rounded-lg object-contain' />
                </div>
              ))}
            </div>
          </div>
          <div>
            <QuoteAdvantages />
          </div>
        </div>
        {/* specifications */}
        <div className='lg:flex justify-center md:flex gap-6'>
          <span>
            <h2 className='bg-amber-500 text-white py-2 rounded font-medium md:text-xl text-2xl lg:w-[950px] mx-2 lg:mx-0 px-7 mb-2'>{product?.productTitle} Specifications</h2>
            <MyComponent specifications={product?.specifications} />
          </span>
          <span>
            {/* Feedback */}
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
        {/* text on Images */}
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
          relatedBlogs={product?.relatedBlogs} />
      </>
    )
  }
  return (
    <Layout>
      {loading ? (
        <LoadingComponent />
      ) : (
        <>
          <ProductView product={product} />
        </>
      )}
    </Layout>
  );
};

export default DynamicRouteComponent