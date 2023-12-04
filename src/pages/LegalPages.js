import React, { useState, useEffect } from 'react';
import Layout from '../layout';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import LoadingComponent from './loading';
import Url from './utils/Url';

const LegalPages = () => {
  const { slug } = useParams();
  const [loading, setLoading] = useState(true);
  const [pagedata, setPagedata] = useState({});

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
      return pageData;
    } catch (error) {
      console.error(`Error fetching pagedata for ${slug}:`, error.message);
      setPagedata({});
      setLoading(false);
      throw error;
    }
  };

  useEffect(() => {
    fetchPageData();
  }, [slug]);

  return (
    <>
      <Helmet>
        <title>{pagedata?.pagetitle}</title>
      </Helmet>
      <Layout>
        {loading && <LoadingComponent />}
        {!loading && !pagedata && <div>Error: Unable to load page data</div>}
        {!loading && pagedata && (
          <div>
            <h1 className="flex justify-center my-12 text-4xl font-semibold">{pagedata?.pagetitle}</h1>
            <div>
              {pagedata?.description && pagedata?.description.map((data, index) => (
                <div key={index}>
                  <h2 className='text-3xl font-semibold '>{data.heading}</h2>
                  <p>{data.text}</p>
                  <Link to="tel:+14108349965" target='_blank'>
                    <h2 className='text-base font-bold'>{data.phone}</h2>
                  </Link>
                  <h2 className='text-base font-bold'>{data.email}</h2>

                </div>
              ))}
            </div>

          </div>
        )}
      </Layout>
    </>
  );
};

export default LegalPages;
