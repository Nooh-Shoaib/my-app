import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import PathPage from '../utils/PathPage';
import LoadingIndicator from './LoadingIndicator';
import Layout from '../components/layout';
import ProductInfoSection from '../components/ProductInfoSection';
import SideTestimonials from '../components/SideTestimonials';
import ImageWithBox from '../components/ImageWithBox';
import { Helmet } from 'react-helmet';
import renderStars from '../utils/renderstars';
import ProductNotFound from '../components/ProductNotFound';
import ErrorBoundary from '../components/ErrorBoundary';
import Products from '../components/products';
import { generateEndpoint } from '../utils/apiEndpoints';
import CarouselsThumbnails from '../components/CarouselsThumbnails';
import RelatedProducts from '../components/RelatedProducts';
import RelatedBlogsSection from '../components/RelatedBlogsSection';
import RelatedPortfolio from '../components/RelatedPortfolio';
import Breadcrumb from '../utils/Breadcrumb';
import ProductDescription from '../components/ProductDescription';


const Categories = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});
  const [data, setData] = useState([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const navigate = useNavigate();

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const endpoint = generateEndpoint(id);
      const { data: responseData } = await axios.get(`${PathPage}/${endpoint}`);
      setData(responseData.ProductImages || []);
      setProduct(responseData);
      console.log('API Response:', responseData);

      if (!responseData || (Array.isArray(responseData) && !responseData.length)) {
        console.warn('Empty or invalid data received from the API.');
        console.log('Full Response Data:', responseData);
        navigate('/');
      }
    } catch (error) {
      console.error('Error fetching data:', error.message);
      console.error('Error Response:', error.response);
      navigate('/');
    } finally {
      setLoading(false);
    }
  }, [id, navigate]);

  useEffect(() => {
    console.log('Inside useEffect - fetching data');
    console.log('Current id:', id);
    fetchData();
  }, [id, fetchData]);

  // related Portfolio
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

  const ProductView = ({ product }) => {
    if (!product || Object.keys(product).length === 0) {
      return (
        <div>
          <ProductNotFound />
        </div>
      );
    }
    return (
      <>
        <Helmet><head>{`<title>${product?.productTitle} Wholesale | sireprinting}</title>`}</head></Helmet>

        <Breadcrumb product={product} />

        <div className='mt-10'>
          <div className='flex justify-center'>
            <h1 className='lg:text-4xl text-2xl font-medium text-center'>{product?.productTitle}</h1>
          </div>
          <div className='text-center'>
            {renderStars(5)}
          </div>
        </div>

        <CarouselsThumbnails images={product?.productImages} />

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
          closeLightbox={closeLightbox}
          selectedImageIndex={selectedImageIndex}
          goToPreviousImage={goToPreviousImage}
          goToNextImage={goToNextImage}
        />
        <ImageWithBox />

        <RelatedProducts relatedProducts={product?.relatedProducts} />

        <ProductDescription description={product.description} />

        <RelatedBlogsSection relatedBlogs={product?.relatedBlogs} />
      </>
    );
  };

  return (
    <ErrorBoundary>
      <Layout>
        {loading ? (
          <LoadingIndicator />
        ) : (
          <>
            {console.log('Data Before Rendering Products:', data)}
            {id === 'products-all' && data ? (
              <Products data={data} />
            ) : (
              <ProductView product={product} />
            )}
          </>
        )}
      </Layout>
    </ErrorBoundary>
  );
};

export default Categories;


