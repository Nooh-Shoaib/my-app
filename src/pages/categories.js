import React, { useState, useEffect, useCallback, lazy, Suspense } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
const PathPage = lazy(() => import('../utils/PathPage'));
const LoadingIndicator = lazy(() => import('./LoadingIndicator'));
const Layout = lazy(() => import('../components/layout'));
const ImageWithBox = lazy(() => import('../components/ImageWithBox'));
const ProductNotFound = lazy(() => import('../components/ProductNotFound'));
const ErrorBoundary = lazy(() => import('../components/ErrorBoundary'));
const Products = lazy(() => import('../components/products'));
const CarouselsThumbnails = lazy(() => import('../components/CarouselsThumbnails'));
const RelatedProducts = lazy(() => import('../components/RelatedProducts'));
const RelatedBlogsSection = lazy(() => import('../components/RelatedBlogsSection'));
const RelatedPortfolio = lazy(() => import('../components/RelatedPortfolio'));
const Breadcrumb = lazy(() => import('../Helpers/Breadcrumb'));
const ProductDescription = lazy(() => import('../components/ProductDescription'));
const ProductDetailsSection = lazy(() => import('../components/ProductDetailsSection'));

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
    fetchData();
  }, [id, fetchData]);

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
      <Suspense fallback={<LoadingIndicator />}>
        <Layout>
          {id === 'products-all' && data ? (
            <Products data={data} />
          ) : (
            <ProductView product={product} />
          )}
        </Layout>
      </Suspense>
    </ErrorBoundary>
  );
};

export default Categories;