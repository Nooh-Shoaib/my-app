import React from 'react';

const ProductInfoSection = ({ title, description }) => {
  return (
    <div className='flex px-2  md:mx-3 py-3  text-base hover:bg-slate-100 border-t space-x-10 '>
      <div dangerouslySetInnerHTML={{ __html: title }} className=" w-24" />
      <div dangerouslySetInnerHTML={{ __html:  description}} className='w-[660px]' />
      </div>
  );
};

export default ProductInfoSection;
