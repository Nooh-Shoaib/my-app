// Import necessary modules and components
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import LoadingComponent from './loading';
import Url from '../utils/Url';

const LegalPages = () => {
  const { slug } = useParams();
  const [loading, setLoading] = useState(true);
  const [pagedata, setPagedata] = useState({});
  const [error, setError] = useState(null);

  const fetchPageData = async () => {
    try {
      const response = await fetch(`${Url}/legalpages/pagedata`);

      if (!response.ok) {
        console.error(`Error fetching pagedata for ${slug}: ${response.statusText}`);
        throw new Error(`Error fetching pagedata for ${slug}: ${response.statusText}`);
      }

      const jsonPagedata = await response.json();
      const pageData = jsonPagedata.find((page) => page.slug === slug) || {};

      const additionalResponse = await fetch(`${Url}/remainingLegalData/pagedata`);

      if (!additionalResponse.ok) {
        console.error(`Error fetching additional pagedata for ${slug}: ${additionalResponse.statusText}`);
        throw new Error(`Error fetching additional pagedata for ${slug}: ${additionalResponse.statusText}`);
      }

      const additionalJsonPagedata = await additionalResponse.json();
      const additionalPageData = additionalJsonPagedata.find((page) => page.slug === slug) || {};

      // Combine both endpoints
      const mergedPageData = { ...pageData, ...additionalPageData };

      setPagedata(mergedPageData);
      setLoading(false);
    } catch (error) {
      console.error(`Error fetching pagedata for ${slug}:`, error.message);
      setPagedata({});
      setLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchPageData();
  }, [slug]);


  return (
    <>
      <Helmet>
        <title>{pagedata?.pagetitle || 'Page Title'}</title>
      </Helmet>

      <Layout>
        {loading && <LoadingComponent />}
        {error && <div>Error: {error.message}</div>}
        {!loading && !error && !pagedata && <div>Error: Unable to load page data</div>}
        {!loading && !error && pagedata && (
          <>
            {pagedata.image && <img src={pagedata.image} alt='' className='w-full' />}

            <h1 className="bg-slate-100 h-16 flex items-center">
              <Link to="/" className="mx-4 font-bold hover:text-blue-600">
                Home
              </Link>
              <span className="text-xs">&raquo;&nbsp;&nbsp;&nbsp;</span>
              <span className="text-amber-500 font-bold">
                <em>{pagedata?.pagetitle}</em>
              </span>
            </h1>

            <div className='lg:px-48 px-5 lg:py-12 py-7'>
              <h1 className="lg:my-14 my-6 lg:text-5xl text-3xl font-semibold">{pagedata?.pagetitle}</h1>
              {pagedata?.description && pagedata?.description.map((data, index) => (
                <div key={index} className="mb-6">
                  <p className='lg:text-base text-sm md:text-base text-justify'>{data.firsttext}</p>
                  <h2 className='text-2xl font-semibold'>{data.heading}</h2>
                  <p className='lg:text-base md:text-base text-sm lg:text-justify'>{data.text}</p>
                  {data.phone && (
                    <div className="mt-2">

                      <Link to={`tel:${data.phone}`} className='hover:text-blue-500 font-bold'>
                        {data.phone}
                      </Link>
                    </div>
                  )}
                  {data.email && (
                    <div className="mt-2">
                      <Link to={`mailto:${data.email}`} className='hover:text-blue-500 font-bold'>
                        {data.email}
                      </Link>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </>
        )}
      </Layout>
    </>
  );
};

export default LegalPages;
