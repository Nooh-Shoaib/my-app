import React, { useState, useEffect, useCallback } from 'react';
import LoadingComponent from './loading';
import Layout from '../layout';
import axios from 'axios';
import Url from '../utils/Url';
import Products from '../components/products';

const AllProducts = () => {
  const [loading, setLoading] = useState(true);
  const [mergedData, setMergedData] = useState([]);
  const [error, setError] = useState(null);

  const getApiData = useCallback(async () => {
    setLoading(true);
    try {
      console.log('Fetching data...');

      const endpoints = [
        `${Url}/allproducts/data`,
        `${Url}/leftoverdata/data`,
        `${Url}/otherdata/data`,
        `${Url}/nextdata/data`,
        `${Url}/entireinventory/data`,
        `${Url}/catalog/cbdData`,
      ];

      let dataArray = [];

      for (let i = 0; i < endpoints.length; i++) {
        console.log(`Fetching data from ${endpoints[i]}...`);
        const response = await axios.get(endpoints[i]);
        console.log(`Response ${i + 1}:`, response.data);
        dataArray.push(response.data);
      }

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
