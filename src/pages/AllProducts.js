import React, { useState, useEffect, useCallback } from 'react';
import LoadingComponent from './loading';
import Layout from '../components/layout';
import axios from 'axios';
import Url from '../utils/Url';
import Products from '../components/products';

const AllProducts = () => {
  const [loading, setLoading] = useState(true);
  const [data, setdata] = useState([]);
  // const [cbdData, setcbdData] = useState([]);
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
        `${Url}/catalog/data`,
      ];

      const fetchData = async (url) => {
        console.log(`Fetching data from ${url}...`);
        const response = await axios.get(url);
        console.log(`Response:`, response.data);
        return response.data;
      };

      const dataArray = await Promise.all(endpoints.map(fetchData));

      console.log('Data Array:', dataArray);

      const combinedImages = dataArray.flatMap(data => (
        data.map(category => category.allProductImages || category.productImages || [])
      ));

      const Images = combinedImages.flat();

      setdata(Images);
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
      {!loading && <Products pageTitle={'All Products'} data={data} />}
      {/* {!loading && <CBDproduct pageTitle={'All Products'} mergedData={mergedData} />} */}

    </Layout>
  );
};

export default AllProducts;