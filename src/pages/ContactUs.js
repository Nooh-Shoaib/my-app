import React from 'react';
import Layout from "../components/layout";
import { Link } from "react-router-dom";
import { TabTitle } from '../utils/GeneralFunction';

const ContactUs = () => {
  const siteTitle = 'Contact Us | Sire Printing';

  TabTitle(siteTitle);

  const formFields = ["Full Name", "Email Address", "Phone"];

  return (
    <Layout>
      <div className='bg-white overflow-hidden '>
        <h2 className="bg-slate-200 h-12 flex items-center">
          <Link to="/" className="mx-7 font-semibold">Home</Link>
          <span className="text-xs">&raquo;&nbsp;&nbsp;</span>
          <span className="text-amber-500 font-semibold"><em>Contact Us</em></span>
        </h2>
        <div className=' lg:mx-52 mx-8   py-5 pb-24'>
          <h2 className='flex lg:justify-center my-12 lg:mr-72 text-2xl mx-12 lg:text-4xl font-semibold'>Message Us!</h2>

          {formFields.map((field, index) => (
            <div key={index} className='my-4'>
              <input
                type={field === "Phone" ? "tel" : "text"}
                className='border border-slate-400 lg:w-2/5  w-60 px-3 py-1 placeholder:text-sm'
                placeholder={field}
              />
            </div>
          ))}


          <textarea type='text' className='border border-slate-400 lg:w-2/5 w-60 px-3 py-1  placeholder:text-sm mb-5 h-44'
            placeholder='Message' />
          <div className='lg:mx-[195px] mx-[92px]'>
            <button className='bg-black px-4 py-2  text-white'>Send</button>
          </div>
          <div className='lg:absolute lg:top-2/4  min-[1024px]:right-40 my-12'>
            <h2 className='lg:text-2xl text-xl mb-8'>
              <i className="fa-solid fa-phone pr-1 text-gray-500"></i>
              <span className='text-blue-900 opacity-70'>
                <Link to="tel:+14108349965">(410) 834-9965</Link>
              </span>
            </h2>
            <h2 className='lg:text-2xl text-xl mb-8'>
              <i className="fa-solid fa-envelope pr-1 text-gray-600"></i>
              <span className='text-blue-900 opacity-70'>
                <Link to="mailto:support@sireprinting.com">support@sireprinting.com</Link>
              </span>
            </h2>
            <h2 className='lg:text-2xl text-xl text-gray-500 mb-8'>
              <i className="fa-solid fa-location-dot pr-1"></i>
              626 92nd Street Brooklyn NY 11220
            </h2>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;
