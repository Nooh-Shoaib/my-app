import React from 'react';

const ProductInfoSection = ({ title, description }) => {
  return (
    <div className='flex px-2  md:mx-3 py-3  text-base hover:bg-slate-100 border-t lg:space-x-10 '>
      <div dangerouslySetInnerHTML={{ __html: title }} className=" lg:w-24 md:w-24" />
      <div dangerouslySetInnerHTML={{ __html:  description}} className='lg:w-[660px] md:w-[300px]' />
      </div>
  );
};

export default ProductInfoSection;
