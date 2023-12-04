import React, { useState, useEffect, useCallback } from 'react';
import LoadingComponent from './loading';
import { Link } from 'react-router-dom';
import Layout from '../layout';
import Quote from "./2ndpageComponents/beatQuote";
import { Helmet } from 'react-helmet';
import axios from 'axios';
import Title from './utils/Title';
import Url from './utils/Url';

const AllProducts = () => {
  const [loading, setLoading] = useState(true);
  const [mergedData, setMergedData] = useState([]);

  const getApiData = useCallback(async () => {
    setLoading(true);
    try {
      console.log('Fetching data...');

      const [firstApiResponse, secondApiResponse] = await Promise.all([
        axios.get(`${Url}/allproducts/data`),
        axios.get(`${Url}/LeftOverData/data`),
      ]);

      console.log('Responses:', firstApiResponse, secondApiResponse);

      const firstData = firstApiResponse.data;
      const secondData = secondApiResponse.data;

      console.log('Data:', firstData, secondData);

      // Merge both endpoints
      const uniqueMergedData = [...new Set([...firstData, ...secondData])];
      setMergedData(uniqueMergedData);
    } catch (error) {
      console.error('Error fetching API data:', error.message);
      setMergedData([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getApiData();
  }, []);

  const productImages = (category) => {
    return (
      <>
        <Helmet>
          <head>
            {`
          <title>${category.allProductTitle} - ${<Title />}</title>
    `}
          </head>
        </Helmet >

        <div>
          <h1 className="w-full text-center my-12 text-4xl font-semibold">
            {category.allProductTitle}
          </h1>
          <div className="w-full grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 md:px-10 gap-4 py-0 px-1">
            {category.allProductImages.map((product, productIndex) => (
              <div key={productIndex}>
                <Link to={`/${product.slug}`}>
                  <div className="text-center hover:scale-105 duration-500 hover:opacity-60 cursor-pointer">
                    {product.productImage && (
                      <img
                        src={product.productImage}
                        alt={`Product Image ${productIndex + 1}`}
                      />
                    )}
                    <div>
                      {product.productTitle && (
                        <h2 className="font-medium py-2 px-3 lg:py-4 text-[0.6rem] text-black text-sm bg-amber-500">
                          {product.productTitle}
                        </h2>
                      )}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

      </>
    );
  };

  return (
    <Layout>
      <div>
        {loading && <LoadingComponent />}
        {!loading && !mergedData.length && <div>Error: Unable to load products</div>}
        {!loading && mergedData && mergedData.length > 0 && (
          <div>
            {mergedData.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="py-10 lg:flex md:flex relative">
                  {productImages(category)}
                  <Quote imageCount={mergedData.reduce((total, category) => total + category.allProductImages.length, 0)} />
                </div>
              </div>
            ))}

          </div>
        )}
      </div>
    </Layout>
  );
};

export default AllProducts;