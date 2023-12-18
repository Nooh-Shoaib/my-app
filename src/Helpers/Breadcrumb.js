import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ product }) => {
        return (
                <h1 className="bg-slate-200 h-12 flex items-center">
                        <Link to="/" className="mx-7 font-bold hover:text-blue-600">
                                Home
                        </Link>
                        <span className="text-xs">&raquo;&nbsp;&nbsp;</span>
                        {product?.categories?.length > 0 && product?.categories[0]?.categoryid && (
                                <>
                                        <Link
                                                to={product.categories[0].categoryid}
                                                className="mx-7 font-bold hover:text-blue-600"
                                        >
                                                {product.categories[0].name}
                                        </Link>
                                        <span className="text-xs">&raquo;&nbsp;&nbsp;</span>
                                </>
                        )}
                        <span className="text-amber-500 font-bold">
                                <em>{product?.productTitle}</em>
                        </span>
                </h1>
        );
};

export default Breadcrumb;
