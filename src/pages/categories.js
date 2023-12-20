import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import PathPage from '../utils/PathPage';
import LoadingIndicator from './LoadingIndicator';
import Layout from '../components/layout';
import ImageWithBox from '../components/ImageWithBox';
import { Helmet } from 'react-helmet';
import renderStars from '../Helpers/renderstars';
import ProductNotFound from '../components/ProductNotFound';
import ErrorBoundary from '../components/ErrorBoundary';
import Products from '../components/products';
import { generateEndpoint } from '../utils/apiEndpoints';
import CarouselsThumbnails from '../components/CarouselsThumbnails';
import RelatedProducts from '../components/RelatedProducts';
import RelatedBlogsSection from '../components/RelatedBlogsSection';
import RelatedPortfolio from '../components/RelatedPortfolio';
import Breadcrumb from '../Helpers/Breadcrumb';
import ProductDescription from '../components/ProductDescription';
import ProductDetailsSection from '../components/ProductDetailsSection';
import { useDispatch } from 'react-redux';
import { setSelectedProduct } from '../ReduxTool/productSlice';

const Categories = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const dispatch = useDispatch();
  const [product, setProduct] = useState({});
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log('Inside useEffect - fetching data');
    console.log('Current id:', id);

    const fetchData = async () => {
      try {
        dispatch(setLoading(true));
        const endpoint = generateEndpoint(id);
        const { data: responseData } = await axios.get(`${PathPage}/${endpoint}`);
        setData(responseData.ProductImages || []);
        setProduct(responseData);
        console.log('API Response:', responseData);

        if (!responseData || (Array.isArray(responseData) && !responseData.length)) {
          console.warn('Empty or invalid data received from the API.');
          console.log('Full Response Data:', responseData);
          navigate('/');
        } else {
          dispatch(setData(responseData.ProductImages || []));
          dispatch(setSelectedProduct(responseData));
        }
      } catch (error) {
        console.error('Error fetching data:', error.message);
        console.error('Error Response:', error.response);
        navigate('/');
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchData();
  }, [id, dispatch, navigate]);


  console.log('Data Before Rendering Products:', product);


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




  const ProductView = ({ product }) => {
    if (!product || Object.keys(product).length === 0) {
      return (
        <div>
          <ProductNotFound />
        </div>
      );
    }
    if (!product.productTitle || !product.productImages) {
      return <LoadingIndicator />;
    }
    return (
      <>
        <Helmet>
          <title>{`${product?.productTitle} Wholesale | sireprinting`}</title>
        </Helmet>

        <Breadcrumb product={product} />

        <div className='mt-10'>
          <div className='flex justify-center'>
            <h1 className='lg:text-4xl text-2xl font-medium text-center'>{product?.productTitle}</h1>
          </div>
          <div className='text-center'>
            {renderStars() && renderStars().length > 0 && (
              renderStars(5)
            )}
          </div>

        </div>
        <CarouselsThumbnails images={product?.productImages} />

        <ProductDetailsSection product={product} />

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