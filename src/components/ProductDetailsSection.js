import React from 'react';
import SideTestimonials from './SideTestimonials';
import ProductInfoSection from './ProductInfoSection'; // Assuming ProductInfoSection is imported from the correct location

const MyComponent = ({ specifications }) => {
        if (!specifications) return null; // Return null when specifications is falsy
        return (
                <div>
                        {specifications.map((data, index) => (
                                <ProductInfoSection key={index} title={data.name} description={data.detail} />
                        ))}
                </div>
        );
};

const ProductDetailsSection = ({ product }) => {
        if (product === undefined) {
                return null; // Explicitly return null when product is undefined
        }

        return (
                <div className='lg:flex justify-center md:flex gap-6'>
                        <span>
                                <h2 className='bg-amber-500 text-white py-2 rounded font-medium md:text-xl text-2xl lg:w-[950px] mx-2 lg:mx-0 px-7 mb-2'>
                                        {product?.productTitle} Specifications
                                </h2>
                                <MyComponent specifications={product?.specifications} />
                        </span>
                        <span>
                                <h2 className='bg-amber-500 text-white py-2 rounded font-medium md:text-xl text-2xl text-center lg:w-[400px] mx-2 lg:mx-0 lg:my-0 md:my-0 my-4'>
                                        Customer Feedback
                                </h2>
                                <div className='flex justify-center mt-6 md:mx-4'>
                                        <SideTestimonials />
                                </div>
                        </span>
                </div>
        );
};

export default ProductDetailsSection;
