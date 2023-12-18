import React from 'react';
import { Link } from 'react-router-dom';

const RelatedProducts = ({ relatedProducts }) => {
        if (!relatedProducts) return null;

        return (
                <>
                        <h2 className="text-2xl lg:text-4xl text-center font-medium mt-5">Related Products</h2>
                        <div className="max-w-[1375px] lg:mx-32 grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 lg:px-20 mx-5 md:px-4 gap-7 pb-16 mt-5 px-1">
                                {relatedProducts.map((relatedProduct, i) => (
                                        <Link key={i} to={'/' + relatedProduct.id}>
                                                <div className="text-center hover:scale-105 duration-500 hover:opacity-60 cursor-pointer">
                                                        <img src={relatedProduct.productImage} alt={relatedProduct.label} loading="lazy" />
                                                        <div>
                                                                <h2 className="font-medium py-2 px-3 lg:py-4 md:py-5 md:text-lg lg:text-lg ltext-[0.6rem] text-black bg-amber-500">
                                                                        {relatedProduct.productTitle}
                                                                </h2>
                                                        </div>
                                                </div>
                                        </Link>
                                ))}
                        </div>
                </>
        );
};

export default RelatedProducts;
