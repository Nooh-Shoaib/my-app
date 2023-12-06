import React, { useState, useEffect, useCallback } from 'react';
import LoadingComponent from './loading';
import { Link } from 'react-router-dom';
import Layout from '../layout';
import Quote from "./2ndpageComponents/beatQuote";
import axios from 'axios';
import Title from './utils/Title';
import Url from './utils/Url';
import ProductNotFound from './utils/ProductNotFound';
import NoPage from './NoPage';


const AllProducts = () => {
  const [loading, setLoading] = useState(true);
  const [mergedData, setMergedData] = useState([]);
  const [error, setError] = useState(null);

  const getApiData = useCallback(async () => {
    setLoading(true);
    try {
      console.log('Fetching data...');

      const responseArray = await Promise.all([
        axios.get(`${Url}/allproducts/data`),
        axios.get(`${Url}/leftoverdata/data`),
        axios.get(`${Url}/otherdata/data`),
        axios.get(`${Url}/nextdata/data`),
        axios.get(`${Url}/entireinventory/data`),
        axios.get(`${Url}/catalog/cbdData`),
      ]);

      console.log('Responses:', responseArray);

      const data = responseArray.map(response => response.data);

      console.log('Data:', data);

      // if (data.some(categoryData => !categoryData)) {
      //   throw new Error('Data is missing for one or more endpoints.');
      // }

      const combinedData = data.reduce((accumulator, currentData) => [...accumulator, ...currentData], []);
      setMergedData(combinedData);
    } catch (error) {
      console.error('Error fetching API data:', error.message);
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getApiData();
  }, [getApiData]);


  const productImages = (category) => {
    if (!category || !category.allProductImages) {
      return null;
    }

    return (
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
    );
  };


  return (
    <Layout>
      <div>
        {loading && <LoadingComponent />}
        {error && <div>Error fetching API data: {error.message}</div>}
        {!loading && !error && !mergedData.length && <NoPage />}
        {!loading && mergedData && mergedData.length > 0 && (
          <div>
            {mergedData.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="py-10 lg:flex md:flex relative">
                  {productImages(category)}
                  <Quote />
                </div>
              </div>
            ))}
            {mergedData[0]?.description && mergedData[0].description.length > 0 && (
              <>
                <h2>{mergedData[0].description[0].heading}</h2>
                <p>{mergedData[0].description[0].text}</p>
              </>
            )}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default AllProducts;
