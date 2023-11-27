import React, { useState, useEffect } from 'react';
import LoadingComponent from './loading';
import { Link } from 'react-router-dom';
import Layout from '../layout';
import Quote from "./2ndpageComponents/beatQuote";

const NavbarRoute = () => {
  const [loading, setLoading] = useState(true);
  const [navbarProduct, setNavbarProduct] = useState([]);

  const getApiData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://my-json-server.typicode.com/Nooh-Shoaib/Example/navbarProduct`
      );
      const data = await response.json();
      setNavbarProduct(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching API data:', error);
      setNavbarProduct([]);
      setLoading(false);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  // console.log("navbarProduct:", navbarProduct);

  const productImages = (category) => {
    return (
      <div className=" lg:w-2/3 md:w-2/3 mx-3 overflow-hidden">

           {category.allProductTitle && (
        <h1 className="w-full text-center my-12 text-4xl font-semibold">{category.allProductTitle}</h1>
             )}
        <div className=" w-full grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 md:px-10 gap-4 py-0 px-1">
          {category.allProductImages &&
            category.allProductImages.map((product, productIndex) => (
              <div key={productIndex}>
                <Link to={`/${product.slug}`}>
                  <div className="text-center hover:scale-105 duration-500 hover:opacity-60 cursor-pointer">
                    {product.productImage && (

                      <img
                        src={product.productImage}
                        alt={`Product Image ${productIndex + 1}`}
                      />
                    )}
                    <div>
                      {product.productTitle && <h2 className="font-medium py-2 px-3 lg:py-4 text-[0.6rem] text-black text-sm bg-amber-500">{product.productTitle}</h2>}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    );
  };

  return (
    <Layout>
      <div>
        {loading && <LoadingComponent />}
        {!loading && !navbarProduct.length && 0 (
          <div>Error: Unable to load products</div>
        )}
        {!loading && navbarProduct && navbarProduct.length > 0 && (
        <div>
          {navbarProduct.map((category, categoryIndex) => (
            <div key={categoryIndex}>
            
           
             < div className="py-10 lg:flex md:flex relative">
             {productImages(category)}
							<Quote />

						</div>

              {category.productDescription &&
                  category.productDescription.length > 0 && (
              <div>
                <h2>{category.productDescription[0].productDescriptionHeading}</h2>
                <p>{category.productDescription[0].productDescriptionText}</p>
              </div>
              )} 
            </div>
          ))}
        </div>
        )} 
      </div>
    </Layout>
  );
};

export default NavbarRoute;
