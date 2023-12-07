import React, { useState, useEffect, useCallback } from 'react';
import LoadingComponent from './loading';
import { Link } from 'react-router-dom';
import Layout from '../components/layout';
import Quote from "../components/beatQuote";
import axios from 'axios';
import Title from '../utils/Title';
import Url from '../utils/Url';
import ProductNotFound from '../utils/ProductNotFound';
import NoPage from './NoPage';
import Products from '../components/products';

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

      const dataArray = responseArray.map(response => response.data);

      console.log('Data Array:', dataArray);

      const combinedImages = dataArray.flatMap(data => (
        data.map(category => category.allProductImages || category.productImages || [])
      ));


      const mergedImages = combinedImages.flat();

      setMergedData(mergedImages);
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

  return (
    <Layout>
      {loading && <LoadingComponent />}
      {error && <div>1- Error fetching API data: {error.message}</div>}
      {!loading && <Products pageTitle={'All Products'} mergedData={mergedData} />}
    </Layout>
  );
};

export default AllProducts;
