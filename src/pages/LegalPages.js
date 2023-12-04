// Import necessary modules and components
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Layout from '../layout';
import LoadingComponent from './loading';
import Url from './utils/Url';

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
      setPagedata(pageData);
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
        {/* Add other meta tags as needed */}
      </Helmet>

      <Layout>
        {loading && <LoadingComponent />}
        {error && <div>Error: {error.message}</div>}
        {!loading && !error && !pagedata && <div>Error: Unable to load page data</div>}
        {!loading && !error && pagedata && (
          <>
            {pagedata.image && <img src={pagedata.image} alt='' className='w-full' />}

            <h1 className="bg-slate-200 h-16 flex items-center">
              <Link to="/" className="mx-4 font-bold hover:text-blue-600">
                Home
              </Link>
              <span className="text-xs">&raquo;&nbsp;&nbsp;&nbsp;</span>
              <span className="text-amber-500 font-bold">
                <em>{pagedata?.pagetitle}</em>
              </span>
            </h1>

            <div className='px-48 py-12'>
              <h1 className="my-4 text-4xl font-semibold">{pagedata?.pagetitle}</h1>
              {pagedata?.description && pagedata?.description.map((data, index) => (
                <div key={index} className="mb-6">
                  <p className='text-base text-justify'>{data.firsttext}</p>
                  <h2 className='text-3xl font-semibold'>{data.heading}</h2>
                  <p className='text-base text-justify'>{data.text}</p>
                  {data.phone && (
                    <div className="mt-2">
                      <h2 className='text-base font-bold'>Phone: </h2>
                      <Link to={`tel:${data.phone}`} className='text-blue-500 hover:underline'>
                        {data.phone}
                      </Link>
                    </div>
                  )}
                  {data.email && (
                    <div className="mt-2">
                      <h2 className='text-base font-bold'>Email: </h2>
                      <a href={`mailto:${data.email}`} className='text-blue-500 hover:underline'>
                        {data.email}
                      </a>
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
