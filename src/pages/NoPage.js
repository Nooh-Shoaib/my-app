import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function NoPage() {
  const customMessage = 'Page might have been removed or temporarily unavailable ';


  return (
    <>
      <Helmet>
        <title>Page Not Found</title>
      </Helmet>
      <div className='bg-amber-50 w-full h-screen'>
        <div className='h-52  py-52 mx-24 w-96 '>
          <h1 className='text-3xl flex justify-center py-5 text-black '>402 PAGE NOT FOUND</h1>
          <p className='container px-5 text-xs py-4'>
            <em>The Requested URL/your-402-page-stinks was not found on this server</em>
          </p>
          <hr />
          <p className='container px-5 text-xs py-4'>
            {customMessage}
          </p>

          <div className="button button-2">
            <Link to="/" className='flex justify-center'>Go to Home</Link>
          </div>


        </div>
      </div>
    </>
  );
}
