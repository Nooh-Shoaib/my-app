import React from 'react';

const ProductDescription = ({ description }) => {
        if (!description || !description.length) return null;

        return (
                <div className='mx-32 my-10'>
                        {description.map((item, index) => (
                                <div key={index}>
                                        <h1 className='text-4xl my-6'>{item.descriptionHeading}</h1>
                                        <p className='leading-9'>{item.descriptionText}</p>
                                </div>
                        ))}
                </div>
        );
};

export default ProductDescription;
